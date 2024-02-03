$(function () {
  var socket = io.connect("http://localhost:8000");
  let RSI_microsoft = {
    microsoft: {
      label: "microsoft",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };
  let EMI_microsoft = {
    microsoft: {
      label: "microsoft",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };

  let movingAvg_microsoft = {
    microsoft: {
      label: "microsoft",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };

  let microsoft_main_microsoft = {
    microsoft: {
      label: "microsoft",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };
  var rsimicrosoftChart;
  var emimicrosoftChart;
  var movingAvgmicrosoftChart;
  socket.on("newdata", function (data) {
    let serverData = data.data;
    console.log(serverData);
    if (
      !("data_type" in serverData) &&
      "timestamp" in serverData &&
      "rsi" in serverData &&
      "stock_symbol" in serverData
    ) {
      // Update RSI chart for microsoft
      if (serverData.stock_symbol === "MSFT") {
        let date = new Date(serverData.timestamp * 1000);
        let time = date.toTimeString().split(" ")[0];

        rsimicrosoftChart.data.labels.push(time);
        RSI_microsoft.microsoft.data.push({
          x: time,
          y: serverData.rsi,
        });

        // Update microsoft main chart (closing price)
        microsoftMainChart.data.labels.push(time);
        microsoft_main_microsoft.microsoft.data.push({
          x: time,
          y: serverData.closing_price,
        });

        // Calculate EMI for microsoft
        let ema = serverData.exponential_moving_average;
        emimicrosoftChart.data.labels.push(time);
        EMI_microsoft.microsoft.data.push({
          x: time,
          y: ema,
        });

        // Update Moving Average for microsoft
        let movingAvg = serverData.moving_average;
        movingAvgmicrosoftChart.data.labels.push(time);
        movingAvg_microsoft.microsoft.data.push({
          x: time,
          y: movingAvg,
        });

        // Update all charts
      }
      microsoftMainChart.update();
      emimicrosoftChart.update();
      movingAvgmicrosoftChart.update();
      rsimicrosoftChart.update();
    }
  });

  // Initialize the RSI chart for microsoft
  if ($("#RSI-microsoft").length) {
    let lineChartCanvas = $("#RSI-microsoft").get(0).getContext("2d");
    rsimicrosoftChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(RSI_microsoft),
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

  // Initialize microsoft main chart (Closing Price)
  if ($("#microsoft-main").length) {
    let lineChartCanvas = $("#microsoft-main").get(0).getContext("2d");
    microsoftMainChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(microsoft_main_microsoft),
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

  // Initialize EMI chart for microsoft
  if ($("#emi-microsoft").length) {
    let lineChartCanvas = $("#emi-microsoft").get(0).getContext("2d");
    emimicrosoftChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(EMI_microsoft),
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

  // Initialize Moving Average chart for microsoft
  if ($("#moving-avg-microsoft").length) {
    let lineChartCanvas = $("#moving-avg-microsoft").get(0).getContext("2d");
    movingAvgmicrosoftChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(movingAvg_microsoft),
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
