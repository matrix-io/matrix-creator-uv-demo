/*
 * Copyright 2016 <Admobilize>
 * All rights reserved.
 */

var socket = io();
// Flot Line Chart with Tooltips

$(document).ready(function() {
   //Options for chart 
   var gaugeOptions = {

      chart: {
         type: 'solidgauge'
      },

      title: null,

      pane: {
         center: ['50%', '85%'],
         size: '140%',
         startAngle: -90,
         endAngle: 90,
         background: {
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
         }
      },

      tooltip: {
         enabled: false
      },

      yAxis: {
         stops: [
          [2/17, '#3EA72D'], // green
          [6/17, '#FFF300'], // yellow
          [8/17, '#F18B00'], // Orange
          [11/17, '#E6310F'], // red
          [12/17, '#B467A3']  // violet
         ],
         lineWidth: 0,
         minorTickInterval: null,
         tickAmount: 2,
         title: {
            y: -70
         },
         labels: {
            y: 16
         }
      },
      plotOptions: {
         solidgauge: {
            dataLabels: {
               y: 5,
               borderWidth: 0,
               useHTML: true
            }
         }
      }
   };

   // The UV chart
   $('#container-uv').highcharts(Highcharts.merge(gaugeOptions, {
      yAxis: {
         min: 0,
         max: 17,
         title: {
            text: 'UV'
         }
      },

      credits: {
         enabled: false
      },

      series: [{
         name: 'uv',
         data: [0],
         dataLabels: {
             format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                 ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                    '<span style="font-size:12px;color:silver">UV factor</span></div>'
         },
         tooltip: {
             valueSuffix: ' km/h'
         }
     }]
   }));
});

/**
 * listen to the event and update chart
 * @param  {Object} data UV data 
 */
socket.on('update-uv', function(data) {
   var chart = $('#container-uv').highcharts();
   var point;
   var color;
   
   if (chart) {
      point = chart.series[0].points[0];
      if (data.uv_index < 3.0) {
        color = [62, 167, 45, 1];
      } else if (data.uv_index < 6.0) {
        color = [255, 243, 0, 1];
      } else if (data.uv_index < 8.0) {
        color = [241, 139, 0, 1];
      } else if (data.uv_index < 11.0) {
        color = [230, 49, 15, 1];
      } else {
        color = [180, 103, 163, 1];
      }

      chart.yAxis[0].stops[0].color.rgba = color;
      chart.yAxis[0].stops[1].color.rgba = color;
      chart.yAxis[0].stops[2].color.rgba = color;
      chart.yAxis[0].stops[3].color.rgba = color;
      chart.yAxis[0].stops[4].color.rgba = color;

      point.update(Math.floor(data.uv_index*100)/100);
   }
   console.log(data)
});

