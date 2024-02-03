$(function () {
  var socket = io.connect("http://localhost:8000");
  let RSI_amzn = {
    amzn: {
      label: "amzn",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };
  let EMI_amzn = {
    amzn: {
      label: "amzn",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };

  let movingAvg_amzn = {
    amzn: {
      label: "amzn",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };

  let amzn_main_amzn = {
    amzn: {
      label: "amzn",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };
  var rsiamznChart;
  var emiamznChart;
  var movingAvgamznChart;
  socket.on("newdata", function (data) {
    let serverData = data.data;
    console.log(serverData);
    if (
      !("data_type" in serverData) &&
      "timestamp" in serverData &&
      "rsi" in serverData &&
      "stock_symbol" in serverData
    ) {
      // Update RSI chart for amzn
      if (serverData.stock_symbol === "AMZN") {
        let date = new Date(serverData.timestamp * 1000);
        let time = date.toTimeString().split(" ")[0];

        rsiamznChart.data.labels.push(time);
        RSI_amzn.amzn.data.push({
          x: time,
          y: serverData.rsi,
        });

        // Update amzn main chart (closing price)
        amznMainChart.data.labels.push(time);
        amzn_main_amzn.amzn.data.push({
          x: time,
          y: serverData.closing_price,
        });

        // Calculate EMI for amzn
        let ema = serverData.exponential_moving_average;
        emiamznChart.data.labels.push(time);
        EMI_amzn.amzn.data.push({
          x: time,
          y: ema,
        });

        // Update Moving Average for amzn
        let movingAvg = serverData.moving_average;
        movingAvgamznChart.data.labels.push(time);
        movingAvg_amzn.amzn.data.push({
          x: time,
          y: movingAvg,
        });

        // Update all charts
      }
      amznMainChart.update();
      emiamznChart.update();
      movingAvgamznChart.update();
      rsiamznChart.update();
    }
  });

  // Initialize the RSI chart for amzn
  if ($("#RSI-amzn").length) {
    let lineChartCanvas = $("#RSI-amzn").get(0).getContext("2d");
    rsiamznChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(RSI_amzn),
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

  // Initialize amzn main chart (Closing Price)
  if ($("#amzn-main").length) {
    let lineChartCanvas = $("#amzn-main").get(0).getContext("2d");
    amznMainChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(amzn_main_amzn),
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

  // Initialize EMI chart for amzn
  if ($("#emi-amzn").length) {
    let lineChartCanvas = $("#emi-amzn").get(0).getContext("2d");
    emiamznChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(EMI_amzn),
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

  // Initialize Moving Average chart for amzn
  if ($("#moving-avg-amzn").length) {
    let lineChartCanvas = $("#moving-avg-amzn").get(0).getContext("2d");
    movingAvgamznChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(movingAvg_amzn),
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
