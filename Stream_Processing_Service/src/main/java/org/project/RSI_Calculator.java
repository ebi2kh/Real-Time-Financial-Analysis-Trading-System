package org.project;

import java.util.LinkedList;
import java.util.Queue;

public class RSI_Calculator {
    private final Queue<Double> gainHistory = new LinkedList<>();
    private final Queue<Double> lossHistory = new LinkedList<>();
    private double avgGain;
    private double avgLoss;

    private final int period;
    private double prevPrice;

    public RSI_Calculator(int period) {
        this.period = period;
    }

    public void addNewPrice(double price) {
        if (prevPrice > 0) {
            double gain = price - prevPrice > 0 ? price - prevPrice : 0;
            double loss = prevPrice - price > 0 ? prevPrice - price : 0;

            gainHistory.add(gain);
            lossHistory.add(loss);

            if (gainHistory.size() > period) {
                gainHistory.remove();
                lossHistory.remove();
            }

            avgGain = gainHistory.stream().mapToDouble(val -> val).average().orElse(0.0);
            avgLoss = lossHistory.stream().mapToDouble(val -> val).average().orElse(0.0);
        }

        prevPrice = price;
    }

    public double calculateRSI() {
        if (avgLoss == 0) {
            return 100;
        } else {
            double rs = avgGain / avgLoss;
            return 100 - (100 / (1 + rs));
        }
    }
}
