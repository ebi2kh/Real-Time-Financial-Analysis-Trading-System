$(function () {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  "use strict";
  let data = {
    labels: [
      "GOOGLE BUY",
      "GOOGLE SELL",
      "GOOGLE Natural",
      "TSLA BUY",
      "TSLA SELL",
      "TSLA Natural",
      "MSLF BUY",
      "MSLF SELL",
      "AAPL Natural",
      "AAPL BUY",
      "AAPL SELL",
      "MSLF Natural",
      "AMZN BUY",
      "AMZN SELL",
      "AMZN Natural",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          10, 19, 3, 5, 2, 3, 10, 19, 3, 5, 2, 3, 15, 19, 3, 5, 2, 3, 10, 19, 3,
          5, 2, 3,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        fill: false,
      },
    ],
  };
  // let multiLineData = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //   datasets: [
  //     {
  //       label: "GOOGLE",
  //       data: [12, 19, 3, 5, 2, 3],
  //       borderColor: ["#587ce4"],
  //       borderWidth: 2,
  //       fill: false,
  //     },
  //     {
  //       label: "TSLA",
  //       data: [5, 23, 7, 12, 42, 23],
  //       borderColor: ["#ede190"],
  //       borderWidth: 2,
  //       fill: false,
  //     },
  //     {
  //       label: "AAPL",
  //       data: [15, 10, 21, 32, 12, 33],
  //       borderColor: ["#f44252"],
  //       borderWidth: 2,
  //       fill: false,
  //     },
  //     {
  //       label: "AMZN",
  //       data: [15, 45, 21, 33, 23, 33],
  //       borderColor: ["#454345"],
  //       borderWidth: 2,
  //       fill: false,
  //     },
  //     {
  //       label: "MSFT",
  //       data: [15, 45, 21, 33, 23, 33],
  //       borderColor: ["#454345"],
  //       borderWidth: 2,
  //       fill: false,
  //     },
  //   ],
  // };
  var lineChart3;
  let options = {
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: "Chart.js Line Chart - Multi Axis",
        },
      },
      scales: {
        y: {
          type: "linear",
          display: true,
          position: "left",
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",

          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
    },
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true,
    //       },
    //     },
    //   ],
    // },
    // legend: {
    //   display: true,
    // },
    // elements: {
    //   point: {
    //     radius: 0,
    //   },
    // },
  };
  // ---------------------------------------------------------------
  // var socket = io.connect("http://localhost:8000");
  // socket.on("newdata", function (data) {
  //   console.log(data);
  //   document.getElementById("data").innerHTML +=
  //     JSON.stringify(data.data) + "<br>";
  // });
  var lineChart5;
  var multiLineData = {
    labels: [],
    datasets: [
      {
        label: "AAPL",
        data: [],
        borderColor: ["#587ce4"],
        borderWidth: 2,
        fill: false,
      },
      {
        label: "GOOGL",
        data: [],
        borderColor: ["#ede190"],
        borderWidth: 2,
        fill: false,
      },
      {
        label: "AMZN",
        data: [],
        borderColor: ["#f44252"],
        borderWidth: 2,
        fill: false,
      },
      {
        label: "MSFT",
        data: [],
        borderColor: ["#454345"],
        borderWidth: 2,
        fill: false,
      },
      {
        label: "TSLA",
        data: [],
        borderColor: ["#454345"],
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  // var socket = io.connect("http://localhost:8000");

  // socket.on("newdata", function (data) {
  //   var receivedData;

  //   if (typeof data.data === "string") {
  //     try {
  //       receivedData = JSON.parse(data.data);
  //     } catch (error) {
  //       console.error("Error parsing data:", error);
  //       return;
  //     }
  //   } else if (typeof data.data === "object") {
  //     receivedData = data.data;
  //   } else {
  //     console.error(
  //       "Received data is neither an object nor a string:",
  //       data.data
  //     );
  //     return;
  //   }

  //   console.log("Received data: ", receivedData);

  //   // Check if data_type field is not present
  //   // if (!receivedData.hasOwnProperty("data_type")) {
  //   //   // Convert timestamp to a readable format
  //   //   var date = new Date(receivedData.timestamp * 1000);
  //   //   var hours = date.getHours();
  //   //   var minutes = "0" + date.getMinutes();
  //   //   var seconds = "0" + date.getSeconds();
  //   //   var formattedTime =
  //   //     hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  //   //   // Add the timestamp to the labels array
  //   //   multiLineData.labels.push(formattedTime);

  //   //   // Update the corresponding dataset
  //   //   for (var i = 0; i < multiLineData.datasets.length; i++) {
  //   //     if (multiLineData.datasets[i].label === receivedData.stock_symbol) {
  //   //       multiLineData.datasets[i].data.push(receivedData.closing_price);
  //   //     }
  //   //   }

  //   //   // Check if the lengths of the labels array and the data arrays match
  //   //   for (var i = 0; i < multiLineData.datasets.length; i++) {
  //   //     if (
  //   //       multiLineData.labels.length !== multiLineData.datasets[i].data.length
  //   //     ) {
  //   //       console.error(
  //   //         "Mismatch in lengths of labels and data arrays for dataset:",
  //   //         multiLineData.datasets[i].label
  //   //       );
  //   //     }
  //   //   }

  //   //   // Update the chart
  //   //   if (lineChart5) {
  //   //     lineChart5.update();
  //   //   } else {
  //   //     console.log("Chart not initialized");
  //   //   }
  //   // }
  //   // Check if data_type field is not present

  //   // Check if data_type field is not present
  //   if (!receivedData.hasOwnProperty("data_type")) {
  //     // Get the current system time
  //     var date = new Date();
  //     var hours = date.getHours();
  //     var minutes = "0" + date.getMinutes();
  //     var seconds = "0" + date.getSeconds();
  //     var formattedTime =
  //       hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  //     // Add the current time to the labels array
  //     multiLineData.labels.push(formattedTime);

  //     // Update the corresponding dataset
  //     for (var i = 0; i < multiLineData.datasets.length; i++) {
  //       if (multiLineData.datasets[i].label === receivedData.stock_symbol) {
  //         multiLineData.datasets[i].data.push(receivedData.closing_price);
  //       } else {
  //         // If the stock symbol does not match, push null
  //         multiLineData.datasets[i].data.push(null);
  //       }

  //       // Filter out null values
  //       multiLineData.datasets[i].data = multiLineData.datasets[i].data.filter(
  //         (value) => value !== null
  //       );
  //     }

  //     // Update the chart
  //     if (lineChart5) {
  //       lineChart5.update();
  //     } else {
  //       console.log("Chart not initialized");
  //     }
  //   }
  // });

  // if ($("#linechart-multi-main").length) {
  //   var multiLineCanvas = $("#linechart-multi-main").get(0).getContext("2d");
  //   lineChart5 = new Chart(multiLineCanvas, {
  //     type: "line",
  //     data: multiLineData,
  //     options: options,
  //   });
  // } else {
  //   console.error("Chart canvas not found");
  // }

  // --------------------------------------------------------------------

  let doughnutPieData = {
    datasets: [
      {
        data: [30, 40, 34],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Sell", "Buy", "Natural"],
  };
  let doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };
  let areaData = {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        fill: true, // 3: no fill
      },
    ],
  };

  let areaOptions = {
    plugins: {
      filler: {
        propagate: true,
      },
    },
  };

  let multiAreaData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Facebook",
        data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
        borderColor: ["rgba(255, 99, 132, 0.5)"],
        backgroundColor: ["rgba(255, 99, 132, 0.5)"],
        borderWidth: 1,
        fill: true,
      },
      {
        label: "Twitter",
        data: [7, 17, 12, 16, 14, 18, 16, 12, 15, 11, 13, 9],
        borderColor: ["rgba(54, 162, 235, 0.5)"],
        backgroundColor: ["rgba(54, 162, 235, 0.5)"],
        borderWidth: 1,
        fill: true,
      },
      {
        label: "Linkedin",
        data: [6, 14, 16, 20, 12, 18, 15, 12, 17, 19, 15, 11],
        borderColor: ["rgba(255, 206, 86, 0.5)"],
        backgroundColor: ["rgba(255, 206, 86, 0.5)"],
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  let multiAreaOptions = {
    plugins: {
      filler: {
        propagate: true,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  let scatterChartData = {
    datasets: [
      {
        label: "First Dataset",
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 3,
          },
          {
            x: -25,
            y: 5,
          },
          {
            x: 40,
            y: 5,
          },
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255,99,132,1)"],
        borderWidth: 1,
      },
      {
        label: "Second Dataset",
        data: [
          {
            x: 10,
            y: 5,
          },
          {
            x: 20,
            y: -30,
          },
          {
            x: -25,
            y: 15,
          },
          {
            x: -10,
            y: 5,
          },
        ],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  let scatterChartOptions = {
    scales: {
      xAxes: [
        {
          type: "linear",
          position: "bottom",
        },
      ],
    },
  };
  // Get context with jQuery - using jQuery's .get() method.
  // if ($("#barChart").length) {
  //   let barChartCanvas = $("#barChart").get(0).getContext("2d");
  //   // This will get the first returned node in the jQuery collection.
  //   let barChart = new Chart(barChartCanvas, {
  //     type: "bar",
  //     data: data,
  //     options: options,
  //   });
  // }

  // if ($("#lineChart").length) {
  //   let lineChartCanvas = $("#lineChart").get(0).getContext("2d");
  //   let lineChart = new Chart(lineChartCanvas, {
  //     type: "line",
  //     data: data,
  //     // options: options
  //     options: {
  //       scales: {
  //         x: {
  //           type: "time",
  //         },
  //       },
  //     },
  //   });
  // }

  // Define your chart outside the AJAX call so it can be updated
  let lineChart2; // Define your chart outside the AJAX call so it can be updated

  if ($("#demo").length) {
    let lineChartCanvas = $("#demo").get(0).getContext("2d");
    let lineChart2 = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: [
          {
            label: "Closing Price", // Change label to "Closing Price"
            data: [], // Initialize data as empty
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            fill: false,
          },
        ],
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

  // var stocks = ["google", "tesla", "microsoft", "aapl", "amzn"];
  // stocks.forEach(function (stock) {
  //   // Initialize the main chart
  //   if ($("#" + stock + "-main").length) {
  //     let lineChartCanvas = $("#" + stock + "-main")
  //       .get(0)
  //       .getContext("2d");
  //     let lineChart = new Chart(lineChartCanvas, {
  //       type: "line",
  //       data: {
  //         labels: [], // Initialize labels as empty
  //         datasets: [
  //           {
  //             label: "Closing Price", // Change label to "Closing Price"
  //             data: [], // Initialize data as empty
  //             backgroundColor: "rgba(75, 192, 192, 0.2)",
  //             borderColor: "rgba(75, 192, 192, 1)",
  //             borderWidth: 1,
  //             fill: false,
  //           },
  //         ],
  //       },
  //       options: {
  //         scales: {
  //           x: {
  //             type: "time",
  //             time: {
  //               unit: "second",
  //             },
  //           },
  //         },
  //       },
  //     });
  //   }

  //   // Initialize the EMI chart
  //   if ($("#emi-" + stock).length) {
  //     let lineChartCanvas = $("#emi-" + stock)
  //       .get(0)
  //       .getContext("2d");
  //     let lineChart = new Chart(lineChartCanvas, {
  //       type: "line",
  //       data: data,
  //       options: {
  //         scales: {
  //           x: {
  //             type: "time",
  //           },
  //         },
  //       },
  //     });
  //   }

  //   // Initialize the RSI chart
  //   if ($("#RSI-" + stock).length) {
  //     let lineChartCanvas = $("#RSI-" + stock)
  //       .get(0)
  //       .getContext("2d");
  //     let lineChart = new Chart(lineChartCanvas, {
  //       type: "line",
  //       data: data,
  //       options: {
  //         scales: {
  //           x: {
  //             type: "time",
  //           },
  //         },
  //       },
  //     });
  //   }

  //   // Initialize the Moving Average chart
  //   if ($("#moving-avg-" + stock).length) {
  //     let lineChartCanvas = $("#moving-avg-" + stock)
  //       .get(0)
  //       .getContext("2d");
  //     let lineChart = new Chart(lineChartCanvas, {
  //       type: "line",
  //       data: data,
  //       options: {
  //         scales: {
  //           x: {
  //             type: "time",
  //           },
  //         },
  //       },
  //     });
  //   }
  // });
  var options2 = {
    responsive: true,
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Month",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Value",
          },
        },
      ],
    },
  };

  // /////////////////////////////////////////////
  var stocks = ["google", "tesla", "microsoft", "aapl", "amzn"];
  var charts = {};

  // ///////////////////////////////////////////////

  // if ($("#google-main").length) {
  //   let lineChartCanvas = $("#google-main").get(0).getContext("2d");
  //   let lineChart2 = new Chart(lineChartCanvas, {
  //     type: "line",
  //     data: {
  //       labels: [], // Initialize labels as empty
  //       datasets: [
  //         {
  //           label: "Closing Price", // Change label to "Closing Price"
  //           data: [], // Initialize data as empty
  //           backgroundColor: "rgba(75, 192, 192, 0.2)",
  //           borderColor: "rgba(75, 192, 192, 1)",
  //           borderWidth: 1,
  //           fill: false,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         x: {
  //           type: "time",
  //           time: {
  //             unit: "second",
  //           },
  //         },
  //       },
  //     },
  //   });
  // }

  // // Fetch data from the server every 5 seconds
  // setInterval(function () {
  //   $.getJSON("http://localhost:5000/data", function (serverData) {
  //     // Check if the data is of the correct type
  // if (
  //   !("data_type" in serverData) &&
  //   "timestamp" in serverData &&
  //   "closing_price" in serverData
  // ) {
  //   console.log(serverData);
  //   // // Convert the timestamp to a JavaScript Date object
  //   // let date = new Date(serverData.timestamp * 1000);

  //   // // Update the chart's data and labels
  //   // lineChart2.data.labels.push(date);
  //   // lineChart2.data.datasets[0].data.push(serverData.closing_price);

  //   // Convert the timestamp to a JavaScript Date object
  //   let date = new Date(serverData.timestamp * 1000);

  //   // Format the date to only display the time
  //   let time = date.toTimeString().split(" ")[0];
  //   console.log(time);
  //   // Update the chart's data and labels
  //   lineChart2.data.labels.push(time);
  //   lineChart2.data.datasets[0].data.push(serverData.closing_price);

  //   // Update the chart
  //   lineChart2.update();
  //     }
  //   });
  // }, 2000);
  // -----------------------------------------------
  // // Fetch data from the server every 5 seconds
  // setInterval(function () {
  //   $.getJSON("http://localhost:5000/data", function (serverData) {
  //     // Check if the data is of the correct type
  //     if (
  //       !("data_type" in serverData) &&
  //       "timestamp" in serverData &&
  //       "closing_price" in serverData
  //     ) {
  //       // Convert the timestamp to a JavaScript Date object
  //       let date = new Date(serverData.timestamp * 1000);

  //       // Format the date to only display the time
  //       let time = date.toTimeString().split(" ")[0];

  //       // Update the chart's data and labels
  //       lineChart2.data.labels.push(time);
  //       lineChart2.data.datasets[0].data.push(serverData.closing_price);

  //       // Save the data to local storage
  //       localStorage.setItem(
  //         "chartLabels",
  //         JSON.stringify(lineChart2.data.labels)
  //       );
  //       localStorage.setItem(
  //         "chartData",
  //         JSON.stringify(lineChart2.data.datasets[0].data)
  //       );

  //       // Update the chart
  //       lineChart2.update();
  //     }
  //   });
  // }, 2000);

  // // Load data from local storage when the page is loaded
  // window.onload = function () {
  //   let savedLabels = JSON.parse(localStorage.getItem("chartLabels"));
  //   let savedData = JSON.parse(localStorage.getItem("chartData"));

  //   if (savedLabels && savedData) {
  //     lineChart2.data.labels = savedLabels;
  //     lineChart2.data.datasets[0].data = savedData;
  //     lineChart2.update();
  //   }
  // };
  // -----------------------------------------------
  if ($("#emi-lineChart").length) {
    let lineChartCanvas = $("#emi-lineChart").get(0).getContext("2d");
    let lineChart = new Chart(lineChartCanvas, {
      type: "line",
      data: data,
      // options: options
      options: {
        scales: {
          x: {
            type: "time",
          },
        },
      },
    });
  }

  if ($("#sentiment-lineChart").length) {
    let lineChartCanvas = $("#sentiment-lineChart").get(0).getContext("2d");
    let lineChart = new Chart(lineChartCanvas, {
      type: "line",
      data: data,
      // options: options
      options: {
        scales: {
          x: {
            type: "time",
          },
        },
      },
    });
  }

  if ($("#rsi-lineChart").length) {
    let lineChartCanvas = $("#rsi-lineChart").get(0).getContext("2d");
    let lineChart = new Chart(lineChartCanvas, {
      type: "line",
      data: data,
      // options: options
      options: {
        scales: {
          x: {
            type: "time",
          },
        },
      },
    });
  }

  if ($("#mv-lineChart").length) {
    let lineChartCanvas = $("#mv-lineChart").get(0).getContext("2d");
    let lineChart = new Chart(lineChartCanvas, {
      type: "line",
      data: data,
      // options: options
      options: {
        scales: {
          x: {
            type: "time",
          },
        },
      },
    });
  }
  if ($("#lineChart2").length) {
    let lineChartCanvas = $("#lineChart2").get(0).getContext("2d");
    let lineChart = new Chart(lineChartCanvas, {
      type: "line",
      data: data,
      // options: options
      options: {
        scales: {
          x: {
            type: "time",
          },
        },
      },
    });
  }

  // if ($("#linechart-multi").length) {
  //   let multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
  //   let lineChart = new Chart(multiLineCanvas, {
  //     type: "line",
  //     data: multiLineData,
  //     options: options,
  //   });
  // }
  // ---------------------------------------
  // Initialize an empty dataset for each stock symbol

  // let datasets = {
  //   AAPL: {
  //     label: "AAPL",
  //     data: [],
  //     borderColor: "#587ce4",
  //     borderWidth: 2,
  //     fill: false,
  //   },
  //   GOOGL: {
  //     label: "GOOGL",
  //     data: [],
  //     borderColor: "#ede190",
  //     borderWidth: 2,
  //     fill: false,
  //   },
  //   AMZN: {
  //     label: "AMZN",
  //     data: [],
  //     borderColor: "#f44252",
  //     borderWidth: 2,
  //     fill: false,
  //   },
  //   MSFT: {
  //     label: "MSFT",
  //     data: [],
  //     borderColor: "#454345",
  //     borderWidth: 2,
  //     fill: false,
  //   },
  //   TSLA: {
  //     label: "TSLA",
  //     data: [],
  //     borderColor: "#454345",
  //     borderWidth: 2,
  //     fill: false,
  //   },
  // };

  let datasets2 = {
    AAPL: {
      label: "AAPL",
      data: [],
      prices: [],
      borderColor: "#587ce4",
      borderWidth: 2,
      fill: false,
    },
    GOOGL: {
      label: "GOOGL",
      data: [],
      prices: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
    AMZN: {
      label: "AMZN",
      data: [],
      prices: [],
      borderColor: "#f44252",
      borderWidth: 2,
      fill: false,
    },
    MSFT: {
      label: "MSFT",
      data: [],
      prices: [],
      borderColor: "#454345",
      borderWidth: 2,
      fill: false,
    },
    TSLA: {
      label: "TSLA",
      data: [],
      prices: [],
      borderColor: "#454345",
      borderWidth: 2,
      fill: false,
    },
  };

  // Fetch data from the server every 5 seconds
  // setInterval(function () {
  //   $.getJSON("http://localhost:5000/data", function (serverData) {
  //     // Check if the data is of the correct type
  //     if (
  //       !("data_type" in serverData) &&
  //       "timestamp" in serverData &&
  //       "closing_price" in serverData &&
  //       "stock_symbol" in serverData
  //     ) {
  //       // Check if the stock_symbol exists in the datasets object
  //       if (serverData.stock_symbol in datasets) {
  //         // Convert the timestamp to a JavaScript Date object
  //         let date = new Date(serverData.timestamp * 1000);

  //         // Format the date to only display the time
  //         let time = date.toTimeString().split(" ")[0];

  //         // Update the chart's labels and data
  //         lineChart3.data.labels.push(time);
  //         // Update the chart's data and labels
  //         datasets[serverData.stock_symbol].data.push({
  //           x: time,
  //           y: serverData.closing_price,
  //         });
  //         datasets[serverData.stock_symbol].prices.push(
  //           serverData.closing_price
  //         );

  //         console.log(serverData);
  //         // Update the chart
  //         lineChart3.update();

  // -----------
  // Calculate the moving average for the last N data points
  function movingAverage(prices, N) {
    let sum = 0;
    for (let i = Math.max(prices.length - N, 0); i < prices.length; i++) {
      sum += prices[i];
    }
    return sum / Math.min(N, prices.length);
  }

  // Calculate the exponential moving average for the last N data points
  function exponentialMovingAverage(prices, N) {
    let alpha = 2 / (N + 1);
    let EMA = prices[0];
    for (let i = 1; i < prices.length; i++) {
      EMA = alpha * prices[i] + (1 - alpha) * EMA;
    }
    return EMA;
  }

  // Calculate the relative strength index for the last N data points
  function relativeStrengthIndex(prices, N) {
    let gains = 0;
    let losses = 0;
    for (let i = Math.max(prices.length - N, 1); i < prices.length; i++) {
      let change = prices[i] - prices[i - 1];
      if (change > 0) {
        gains += change;
      } else {
        losses -= change;
      }
    }
    let RS = gains / losses;
    return 100 - 100 / (1 + RS);
  }

  //         // Calculate the parameters for each stock symbol
  //         for (let symbol in datasets) {
  //           let prices = datasets[symbol].prices;
  //           let MA = movingAverage(prices, 14);
  //           let EMA = exponentialMovingAverage(prices, 14);
  //           let RSI = relativeStrengthIndex(prices, 2);

  //           // Generate signals based on the calculated parameters
  //           let signal;
  //           if (EMA > MA && RSI < 30) {
  //             signal = "Buy";
  //           } else if (EMA < MA && RSI > 70) {
  //             signal = "Sell";
  //           } else {
  //             signal = "Neutral";
  //           }

  //           console.log(symbol, MA, EMA, RSI, signal);
  //         }

  //         // -----------

  //         // Create a new table row
  //         let row = `<tr>
  //         <td>#ID</td>
  //         <td>${serverData.stock_symbol}</td>
  //         <td>${serverData.opening_price}</td>
  //         <td>${serverData.closing_price}</td>
  //         <td>${serverData.high}</td>
  //         <td>${serverData.low}</td>
  //         <td>${serverData.volume}</td>
  //     </tr>`;

  //         // Add the new row to the table
  //         $("#data-table tbody").append(row);
  //       }
  //     }
  //   });
  // }, 2000);

  // Initialize the chart with the datasets
  // if ($("#linechart-multi").length) {
  //   let multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
  //   lineChart3 = new Chart(multiLineCanvas, {
  //     type: "line",
  //     data: {
  //       labels: [], // Initialize labels as empty
  //       datasets: Object.values(datasets),
  //     },
  //     options: options,
  //   });
  // }

  // ---------------------------------------

  // var socket = io.connect("http://localhost:8000");
  // socket.on("newdata", function (data) {
  //   console.log(data);
  //   document.getElementById("data").innerHTML +=
  //     JSON.stringify(data.data) + "<br>";
  // });
  // -------------------------------------MAIN PAGE-------------------------------
  // Initialize an empty dataset for each stock symbol and each parameter

  let datasets = {
    AAPL: {
      label: "AAPL",
      data: [],
      prices: [],
      EMA: [],
      RSI: [],
      MA: [],
      borderColor: "#587ce4",
      borderWidth: 2,
      fill: false,
    },
    GOOGL: {
      label: "GOOGL",
      data: [],
      prices: [],
      EMA: [],
      RSI: [],
      MA: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
    AMZN: {
      label: "AMZN",
      data: [],
      prices: [],
      EMA: [],
      RSI: [],
      MA: [],
      borderColor: "#f44252",
      borderWidth: 2,
      fill: false,
    },
    MSFT: {
      label: "MSFT",
      data: [],
      prices: [],
      EMA: [],
      RSI: [],
      MA: [],
      borderColor: "#454345",
      borderWidth: 2,
      fill: false,
    },
    TSLA: {
      label: "TSLA",
      data: [],
      prices: [],
      EMA: [],
      RSI: [],
      MA: [],
      borderColor: "#454345",
      borderWidth: 2,
      fill: false,
    },
  };

  // --------------------------
  var EMIlineChart;
  let EMI_datasets = {
    AAPL: {
      label: "AAPL",
      data: [],
      borderColor: "#587ce4",
      borderWidth: 2,
      fill: false,
    },
    GOOGL: {
      label: "GOOGL",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
    AMZN: {
      label: "AMZN",
      data: [],
      borderColor: "#f44252",
      borderWidth: 2,
      fill: false,
    },
    MSFT: {
      label: "MSFT",
      data: [],
      borderColor: "#454345",
      borderWidth: 2,
      fill: false,
    },
    TSLA: {
      label: "TSLA",
      data: [],
      borderColor: "#454345",
      borderWidth: 2,
      fill: false,
    },
  };
  var googleMainChart, emiGoogleChart, rsiGoogleChart, movingAvgGoogleChart;

  var RSIlineChart, MAlineChart;
  let RSI_datasets = {
    AAPL: {
      label: "AAPL",
      data: [],
      borderColor: "#587ce4",
      borderWidth: 2,
      fill: false,
    },
    GOOGL: {
      label: "GOOGL",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
    AMZN: {
      label: "AMZN",
      data: [],
      borderColor: "#f44252",
      borderWidth: 2,
      fill: false,
    },
    MSFT: {
      label: "MSFT",
      data: [],
      borderColor: "#454345",
      borderWidth: 2,
      fill: false,
    },
    TSLA: {
      label: "TSLA",
      data: [],
      borderColor: "#454345",
      borderWidth: 2,
      fill: false,
    },
  };

  let MA_datasets = {
    AAPL: {
      label: "AAPL",
      data: [],
      borderColor: "#587ce4",
      borderWidth: 2,
      fill: false,
    },
    GOOGL: {
      label: "GOOGL",
      data: [],
      borderColor: "#ede190",
      borderWidth: 2,
      fill: false,
    },
    AMZN: {
      label: "AMZN",
      data: [],
      borderColor: "#f44252",
      borderWidth: 2,
      fill: false,
    },
    MSFT: {
      label: "MSFT",
      data: [],
      borderColor: "#454345",
      borderWidth: 2,
      fill: false,
    },
    TSLA: {
      label: "TSLA",
      data: [],
      borderColor: "#454345",
      borderWidth: 2,
      fill: false,
    },
  };

  // Fetch data from the server every 5 seconds
  // setInterval(function () {
  //   $.getJSON("http://localhost:5000/data", function (serverData) {
  //     // Check if the data is of the correct type
  //     if (
  //       !("data_type" in serverData) &&
  //       "timestamp" in serverData &&
  //       "closing_price" in serverData &&
  //       "stock_symbol" in serverData
  //     ) {
  //       // Convert the timestamp to a JavaScript Date object
  //       let date = new Date(serverData.timestamp * 1000);

  //       // Format the date to only display the time
  //       let time = date.toTimeString().split(" ")[0];

  //       // Update the chart's data and labels
  //       datasets[serverData.stock_symbol].data.push({
  //         x: time,
  //         y: serverData.closing_price,
  //       });
  //       datasets[serverData.stock_symbol].prices.push(serverData.closing_price);

  //       // Calculate the EMA, RSI, and MA
  //       let EMA = exponentialMovingAverage(
  //         datasets[serverData.stock_symbol].prices,
  //         3
  //       );
  //       let RSI = relativeStrengthIndex(
  //         datasets[serverData.stock_symbol].prices,
  //         3
  //       );
  //       let MA = movingAverage(datasets[serverData.stock_symbol].prices, 2);

  //       // Update the EMA, RSI, and MA datasets
  //       datasets[serverData.stock_symbol].EMA.push({ x: time, y: EMA });
  //       datasets[serverData.stock_symbol].RSI.push({ x: time, y: RSI });
  //       datasets[serverData.stock_symbol].MA.push({ x: time, y: MA });
  //       console.log(EMA, RSI, MA);
  //       // Update the charts
  //       lineChart.update();
  //       EMIChart.update();
  //       RSIChart.update();
  //       MAChart.update();
  //     }
  //   });
  // }, 2000);

  var lineChart, EMIChart, RSIChart, MAChart; // Define your charts outside the AJAX call so they can be updated

  // Initialize the charts with the datasets
  if ($("#linechart-multi").length) {
    var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
    lineChart = new Chart(multiLineCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(datasets).map((dataset) => ({
          label: dataset.label,
          data: dataset.data,
          borderColor: dataset.borderColor,
          borderWidth: dataset.borderWidth,
          fill: dataset.fill,
        })),
      },
      options: options,
    });
  }

  // if ($("#EMI-main").length) {
  //   var multiLineCanvas = $("#EMI-main").get(0).getContext("2d");
  //   EMIChart = new Chart(multiLineCanvas, {
  //     type: "line",
  //     data: {
  //       labels: [], // Initialize labels as empty
  //       datasets: Object.values(datasets).map((dataset) => ({
  //         label: dataset.label,
  //         data: dataset.EMA,
  //         borderColor: dataset.borderColor,
  //         borderWidth: dataset.borderWidth,
  //         fill: dataset.fill,
  //       })),
  //     },
  //     options: options,
  //   });
  // }

  if ($("#RSI-main").length) {
    var multiLineCanvas = $("#RSI-main").get(0).getContext("2d");
    RSIChart = new Chart(multiLineCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(datasets).map((dataset) => ({
          label: dataset.label,
          data: dataset.RSI,
          borderColor: dataset.borderColor,
          borderWidth: dataset.borderWidth,
          fill: dataset.fill,
        })),
      },
      options: options,
    });
  }

  if ($("#moving-avg-main").length) {
    var multiLineCanvas = $("#moving-avg-main").get(0).getContext("2d");
    MAChart = new Chart(multiLineCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(datasets).map((dataset) => ({
          label: dataset.label,
          data: dataset.MA,
          borderColor: dataset.borderColor,
          borderWidth: dataset.borderWidth,
          fill: dataset.fill,
        })),
      },
      options: options,
    });
  }

  // // Fetch data from the server every 5 seconds
  // setInterval(function () {
  //   $.getJSON("http://localhost:5000/data", function (serverData) {
  // Check if the data is of the correct type

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

  var rsiGoogleChart;

  // socket.on("newdata", function (data) {
  //   let serverData = data.data;
  //   console.log(serverData);
  //   if (
  //     !("data_type" in serverData) &&
  //     "timestamp" in serverData &&
  //     "rsi" in serverData &&
  //     "stock_symbol" in serverData
  //   ) {
  //     // Update RSI chart for Google
  //     if (serverData.stock_symbol === "GOOGL") {
  //       let date = new Date(serverData.timestamp * 1000);
  //       let time = date.toTimeString().split(" ")[0];
  //       lineChart3.data.labels.push(time);
  //       rsiGoogleChart.data.labels.push(time);
  //       datasets["GOOGL"].data.push({
  //         x: time,
  //         y: serverData.closing_price,
  //       });

  //       RSI_GOOGLE.GOOGL.data.push({
  //         x: time,
  //         y: serverData.rsi,
  //       });
  //       rsiGoogleChart.update();
  //     }
  //   }
  // });

  // Initialize the RSI chart for Google
  // Initialize the RSI chart for Google
  // if ($("#RSI-google").length) {
  //   let lineChartCanvas = $("#RSI-google").get(0).getContext("2d");
  //   rsiGoogleChart = new Chart(lineChartCanvas, {
  //     type: "line",
  //     data: {
  //       labels: [], // Initialize labels as empty
  //       datasets: Object.values(RSI_GOOGLE),
  //     },
  //     options: {
  //       scales: {
  //         x: {
  //           type: "time",
  //         },
  //       },
  //     },
  //   });
  // }
  var pieChart;
  var barChart;
  socket.on("newdata", function (data) {
    let serverData = data.data;
    console.log(serverData);
    if (
      !("data_type" in serverData) &&
      "timestamp" in serverData &&
      "closing_price" in serverData &&
      "stock_symbol" in serverData
    ) {
      // Check if the stock_symbol exists in the datasets object
      if (serverData.stock_symbol in datasets) {
        // Convert the timestamp to a JavaScript Date object
        let date = new Date(serverData.timestamp * 1000);

        // Format the date to only display the time
        let time = date.toTimeString().split(" ")[0];
        let signalType = serverData.signal.toLowerCase(); // Assuming signal is in lower case
        let datasetIndex = ["natural", "sell", "buy"].indexOf(signalType);
        if (datasetIndex !== -1) {
          pieChart.data.datasets[0].data[datasetIndex]++;
          pieChart.update();
        }
        // Update the chart's labels and data
        let labelIndex = -1;
        switch (serverData.signal.toLowerCase()) {
          case "buy":
            labelIndex = [
              "GOOGL BUY",
              "TSLA BUY",
              "MSLF BUY",
              "AAPL BUY",
              "AMZN BUY",
            ].indexOf(`${serverData.stock_symbol} BUY`);
            break;
          case "sell":
            labelIndex = [
              "GOOGL SELL",
              "TSLA SELL",
              "MSLF SELL",
              "AAPL SELL",
              "AMZN SELL",
            ].indexOf(`${serverData.stock_symbol} SELL`);
            break;
          case "natural":
            labelIndex = [
              "GOOGL Natural",
              "TSLA Natural",
              "MSLF Natural",
              "AAPL Natural",
              "AMZN Natural",
            ].indexOf(`${serverData.stock_symbol} Natural`);

            break;
          default:
            break;
        }

        if (labelIndex !== -1) {
          barChart.data.datasets[0].data[labelIndex]++;
          barChart.update();
        }

        // Update the chart's labels and data
        lineChart3.data.labels.push(time);
        datasets[serverData.stock_symbol].data.push({
          x: time,
          y: serverData.closing_price,
        });

        // Update the EMI chart's labels and data
        EMIlineChart.data.labels.push(time);
        EMI_datasets[serverData.stock_symbol].data.push({
          x: time,
          y: serverData.exponential_moving_average,
        });

        // Update the RSI chart's labels and data
        RSIlineChart.data.labels.push(time);
        RSI_datasets[serverData.stock_symbol].data.push({
          x: time,
          y: serverData.rsi,
        });

        // Update the Moving Average chart's labels and data
        MAlineChart.data.labels.push(time);
        MA_datasets[serverData.stock_symbol].data.push({
          x: time,
          y: serverData.moving_average,
        });

        console.log(serverData);
        // Update the chart
        lineChart3.update();
        EMIlineChart.update();
        RSIlineChart.update();
        MAlineChart.update();

        // ///////////////////////////////////
        // Create a new table row
        let row = `<tr>
          
          <td>${serverData.stock_symbol}</td>
          <td>${serverData.opening_price}</td>
          <td>${serverData.closing_price}</td>
          <td>${serverData.high}</td>
          <td>${serverData.low}</td>
          <td>${serverData.volume}</td>
      </tr>`;

        // Add the new row to the table
        $("#data-table tbody").append(row);

        let row2 = `
        <tr>

          <td>${serverData.stock_symbol}</td>
          <td>${serverData.closing_price}</td>
          <td>${serverData.volume}</td>
          <td>${serverData.exponential_moving_average}</td>
          <td>${serverData.moving_average}</td>
          <td>${serverData.rsi}</td>
          </tr>
        `;
        $("#data-table2 tbody").append(row2);
        let date2 = new Date(serverData.timestamp * 1000);

        // Format the date to only display the time
        let time2 = date2.toTimeString().split(" ")[0];
        let Latest_trading_signal = `
        
          <tr>
          
          <td>${time2}</td>
          <td>${serverData.stock_symbol}</td>
          <td>${serverData.signal}</td>
          </tr>
        `;
        $("#latest-signal tbody").append(Latest_trading_signal);
      }
    }
  });
  // }, 2000);

  // Initialize the chart with the datasets
  if ($("#linechart-multi-main").length) {
    let multiLineCanvas = $("#linechart-multi-main").get(0).getContext("2d");
    lineChart3 = new Chart(multiLineCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(datasets),
      },
      options: options,
    });
  }

  if ($("#EMI-main").length) {
    let EMI_Canvas = $("#EMI-main").get(0).getContext("2d");
    EMIlineChart = new Chart(EMI_Canvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(EMI_datasets),
      },
      options: options,
    });
  }

  if ($("#RSI-main").length) {
    let RSI_Canvas = $("#RSI-main").get(0).getContext("2d");
    RSIlineChart = new Chart(RSI_Canvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(RSI_datasets),
      },
      options: options,
    });
  }

  if ($("#moving-avg-main").length) {
    let MA_Canvas = $("#moving-avg-main").get(0).getContext("2d");
    MAlineChart = new Chart(MA_Canvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: Object.values(MA_datasets),
      },
      options: options,
    });
  }

  if ($("#pieChart-main").length) {
    let pieChartCanvas = $("#pieChart-main").get(0).getContext("2d");
    pieChart = new Chart(pieChartCanvas, {
      type: "pie",
      data: {
        labels: ["Natural", "Sell", "Buy"],
        datasets: [
          {
            data: [0, 0, 0],
            backgroundColor: ["#36a2eb", "#ff6384", "#ffcd56"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      },
    });
  }

  // Initialize the bar chart
  if ($("#barChart").length) {
    let barChartCanvas = $("#barChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    barChart = new Chart(barChartCanvas, {
      type: "bar",
      data: {
        labels: [
          "GOOGLE BUY",
          "GOOGLE SELL",
          "GOOGLE Natural",
          "TSLA BUY",
          "TSLA SELL",
          "TSLA Natural",
          "MSLF BUY",
          "MSLF SELL",
          "MSLF Natural",
          "AAPL BUY",
          "AAPL SELL",
          "AAPL Natural",
          "AMZN BUY",
          "AMZN SELL",
          "AMZN Natural",
        ],
        datasets: [
          {
            label: "Frequency",
            data: Array(15).fill(0), // Initialize with zeros for each label
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: options,
    });
  }
  // // =========================
  // if ($("#pieChart-main").length) {
  //   let pieChartCanvas = $("#pieChart-main").get(0).getContext("2d");
  //   pieChart = new Chart(pieChartCanvas, {
  //     type: "pie",
  //     data: doughnutPieData,
  //     options: doughnutPieOptions,
  //   });
  // }
  // // =========================

  // ---------------------------------------------------------------------------------------

  // -------------------------------------GOOGLE PAGE-------------------------------

  // var stocks = ["google", "tesla", "microsoft", "aapl", "amzn"];
  // stocks.forEach(function (stock) {
  //   // Initialize the main chart
  //   if ($("#" + stock + "-main").length) {
  //     let lineChartCanvas = $("#" + stock + "-main")
  //       .get(0)
  //       .getContext("2d");
  //     let lineChart = new Chart(lineChartCanvas, {
  //       type: "line",
  //       data: {
  //         labels: [], // Initialize labels as empty
  //         datasets: [
  //           {
  //             label: "Closing Price", // Change label to "Closing Price"
  //             data: [], // Initialize data as empty
  //             backgroundColor: "rgba(75, 192, 192, 0.2)",
  //             borderColor: "rgba(75, 192, 192, 1)",
  //             borderWidth: 1,
  //             fill: false,
  //           },
  //         ],
  //       },
  //       options: {
  //         scales: {
  //           x: {
  //             type: "time",
  //             time: {
  //               unit: "second",
  //             },
  //           },
  //         },
  //       },
  //     });
  //   }

  //   // Initialize the EMI chart
  //   if ($("#emi-" + stock).length) {
  //     let lineChartCanvas = $("#emi-" + stock)
  //       .get(0)
  //       .getContext("2d");
  //     let lineChart = new Chart(lineChartCanvas, {
  //       type: "line",
  //       data: data,
  //       options: {
  //         scales: {
  //           x: {
  //             type: "time",
  //           },
  //         },
  //       },
  //     });
  //   }

  //   // Initialize the RSI chart
  //   if ($("#RSI-" + stock).length) {
  //     let lineChartCanvas = $("#RSI-" + stock)
  //       .get(0)
  //       .getContext("2d");
  //     let lineChart = new Chart(lineChartCanvas, {
  //       type: "line",
  //       data: data,
  //       options: {
  //         scales: {
  //           x: {
  //             type: "time",
  //           },
  //         },
  //       },
  //     });
  //   }

  //   // Initialize the Moving Average chart
  //   if ($("#moving-avg-" + stock).length) {
  //     let lineChartCanvas = $("#moving-avg-" + stock)
  //       .get(0)
  //       .getContext("2d");
  //     let lineChart = new Chart(lineChartCanvas, {
  //       type: "line",
  //       data: data,
  //       options: {
  //         scales: {
  //           x: {
  //             type: "time",
  //           },
  //         },
  //       },
  //     });
  //   }
  // });

  // if ($("#google-main").length) {
  //   let lineChartCanvas = $("#google-main").get(0).getContext("2d");
  //   lineChart2 = new Chart(lineChartCanvas, {
  //     type: "line",
  //     data: {
  //       labels: [], // Initialize labels as empty
  //       datasets: [
  //         {
  //           label: "Closing Price", // Change label to "Closing Price"
  //           data: [], // Initialize data as empty
  //           backgroundColor: "rgba(75, 192, 192, 0.2)",
  //           borderColor: "rgba(75, 192, 192, 1)",
  //           borderWidth: 1,
  //           fill: false,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         x: {
  //           type: "time",
  //           time: {
  //             unit: "second",
  //           },
  //         },
  //       },
  //     },
  //   });
  // }

  // // indicator in main page
  // if ($("#emi-google").length) {
  //   let lineChartCanvas = $("#emi-google").get(0).getContext("2d");
  //   let lineChart = new Chart(lineChartCanvas, {
  //     type: "line",
  //     data: data,
  //     // options: options
  //     options: {
  //       scales: {
  //         x: {
  //           type: "time",
  //         },
  //       },
  //     },
  //   });
  // }
  // if ($("#RSI-google").length) {
  //   let lineChartCanvas = $("#RSI-google").get(0).getContext("2d");
  //   let lineChart = new Chart(lineChartCanvas, {
  //     type: "line",
  //     data: data,
  //     // options: options
  //     options: {
  //       scales: {
  //         x: {
  //           type: "time",
  //         },
  //       },
  //     },
  //   });
  // }
  // if ($("#moving-avg-google").length) {
  //   let lineChartCanvas = $("#moving-avg-google").get(0).getContext("2d");
  //   let lineChart = new Chart(lineChartCanvas, {
  //     type: "line",
  //     data: data,
  //     // options: options
  //     options: {
  //       scales: {
  //         x: {
  //           type: "time",
  //         },
  //       },
  //     },
  //   });
  // }

  if ($("#sentiment-google").length) {
    let lineChartCanvas = $("#sentiment-google").get(0).getContext("2d");
    let lineChart = new Chart(lineChartCanvas, {
      type: "line",
      data: data,
      // options: options
      options: {
        scales: {
          x: {
            type: "time",
          },
        },
      },
    });
  }

  // ---------------------------------------------------------------------------------------

  // -------------------------------------TESLA PAGE-------------------------------

  if ($("#tesla-main").length) {
    let lineChartCanvas = $("#tesla-main").get(0).getContext("2d");
    lineChart2 = new Chart(lineChartCanvas, {
      type: "line",
      data: {
        labels: [], // Initialize labels as empty
        datasets: [
          {
            label: "Closing Price", // Change label to "Closing Price"
            data: [], // Initialize data as empty
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            fill: false,
          },
        ],
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

  // indicator in main page
  if ($("#emi-tesla").length) {
    let lineChartCanvas = $("#emi-tesla").get(0).getContext("2d");
    let lineChart = new Chart(lineChartCanvas, {
      type: "line",
      data: data,
      // options: options
      options: {
        scales: {
          x: {
            type: "time",
          },
        },
      },
    });
  }
  if ($("#RSI-tesla").length) {
    let lineChartCanvas = $("#RSI-tesla").get(0).getContext("2d");
    let lineChart = new Chart(lineChartCanvas, {
      type: "line",
      data: data,
      // options: options
      options: {
        scales: {
          x: {
            type: "time",
          },
        },
      },
    });
  }
  if ($("#moving-avg-tesla").length) {
    let lineChartCanvas = $("#moving-avg-tesla").get(0).getContext("2d");
    let lineChart = new Chart(lineChartCanvas, {
      type: "line",
      data: data,
      // options: options
      options: {
        scales: {
          x: {
            type: "time",
          },
        },
      },
    });
  }

  if ($("#sentiment-tesla").length) {
    let lineChartCanvas = $("#sentiment-tesla").get(0).getContext("2d");
    let lineChart = new Chart(lineChartCanvas, {
      type: "line",
      data: data,
      // options: options
      options: {
        scales: {
          x: {
            type: "time",
          },
        },
      },
    });
  }

  // ---------------------------------------------------------------------------------------

  if ($("#areachart-multi").length) {
    let multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
    let multiAreaChart = new Chart(multiAreaCanvas, {
      type: "line",
      data: multiAreaData,
      options: multiAreaOptions,
    });
  }

  if ($("#doughnutChart").length) {
    let doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
    let doughnutChart = new Chart(doughnutChartCanvas, {
      type: "doughnut",
      data: doughnutPieData,
      options: doughnutPieOptions,
    });
  }

  if ($("#pieChart").length) {
    let pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    let pieChart = new Chart(pieChartCanvas, {
      type: "pie",
      data: doughnutPieData,
      options: doughnutPieOptions,
    });
  }

  if ($("#areaChart").length) {
    let areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    let areaChart = new Chart(areaChartCanvas, {
      type: "line",
      data: areaData,
      options: areaOptions,
    });
  }

  if ($("#scatterChart").length) {
    let scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
    let scatterChart = new Chart(scatterChartCanvas, {
      type: "scatter",
      data: scatterChartData,
      options: scatterChartOptions,
    });
  }

  if ($("#browserTrafficChart").length) {
    let doughnutChartCanvas = $("#browserTrafficChart").get(0).getContext("2d");
    let doughnutChart = new Chart(doughnutChartCanvas, {
      type: "doughnut",
      data: browserTrafficData,
      options: doughnutPieOptions,
    });
  }
});
