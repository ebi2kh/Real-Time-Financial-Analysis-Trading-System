package org.project;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.json.JSONObject;

import java.time.Duration;
import java.util.*;
//
public class Main {
    public static void main(String[] args) {


        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092");
        props.put("group.id", "test");
        props.put("enable.auto.commit", "true");
        props.put("auto.commit.interval.ms", "1000");
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
        props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");

        KafkaProducer<String, String> producer = new KafkaProducer<>(props);
        KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);

        consumer.subscribe(Collections.singletonList("dataTopic"));

        // Initialize data structures for calculations
        Map<String, Queue<Double>> closingPrices = new HashMap<>();
        Map<String, Queue<Double>> lastClosingPrices = new HashMap<>();
        Map<String, Double> previousEMAs = new HashMap<>();
        int period = 2;  // adjust as needed

        while (true) {
            ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
            for (ConsumerRecord<String, String> record : records) {
                System.out.println("Received data: " + record.value());

                // Parse the JSON data
                JSONObject data = new JSONObject(record.value());
                if (data.has("data_type")) {
                    continue;  // skip metadata
                }

                String stockSymbol = data.getString("stock_symbol");
                double closingPrice = data.getDouble("closing_price");

                // Calculate moving average
                Queue<Double> prices = closingPrices.getOrDefault(stockSymbol, new LinkedList<>());
                double movingAverage = calculateMovingAverage(prices, closingPrice, period);
                closingPrices.put(stockSymbol, prices);

                // Calculate exponential moving average
                double previousEMA = previousEMAs.getOrDefault(stockSymbol, closingPrice);
                double EMA = calculateEMA(previousEMA, closingPrice, period);
                previousEMAs.put(stockSymbol, EMA);

                // Store the closing prices for RSI calculation
                Queue<Double> pricesForRSI = lastClosingPrices.getOrDefault(stockSymbol, new LinkedList<>());
                pricesForRSI.add(closingPrice);
                if (pricesForRSI.size() > period) {
                    pricesForRSI.remove();  // remove the oldest price
                }
                lastClosingPrices.put(stockSymbol, pricesForRSI);

                // Calculate RSI
                double RSI = calculateRSI(new ArrayList<>(pricesForRSI));

                // Add calculated data to the original data
                data.put("moving_average", movingAverage);
                data.put("EMA", EMA);
                data.put("RSI", RSI);
                System.out.println("from print+ "+ data.toString());
                // Send the data to the result topic
                producer.send(new ProducerRecord<String, String>("resultTopic", data.toString()));
            }
        }
    }

    // Add your calculation methods here...
    public static double calculateMovingAverage(Queue<Double> closingPrices, double newPrice, int period) {
        closingPrices.add(newPrice);
        if (closingPrices.size() > period) {
            closingPrices.remove();  // remove the oldest price
        }
        double result = closingPrices.stream().mapToDouble(val -> val).average().orElse(0.0);
        System.out.println("calculateMovingAverage:"+ result);
        return closingPrices.stream().mapToDouble(val -> val).average().orElse(0.0);
    }

    public static double calculateEMA(double previousEMA, double newPrice, int period) {
        double smoothingConstant = 2.0 / (period + 1);
        System.out.println("calculateEMA:"+ ((newPrice - previousEMA) * smoothingConstant + previousEMA));
        return (newPrice - previousEMA) * smoothingConstant + previousEMA;
    }

//    public static double calculateRSI(List<Double> closingPrices) {
//        int period = 2;  // typically a 14-day period is used
//        double avgGain = 0, avgLoss = 0;
//        for (int i = period; i < closingPrices.size(); i++) {
//            double change = closingPrices.get(i) - closingPrices.get(i - 1);
//            if (change >= 0) {
//                avgGain += change;
//            } else {
//                avgLoss -= change;  // losses are positive values
//            }
//        }
//        avgGain /= period;
//        avgLoss /= period;
//        double rs = (avgLoss != 0) ? avgGain / avgLoss : 0;
//        System.out.println("calculateRSI:"+ (100 - (100 / (1 + rs))));
//        return 100 - (100 / (1 + rs));
//    }

//    public static double calculateRSI(List<Double> closingPrices) {
//        int period = 2;  // adjust as needed
//        if (closingPrices.size() < period) {
//            return 0;  // not enough data
//        }
//
//        double avgGain = 0, avgLoss = 0;
//        for (int i = period; i < closingPrices.size(); i++)  {
//            double change = closingPrices.get(closingPrices.size() - i) - closingPrices.get(closingPrices.size() - i + 1);
//            System.out.println("change: "+ change);
//            if (change >= 0) {
//                avgGain += change / period;
//            } else {
//                avgLoss -= change / period;
//            }
//        }
//
//        if (avgLoss == 0) {
//            return 100;  // prevent division by zero
//        }
//
//        double rs = avgGain / avgLoss;
//        double r  =100 - (100 / (1 + rs));
//        System.out.println("RSI:"+ r + " avgloss: "+ avgLoss + " avgGain: "+ avgGain );
//        return 100 - (100 / (1 + rs));
//    }

    public static double calculateRSI(List<Double> closingPrices) {
        int period = 2;  // adjust as needed
        if (closingPrices.size() < period + 1) {
            return 0;  // not enough data
        }

        double gain = 0, loss = 0;
        for (int i = closingPrices.size() - period - 1; i < closingPrices.size() - 1; i++) {
            double change = closingPrices.get(i + 1) - closingPrices.get(i);
            if (change >= 0) {
                gain += change;
            } else {
                loss -= change;
            }
        }

        double avgGain = gain / period;
        double avgLoss = loss / period;

        if (avgLoss == 0) {
            if (avgGain == 0) {
                return 50;  // price didn't change
            }
            return 100;  // price only went up
        }

        double rs = avgGain / avgLoss;
        double r  = 100 - (100 / (1 + rs));
        System.out.println("RSI "+ r );
        return 100 - (100 / (1 + rs));
    }

}