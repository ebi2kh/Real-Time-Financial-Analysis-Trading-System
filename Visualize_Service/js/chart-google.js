$(function () {
  var socket = io.connect("http://localhost:8000");
  let RSI_GOOGLE = {
    GOOGL: {
      label: "GOOGL",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };
  let EMI_GOOGLE = {
    GOOGL: {
      label: "GOOGL",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };

  let movingAvg_GOOGLE = {
    GOOGL: {
      label: "GOOGL",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };

  let google_main_GOOGLE = {
    GOOGL: {
      label: "GOOGL",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
  };
  var rsiGoogleChart;
  var emiGoogleChart;
  var movingAvgGoogleChart;
  socket.on("newdata", function (data) {
    let serverData = data.data;
    console.log(serverData);
    if (
      !("data_type" in serverData) &&
      "timestamp" in serverData &&
      "rsi" in serverData &&
      "stock_symbol" in serverData
    ) {
      // Update RSI chart for Google
      if (serverData.stock_symbol === "GOOGL") {
        let date = new Date(serverData.timestamp * 1000);
        let time = date.toTimeString().split(" ")[0];

        rsiGoogleChart.data.labels.push(time);
        RSI_GOOGLE.GOOGL.data.push({
          x: time,
          y: serverData.rsi,
        });

        // Update Google main chart (closing price)
        googleMainChart.data.labels.push(time);
        google_main_GOOGLE.GOOGL.data.push({
          x: time,
          y: serverData.closing_price,
        });

        // Calculate EMI for Google
        let ema = serverData.exponential_moving_average;
        emiGoogleChart.data.labels.push(time);
        EMI_GOOGLE.GOOGL.data.push({
          x: time,
          y: ema,
        });

        // Update Moving Average for Google
        let movingAvg = serverData.moving_average;
        movingAvgGoogleChart.data.labels.push(time);
        movingAvg_GOOGLE.GOOGL.data.push({
          x: time,
          y: movingAvg,
        });

        // Update all charts
      }
      googleMainChart.update();
      emiGoogleChart.update();
      movingAvgGoogleChart.update();
      rsiGoogleChart.update();
    }
  });

  // Initialize the RSI chart for Google
  if ($("#RSI-google").length) {
    let lineChartCanvas = $("#RSI-google").get(0).getContext("2d");
    rsiGoogleChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(RSI_GOOGLE),
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

  // Initialize Google main chart (Closing Price)
  if ($("#google-main").length) {
    let lineChartCanvas = $("#google-main").get(0).getContext("2d");
    googleMainChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(google_main_GOOGLE),
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

  // Initialize EMI chart for Google
  if ($("#emi-google").length) {
    let lineChartCanvas = $("#emi-google").get(0).getContext("2d");
    emiGoogleChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(EMI_GOOGLE),
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

  // Initialize Moving Average chart for Google
  if ($("#moving-avg-google").length) {
    let lineChartCanvas = $("#moving-avg-google").get(0).getContext("2d");
    movingAvgGoogleChart = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(movingAvg_GOOGLE),
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
