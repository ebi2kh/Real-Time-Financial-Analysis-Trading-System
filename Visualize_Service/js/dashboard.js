(function($) {
  'use strict';
  $(function() {
    // Remove pro banner on close
    document.querySelector('#bannerClose').addEventListener('click',function() {
      document.querySelector('#proBanner').classList.add('d-none');
    });
    if ($("#transactions-chart").length) {
      var transactionsChartCanvas = $("#transactions-chart").get(0).getContext("2d");

      var gradientFill = transactionsChartCanvas.createLinearGradient(0, 0, 0, 110);
      gradientFill.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradientFill.addColorStop(1, "rgba(243, 153, 21, .6)");

      var areaData = {
        labels: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL"],
        datasets: [{
            data: [42, 90, 70, 88, 15, 92, 40, 75, 60, 90, 75, 100],
            backgroundColor: gradientFill,
            borderColor: [
              '#f39915'
            ],
            borderWidth: 2,
            fill: 'origin',
            label: "online"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 15,
              min: 0,
              max: 100
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: 0
          },
          point: {
            radius: 0
          }
        }
      }

      var transactionsChart = new Chart(transactionsChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }

    if ($("#transactions-chart-dark").length) {
      var transactionsChartCanvas = $("#transactions-chart-dark").get(0).getContext("2d");

      var gradientFill = transactionsChartCanvas.createLinearGradient(0, 0, 0, 110);
      gradientFill.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradientFill.addColorStop(1, "rgba(243, 153, 21, .6)");

      var areaData = {
        labels: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL"],
        datasets: [{
            data: [42, 90, 70, 88, 15, 92, 40, 75, 60, 90, 75, 100],
            backgroundColor: gradientFill,
            borderColor: [
              '#f39915'
            ],
            borderWidth: 2,
            fill: 'origin',
            label: "online"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 15,
              min: 0,
              max: 100
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: 0
          },
          point: {
            radius: 0
          }
        }
      }

      var transactionsChart = new Chart(transactionsChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }

    // sales-chart-a start
    if ($("#sales-chart-a").length) {
      var areaData = {
        labels: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AI", "AJ", "AK"],
        datasets: [
          {
            data: [30, 38, 20, 30, 25, 35, 19, 23,19, 27],
            backgroundColor: [
              '#003c7c'
            ],
            borderColor: [
              '#003c7c'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "Sales"
          },
          {
            data: [62, 58, 40, 52, 58, 55, 52, 62, 55, 60],
            backgroundColor: [
              '#2981d7'
            ],
            borderColor: [
              '#2981d7'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "Orders"
          },
          {
            data: [73, 70, 82, 70, 90, 97, 71, 98, 88, 98],
            backgroundColor: [
              '#cfdced'
            ],
            borderColor: [
              '#cfdced'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "Revenue"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: true
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 100
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .35
          },
          point: {
            radius: 0
          }
        }
      }
      var salesChartACanvas = $("#sales-chart-a").get(0).getContext("2d");
      var salesChartA = new Chart(salesChartACanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
    // sales-chart-a end

        // sales-chart-a-dark start
    if ($("#sales-chart-a-dark").length) {
      var areaData = {
        labels: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AI", "AJ", "AK"],
        datasets: [
          {
            data: [30, 38, 20, 30, 25, 35, 19, 23,19, 27],
            backgroundColor: [
              '#003c7c'
            ],
            borderColor: [
              '#003c7c'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "Sales"
          },
          {
            data: [62, 58, 40, 52, 58, 55, 52, 62, 55, 60],
            backgroundColor: [
              '#2981d7'
            ],
            borderColor: [
              '#2981d7'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "Orders"
          },
          {
            data: [73, 70, 82, 70, 90, 97, 71, 98, 88, 98],
            backgroundColor: [
              'rgba(207, 220, 237, .8)'
            ],
            borderColor: [
              'rgba(207, 220, 237, .8)'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "Revenue"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: true
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 100
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .35
          },
          point: {
            radius: 0
          }
        }
      }
      var salesChartACanvas = $("#sales-chart-a-dark").get(0).getContext("2d");
      var salesChartA = new Chart(salesChartACanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
    // sales-chart-a-dark end

    // sales-chart-b starts
    if ($("#sales-chart-b").length) {
      var salesChartBChartCanvas = $("#sales-chart-b").get(0).getContext("2d");
      var salesChartBChart = new Chart(salesChartBChartCanvas, {
        type: 'bar',
        data: {
          labels: ['AA', 'AB', 'AC', 'AD', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC', 'BD'],
          datasets: [{
              label: 'Profit',
              data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,],
              backgroundColor: ['#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#b4d5f6', '#b4d5f6', '#b4d5f6', '#b4d5f6', '#b4d5f6' ]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 20,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: false,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.7
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // sales-chart-b end

    // sales-chart-b-dark starts
    if ($("#sales-chart-b-dark").length) {
      var salesChartBChartCanvas = $("#sales-chart-b-dark").get(0).getContext("2d");
      var salesChartBChart = new Chart(salesChartBChartCanvas, {
        type: 'bar',
        data: {
          labels: ['AA', 'AB', 'AC', 'AD', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC', 'BD'],
          datasets: [{
              label: 'Profit',
              data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,],
              backgroundColor: ['#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', 'rgba(180, 213, 246, .8)', 'rgba(180, 213, 246, .8)', 'rgba(180, 213, 246, .8)', 'rgba(180, 213, 246, .8)', 'rgba(180, 213, 246, .8)' ]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 20,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: false,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.7
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // sales-chart-b-dark end

    // desktop-chart start
    if ($("#desktop-chart").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [{
            data: [24, 26, 50],
            backgroundColor: [
              "#e6b8ff", "#d077ff","#a43cda"
            ],
            borderColor: "rgba(0,0,0,0)"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 72,
        elements: {
          arc: {
              borderWidth: 4
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        legendCallback: function(chart) { 
          var text = [];
          text.push('<div class="d-flex align-items-center mb-3">');
            text.push('<div class="mr-2" style="width: 10px; height: 10px; border-radius: 50%;  background: ' + chart.data.datasets[0]. backgroundColor[0] + ' "></div>');
            text.push('<p class="mb-0">Desktop&nbsp;(24%)</p>')
          text.push('</div>');
          text.push('<div class="d-flex align-items-center mb-3">');
            text.push('<div class="mr-2" style="width: 10px; height: 10px; border-radius: 50%; background: ' + chart.data.datasets[0]. backgroundColor[1] + ' "></div>');
            text.push('<p class="mb-0">Mobile&nbsp;(26%)</p>')
          text.push('</div>');
          text.push('<div class="d-flex align-items-center">');
            text.push('<div class="mr-2" style="width: 10px; height: 10px; border-radius: 50%; background: ' + chart.data.datasets[0]. backgroundColor[2] + ' "></div>');
            text.push('<p class="mb-0">Tablet&nbsp;(50%)</p>')
          text.push('</div>');
          return text.join("");
        },
      }
      var desktopChartPlugins = {
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
      
          ctx.restore();
          var fontSize = .96;
          ctx.font = "600 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#fff";
      
          var text = "70%",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
      
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      var desktopChartCanvas = $("#desktop-chart").get(0).getContext("2d");
      var desktopChart = new Chart(desktopChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: desktopChartPlugins
      });
      document.getElementById('desktop-chart-legend').innerHTML = desktopChart.generateLegend();
    }
    // desktop-chart end

    // income-chart start
    if ($('#income-chart').length) {
      var incomeChartCanvas = $("#income-chart").get(0).getContext("2d");


      var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: 'Register User',
            data: [80, 180, 80, 200, 140, 180, 70],
            borderColor: [
              '#a43cda'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(164, 60, 218, .1)"
          },
          {
            label: 'Premium User',
            data: [200, 340, 200, 340, 220, 310, 190],
            borderColor: [
              '#00c8bf'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: 'rgba(0, 200, 191, .1)'

          }

        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: true,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#f1f3f9",
              zeroLineColor: "#f1f3f9",
            },
            ticks: {
              min: 0,
              max: 400,
              stepSize: 100,
              fontColor: "#001737",
              fontSize: 11,
              fontStyle: 400,
              padding: 10
            }
          }],
          xAxes: [{
            display: true,
            gridLines: {
              display: false,
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks : {
              fontColor: "#001737",
              fontSize: 11,
              fontStyle: 400,
              padding: 10,
            }
          }]
        },
        legend: {
          display: false
        },
        legendCallback : function(chart) {
          var text = [];
          text.push('<div class="d-flex align-items-center mr-3">');
            text.push('<div class="mr-2" style="width: 12px; border-radius: 50%; height: 12px; background-color: ' + chart.data.datasets[0].borderColor[0] +' "></div>');
            text.push('<p class="mb-0">Register User</p>');
          text.push('</div>');
          text.push('<div class="d-flex align-items-center">');
            text.push('<div class="mr-2" style="width: 12px; border-radius: 50%; height: 12px; background-color: ' + chart.data.datasets[1].borderColor[0] +' "></div>');
            text.push('<p class="mb-0">Premium User</p>');
          text.push('</div>');
          return text.join('');
        },
        elements: {
          point: {
            radius: 0,
          },
          line :{
            tension: .35
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 30,
            bottom : -7,
            left : 0,
            right: 0
          }
        }
      };
      var incomeChart = new Chart(incomeChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
      document.getElementById('income-chart-legend').innerHTML = incomeChart.generateLegend();
    }
    // income-chart end

    // income-chart-dark start
    if ($('#income-chart-dark').length) {
      var incomeChartCanvas = $("#income-chart-dark").get(0).getContext("2d");


      var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: 'Register User',
            data: [80, 180, 80, 200, 140, 180, 70],
            borderColor: [
              '#a43cda'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(164, 60, 218, .1)"
          },
          {
            label: 'Premium User',
            data: [200, 340, 200, 340, 220, 310, 190],
            borderColor: [
              '#00c8bf'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: 'rgba(0, 200, 191, .1)'

          }

        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: true,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#383d5b",
              zeroLineColor: "#383d5b",
            },
            ticks: {
              min: 0,
              max: 400,
              stepSize: 100,
              fontColor: "#b1b1b5",
              fontSize: 11,
              fontStyle: 400,
              padding: 10
            }
          }],
          xAxes: [{
            display: true,
            gridLines: {
              display: false,
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks : {
              fontColor: "#b1b1b5",
              fontSize: 11,
              fontStyle: 400,
              padding: 10,
            }
          }]
        },
        legend: {
          display: false
        },
        legendCallback : function(chart) {
          var text = [];
          text.push('<div class="d-flex align-items-center mr-3">');
            text.push('<div class="mr-2" style="width: 12px; border-radius: 50%; height: 12px; background-color: ' + chart.data.datasets[0].borderColor[0] +' "></div>');
            text.push('<p class="mb-0">Register User</p>');
          text.push('</div>');
          text.push('<div class="d-flex align-items-center">');
            text.push('<div class="mr-2" style="width: 12px; border-radius: 50%; height: 12px; background-color: ' + chart.data.datasets[1].borderColor[0] +' "></div>');
            text.push('<p class="mb-0">Premium User</p>');
          text.push('</div>');
          return text.join('');
        },
        elements: {
          point: {
            radius: 0,
          },
          line :{
            tension: .35
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 30,
            bottom : -7,
            left : 0,
            right: 0
          }
        }
      };
      var incomeChart = new Chart(incomeChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
      document.getElementById('income-chart-dark-legend').innerHTML = incomeChart.generateLegend();
    }
    // income-chart-dark end

    // sales-chart-c start
    if ($("#sales-chart-c").length) {
      var salesChartCCanvas = $("#sales-chart-c").get(0).getContext("2d");
      var salesChartC = new Chart(salesChartCCanvas, {
        type: 'pie',
        data: {
          datasets: [{
            data: [20, 20, 60],
            backgroundColor: [
              '#f39915',
              '#21bf06',
              '#a43cda'
            ],
            borderColor: [
              '#f39915',
              '#21bf06',
              '#a43cda'
            ],
          }],
      
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
            'Gross Sales',
            'Purchases',
            'Tax Return'
          ]
        },
        options: {
          responsive: true,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          legend: {
            display: false
          },
          legendCallback: function(chart) { 
            var text = [];
            text.push('<ul class="legend'+ chart.id +'">');
            for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
              text.push('<li><span class="legend-dots" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
              if (chart.data.labels[i]) {
                text.push(chart.data.labels[i]);
              }
              text.push('</li>');
            }
            text.push('</ul>');
            return text.join("");
          }
        }
      });
    }
    // sales-chart-c end

    // sales-chart-d start
    if ($("#sales-chart-d").length) {
      var SalesChartDCanvas = $("#sales-chart-d").get(0).getContext("2d");
      var SalesChartD = new Chart(SalesChartDCanvas, {
        type: 'bar',
        data: {
          labels: ["2014", "2015", "2016", "2017", "2018", "2019"],
          datasets: [{
              label: 'Offline Sales',
              data: [52, 40, 33, 45, 22, 50],
              backgroundColor: '#a43cda'
            },
            {
              label: 'Online Sales',
              data: [22, 45, 23, 50, 15, 40],
              backgroundColor: '#f39915'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: true,
                min: 0,
                max: 60,
                stepSize: 10,
                fontSize: 10,
                fontColor: "#001737",
              }
            }],
            xAxes: [{
              stacked: false,
              ticks: {
                beginAtZero: true,
                fontColor: "#001737",
                fontSize: 10
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: .3
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        },
      });
    }
    // sales-chart-d end

    // sales-chart-d-dark start
    if ($("#sales-chart-d-dark").length) {
      var SalesChartDCanvas = $("#sales-chart-d-dark").get(0).getContext("2d");
      var SalesChartD = new Chart(SalesChartDCanvas, {
        type: 'bar',
        data: {
          labels: ["2014", "2015", "2016", "2017", "2018", "2019"],
          datasets: [{
              label: 'Offline Sales',
              data: [52, 40, 33, 45, 22, 50],
              backgroundColor: '#a43cda'
            },
            {
              label: 'Online Sales',
              data: [22, 45, 23, 50, 15, 40],
              backgroundColor: '#f39915'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: true,
                min: 0,
                max: 60,
                stepSize: 10,
                fontSize: 10,
                fontColor: "#b1b1b5",
              }
            }],
            xAxes: [{
              stacked: false,
              ticks: {
                beginAtZero: true,
                fontColor: "#b1b1b5",
                fontSize: 10
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: .3
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        },
      });
    }
    // sales-chart-d-dark end

    // expense-chart start
    if ($("#expense-chart").length) {
      var expenseChartCanvas = $("#expense-chart").get(0).getContext("2d");
      var expenseChart = new Chart(expenseChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
          datasets: [
            {
              label: 'Profit',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#a43cda',
            },
            {
              label: 'Growth',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#e1e1e2',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // expense-chart end

    // expense-chart-dark start
    if ($("#expense-chart-dark").length) {
      var expenseChartCanvas = $("#expense-chart-dark").get(0).getContext("2d");
      var expenseChart = new Chart(expenseChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
          datasets: [
            {
              label: 'Profit',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#a43cda',
            },
            {
              label: 'Growth',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#6c7293',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // expense-chart-dark end

    // budget-chart start
    if ($("#budget-chart").length) {
      var expenseChartCanvas = $("#budget-chart").get(0).getContext("2d");
      var expenseChart = new Chart(expenseChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
          datasets: [
            {
              label: 'Profit',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#21bf06'
            },
            {
              label: 'Growth',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#e1e1e2'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // budget-chart end

    // budget-chart-dark start
    if ($("#budget-chart-dark").length) {
      var expenseChartCanvas = $("#budget-chart-dark").get(0).getContext("2d");
      var expenseChart = new Chart(expenseChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
          datasets: [
            {
              label: 'Profit',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#21bf06'
            },
            {
              label: 'Growth',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#6c7293'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // budget-chart-dark end

    // balance-chart start
    if ($("#balance-chart").length) {
      var expenseChartCanvas = $("#balance-chart").get(0).getContext("2d");
      var expenseChart = new Chart(expenseChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
          datasets: [
            {
              label: 'Profit',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#dc3545'
            },
            {
              label: 'Growth',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#e1e1e2'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // balance-chart end

    // balance-chart-dark start
    if ($("#balance-chart-dark").length) {
      var expenseChartCanvas = $("#balance-chart-dark").get(0).getContext("2d");
      var expenseChart = new Chart(expenseChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
          datasets: [
            {
              label: 'Profit',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#dc3545'
            },
            {
              label: 'Growth',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#6c7293'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // balance-chart-dark end

    // cpu-chart start
    if ($("#cpu-chart").length) {
      var cpuChartCanvas = $("#cpu-chart").get(0).getContext("2d");
      var cpuChart = new Chart(cpuChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L"],
          datasets: [{
              label: 'Profit',
              data: [45, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48],
              backgroundColor: '#dc3545',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 50
              }
            }],
            xAxes: [{
              display: false,
              stacked: false,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          },
          tooltips: {
            backgroundColor: 'rgba(168, 60, 218, .6)'
          }
        }
      });
    }
    // cpu-chart end

    // memory-chart start
    if ($("#memory-chart").length) {
      var memoryChartCanvas = $("#memory-chart").get(0).getContext("2d");
      var memoryChart = new Chart(memoryChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L"],
          datasets: [{
              label: 'Profit',
              data: [38, 35, 23, 22, 35, 23, 24, 28, 19, 33, 30, 45],
              backgroundColor: '#00c8bf',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 50
              }
            }],
            xAxes: [{
              display: false,
              stacked: false,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          },
          tooltips: {
            backgroundColor: 'rgba(168, 60, 218, .6)'
          }
        }
      });
    }
    // memory-chart end
    
  });
})(jQuery);