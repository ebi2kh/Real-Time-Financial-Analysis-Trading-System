$(function () {
  var socket = io.connect("http://localhost:8000");
  let RSI_aapl = {
    AAPL: {
      label: "AAPL",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };
  let EMI_aapl = {
    AAPL: {
      label: "AAPL",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };

  let movingAvg_aapl = {
    AAPL: {
      label: "AAPL",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };

  let aapl_main_aapl = {
    AAPL: {
      label: "AAPL",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };
  var rsiaaplChart;
  var emiaaplChart;
  var movingAvgaaplChart;
  socket.on("newdata", function (data) {
    let serverData = data.data;
    console.log(serverData);
    if (
      !("data_type" in serverData) &&
      "timestamp" in serverData &&
      "rsi" in serverData &&
      "stock_symbol" in serverData
    ) {
      // Update RSI chart for aapl
      if (serverData.stock_symbol === "AAPL") {
        let date = new Date(serverData.timestamp * 1000);
        let time = date.toTimeString().split(" ")[0];

        rsiaaplChart.data.labels.push(time);
        RSI_aapl.AAPL.data.push({
          x: time,
          y: serverData.rsi,
        });

        // Update aapl main chart (closing price)
        aaplMainChart.data.labels.push(time);
        aapl_main_aapl.AAPL.data.push({
          x: time,
          y: serverData.closing_price,
        });

        // Calculate EMI for aapl
        let ema = serverData.exponential_moving_average;
        emiaaplChart.data.labels.push(time);
        EMI_aapl.AAPL.data.push({
          x: time,
          y: ema,
        });

        // Update Moving Average for aapl
        let movingAvg = serverData.moving_average;
        movingAvgaaplChart.data.labels.push(time);
        movingAvg_aapl.AAPL.data.push({
          x: time,
          y: movingAvg,
        });

        // Update all charts
      }
      aaplMainChart.update();
      emiaaplChart.update();
      movingAvgaaplChart.update();
      rsiaaplChart.update();
    }
  });

  // Initialize the RSI chart for aapl
  if ($("#RSI-aapl").length) {
    let lineChartCanvas = $("#RSI-aapl").get(0).getContext("2d");
    rsiaaplChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(RSI_aapl),
      },
      options: {
        scales: {
          x: {
            type: "time",
          },
        },
      },
    });
  }

  // Initialize aapl main chart (Closing Price)
  if ($("#aapl-main").length) {
    let lineChartCanvas = $("#aapl-main").get(0).getContext("2d");
    aaplMainChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(aapl_main_aapl),
      },
      options: {
        scales: {
          x: {
            type: "time",
            time: {
              unit: "second",
            },
          },
        },
      },
    });
  }

  // Initialize EMI chart for aapl
  if ($("#emi-aapl").length) {
    let lineChartCanvas = $("#emi-aapl").get(0).getContext("2d");
    emiaaplChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(EMI_aapl),
      },
      options: {
        scales: {
          x: {
            type: "time",
          },
        },
      },
    });
  }

  // Initialize Moving Average chart for aapl
  if ($("#moving-avg-aapl").length) {
    let lineChartCanvas = $("#moving-avg-aapl").get(0).getContext("2d");
    movingAvgaaplChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(movingAvg_aapl),
      },
      options: {
        scales: {
          x: {
            type: "time",
          },
        },
      },
    });
  }
});
