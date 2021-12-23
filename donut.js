// var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// var yValues = [55, 49, 44, 24, 15];
// var barColors = [
//   "#b91d47",
//   "#00aba9",
//   "#2b5797",
//   "#e8c3b9",
//   "#1e7145"
// ];

// new Chart("myChart", {
//   type: "doughnut",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }],
//   },
//   options: {
//     cutoutPercentage: [55,49,44,24,15],
//     title: {
//       display: true,
//       text: "World Wide Wine Production 2018"
//     }
//   }
// });

var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 800;
myCanvas.height = 800;

var ctx = myCanvas.getContext("2d");

// function drawLine(ctx, startX, startY, endX, endY){
//     ctx.beginPath();
//     ctx.moveTo(startX,startY);
//     ctx.lineTo(endX,endY);
//     ctx.stroke();
// }

// function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius, startAngle, endAngle);
//     ctx.stroke();
// }
function drawPieSlice(
  ctx,
  centerX,
  centerY,
  radius,
  startAngle,
  endAngle,
  color
) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
}

var Piechart = function (options) {
  this.options = options;
  this.canvas = options.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.colors = options.colors;
  widthList = [300, 340, 300, 340];
  heightList = [300, 340, 300, 340];
  this.draw = function () {
    var total_value = 0;
    var color_index = 0;
    for (var categ in this.options.data) {
      var val = this.options.data[categ];
      total_value += val;
    }

    var start_angle = 0;
    var i = 0;
    for (categ in this.options.data) {
      val = this.options.data[categ];
      var slice_angle = (2 * Math.PI * val) / total_value;
      console.log(start_angle, slice_angle);

      drawPieSlice(
        this.ctx,
        800 / 2,
        800 / 2,
        Math.min(widthList[i] / 2, heightList[i] / 2),
        start_angle,
        start_angle + slice_angle,
        this.colors[color_index % this.colors.length]
      );
      drawPieSlice(
        this.ctx,
        800 / 2,
        800 / 2,
        Math.min(widthList[i] / 3, heightList[i] / 3),
        start_angle,
        start_angle + slice_angle,
        "#061731"
      );
      i++;
      start_angle += slice_angle;
      color_index++;
    }

    //drawing a white circle over the chart
    //to create the doughnut chart
    if (this.options.doughnutHoleSize){
        drawPieSlice(
            this.ctx,
            800/2,
            800/2,
            this.options.doughnutHoleSize * 200,
            0,
            2 * Math.PI,
            "#061731"
        );
    }
  };
};
var myVinyls = {
  "Classical music": 10,
  "Alternative rock": 14,
  Pop: 2,
  Jazz: 12,
};
var myDougnutChart = new Piechart({
  canvas: myCanvas,
  data: myVinyls,
  colors: ["#fde23e", "#f16e23", "#57d9ff", "#937e88"],
  doughnutHoleSize: 0.5,
});
myDougnutChart.draw();
