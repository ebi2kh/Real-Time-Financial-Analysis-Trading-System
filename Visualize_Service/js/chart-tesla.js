$(function () {
  var socket = io.connect("http://localhost:8000");
  let RSI_tesla = {
    TSLA: {
      label: "TSLA",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };
  let EMI_tesla = {
    TSLA: {
      label: "TSLA",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };

  let movingAvg_tesla = {
    TSLA: {
      label: "TSLA",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };

  let tesla_main_tesla = {
    TSLA: {
      label: "TSLA",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };
  var rsiteslaChart;
  var emiteslaChart;
  var movingAvgteslaChart;
  socket.on("newdata", function (data) {
    let serverData = data.data;
    console.log(serverData);
    if (
      !("data_type" in serverData) &&
      "timestamp" in serverData &&
      "rsi" in serverData &&
      "stock_symbol" in serverData
    ) {
      // Update RSI chart for tesla
      if (serverData.stock_symbol === "TSLA") {
        let date = new Date(serverData.timestamp * 1000);
        let time = date.toTimeString().split(" ")[0];

        rsiteslaChart.data.labels.push(time);
        RSI_tesla.TSLA.data.push({
          x: time,
          y: serverData.rsi,
        });

        // Update tesla main chart (closing price)
        teslaMainChart.data.labels.push(time);
        tesla_main_tesla.TSLA.data.push({
          x: time,
          y: serverData.closing_price,
        });

        // Calculate EMI for tesla
        let ema = serverData.exponential_moving_average;
        emiteslaChart.data.labels.push(time);
        EMI_tesla.TSLA.data.push({
          x: time,
          y: ema,
        });

        // Update Moving Average for tesla
        let movingAvg = serverData.moving_average;
        movingAvgteslaChart.data.labels.push(time);
        movingAvg_tesla.TSLA.data.push({
          x: time,
          y: movingAvg,
        });

        // Update all charts
      }
      teslaMainChart.update();
      emiteslaChart.update();
      movingAvgteslaChart.update();
      rsiteslaChart.update();
    }
  });

  // Initialize the RSI chart for tesla
  if ($("#RSI-tesla").length) {
    let lineChartCanvas = $("#RSI-tesla").get(0).getContext("2d");
    rsiteslaChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(RSI_tesla),
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

  // Initialize tesla main chart (Closing Price)
  if ($("#tesla-main").length) {
    let lineChartCanvas = $("#tesla-main").get(0).getContext("2d");
    teslaMainChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(tesla_main_tesla),
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

  // Initialize EMI chart for tesla
  if ($("#emi-tesla").length) {
    let lineChartCanvas = $("#emi-tesla").get(0).getContext("2d");
    emiteslaChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(EMI_tesla),
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

  // Initialize Moving Average chart for tesla
  if ($("#moving-avg-tesla").length) {
    let lineChartCanvas = $("#moving-avg-tesla").get(0).getContext("2d");
    movingAvgteslaChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(movingAvg_tesla),
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
