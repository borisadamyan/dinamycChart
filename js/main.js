const CHART = document.getElementById('lineChart');
const BAR_CHART = document.getElementById('barChart');
const RADAR_CHART = document.getElementById('radarChart');
const POLAR_CHART = document.getElementById('polarChart');

var xVal = moment(new Date()).format('LTS');
var yVal = 0;
var updateInterval = 5000;
var dps = [{
            x: 0,
            y: 0
          }]; // dataPoints
let x =[];
let y =[];
var dataLength = 20; // number of dataPoints visible at any point

  Chart.defaults.global.responsive = false;
  /*Chart.defaults.global.animation.onComplete = () => {
    console.log("finished");
  };*/
console.log(Chart.defaults);


var updateChart = function (count) {
  console.log(x);
  console.log(y);
  count = count || 1;

  for (var j = 0; j < count; j++) {
    yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
    dps.push({
      x: xVal,
      y: yVal
    });
    xVal = moment(new Date()).format('LTS');
  }

  if (dps.length > dataLength) {
    dps.shift();
  }
  y = dps.map(d => d.y);
  x = dps.map(d => d.x);

  let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
      labels: x,
      datasets: [
        /* {
         label: "My First Dataset",
         fill: false,
         backgroundColor: "rgba(75,192,192, 0.4)",
         borderColor: "rgba(75,192,192, 1)",
         borderCapStyle: 'butt',
         data: [65,59,80,81,56,55,40]
         },*/
        {
          label: "My Second Dataset",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(74,152,122, 0.4)",
          borderColor: "rgba(74,152,122, 1)",
          borderCapStyle: 'butt',
          borderDash:[],
          pointBorderColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          data:  y,
        },
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
            stepSize: 5
          }
        }],
      },
    }
  });

};
setInterval(function(){updateChart()}, updateInterval);

let barChart  = new Chart(BAR_CHART, {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My Second Dataset",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(44,42,244, 0.4)",
        borderColor: "rgba(44,42,244, 1)",
        borderWidth:2,
        borderCapStyle: 'butt',
        borderDash:[],
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        data: [90,20,60,20,80,55,70]
      },
    ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize: 10,
          //reverse: true
        }
      }]
    }
  }
});

let radarChart  = new Chart(RADAR_CHART, {
  type: 'radar',
  data: {
    labels: ["Strength", "Skill", "Speed", "Luck", "Health"],
    datasets: [
      {
        label: "Points",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(0,255,0, 0.4)",
        borderColor: "rgba(44,42,244, 1)",
        borderWidth:2,
        borderCapStyle: 'butt',
        borderDash:[],
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        data: [70,40,60,20,38]
      },
      {
        label: "Points",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(255,0,0, 0.4)",
        borderColor: "rgba(255,0,0, 1)",
        borderWidth:2,
        borderCapStyle: 'butt',
        borderDash:[],
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        data: [10,30,60,20,65]
      },
    ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize: 10,
          //reverse: true
        }
      }]
    }
  }
});

let polarChart  = new Chart(POLAR_CHART, {
  type: 'polarArea',
  data: {
    labels: ["Strength", "Skill", "Speed", "Luck", "Health"],
    datasets: [
      {
        label: "Points",
        fill: true,
        lineTension: 0.1,
        backgroundColor: ['#f1c40f', '#e67e33', '#16a085', '#2980b9', '#2980b9'],
        borderWidth:2,
        borderCapStyle: 'butt',
        borderDash:[],
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        data: [70,40,60,20,38]
      },
    ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize: 10,
          //reverse: true
        }
      }]
    }
  }
});