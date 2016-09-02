

var socket = io();
var data_uv
var gauge1
var config1



// Flot Line Chart with Tooltips
$(document).ready(function() {
    console.log("document ready");
    socket.emit('page_render',{data : '1'});   

    config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF7777";
    config1.textColor = "#FF4444";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#FFDDDD";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = false;
    config1.maxValue = 20;
    config1.displayPercent = false;
    gauge1= loadLiquidFillGauge("fillgauge2", 0 ,config1);
});

socket.on('update-uv', function(data) {
  data_uv = data
  gauge1.update(11)//data.uv_index);
  updateLiquid(data_uv);
  console.log(data)
});

function updateLiquid(data){
    if (data.oms_risk ==  "Low" ){
      config1.circleColor = "#FF7777";
      config1.textColor = "#FF4444";
      config1.waveTextColor = "#FFAAAA";
      config1.waveColor = "#FFDDDD"; 
    } else if (data == "Moderate") {
      config1.circleColor = "#FFF300";
      config1.textColor = "#FFF300";
      config1.waveTextColor = "#FFF300";
      config1.waveColor = "#FFF300";
    } else if (data == "High") {
      config1.circleColor = "#F18B00";
      config1.textColor = "#F18B00";
      config1.waveTextColor = "#F18B00";
      config1.waveColor = "#F18B00";
    } else if (data == "Very High") {
      config1.circleColor = "#E6310F";
      config1.textColor = "#E6310F";
      config1.waveTextColor = "#E6310F";
      config1.waveColor = "#E6310F";
    } else {
      config1.circleColor = "#B467A3";
      config1.textColor = "#B467A3";
      config1.waveTextColor = "#B467A3";
      config1.waveColor = "#B467A3";
    }
console.log(data.uv_index)
//gauge1= loadLiquidFillGauge("fillgauge2", 0 , config1);

}

