const labelsList = [
  "",
  "2",
  "",
  "4",
  "",
  "6",
  "",
  "8",
  "",
  "10",
  "",
  "12",
  "",
  "14",
  "",
  "16",
  "",
  "18",
  "",
  "20",
  "",
  "22",
  "",
  "24",
  "",
  "26",
  "",
  "28",
  "",
  "30",
  "",
];

var c = document.getElementById("myChart");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 0, 500);
my_gradient.addColorStop(1, "rgb(14, 113, 188)");
my_gradient.addColorStop(0, "rgb(59, 206, 254)");
ctx.fillStyle = my_gradient;
ctx.fillRect(20, 20, 150, 100);

const dataList = {
  labels: labelsList,
  datasets: [
    {
      label: "My First dataset",
      barThickness: 10,
      backgroundColor: my_gradient,
      borderColor: "rgb(178, 222, 242)",
      borderRadius: 20,
      data: [
        0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 10, 12, 14, 14, 16, 18, 10, 12, 2, 4,
        6, 8, 10, 12, 14, 16, 18, 20, 12, 14, 14, 16, 18, 10, 12,
      ],
    },
  ],
};

const myChart = document.getElementById("myChart").getContext("2d");
const myChar = new Chart(myChart, {
  type: "bar",
  data: dataList,
  options: {
    scales: {
      x: {
        grid:{
          display:false,
          drawBorder:false,
            },
          ticks: {
            max: 100,
            min: 0,
            stepSize: 2,

          }
        },
        y: {
          grid:{
            display:false,
            drawBorder:false,
              },
          ticks: {
            max: 100,
            min: 0,
            stepSize: 2,
            callback: function(value,index){
              return value+"h"
            }
          },
        },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const labels2 = ["0", "2", "4", "6"];

const data2 = {
  labels: labels2,
  datasets: [
    {
      label: "My First dataset2",
      backgroundColor: "rgb(178, 222, 242)",
      borderColor: "rgb(178, 222, 242)",
      data: [0, 2, 4, 6],
    },
  ],
};

const config2 = {
  type: "doughnut",
  data: data2,
  options: {},
};

var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["JavaScript", "CSS", "PHP", "HTML", "Laravel", "SQL","SHELL", "情報システム基礎知識（その他）"],
    datasets: [
      {
        backgroundColor: ["#db4100", "#008a8e", "#3C00FF"],
        data: [68, 21, 11, 13,24,45,56,65],
      },
    ],
  },
  options: {
    title: {
      // タイトルの設定
      display: true, // ★必須　表示設定 省略時は false
      position: "bottom", // 表示位置 省略時は top、他に left, right が指定できる
      fontSize: 14, // フォントサイズ 省略時は 12
      fontColor: "black", // 文字の色 省略時は "#666"
      fontStyle: "bold", // フォントタイプ 省略時は "bold"
      fontFamily: "sans-serif", // フォントファミリ 省略時は "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
      text: "タイトル", // ★必須　タイトルの文字列
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      labels: {
        render: "percentage",
        fontColor: "white",
        fontSize: 20,
      },
    },
  },
});





var ctx2 = document.getElementById("myPieChart2");
var myPieChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["晴れ", "曇り", "雨"],
    datasets: [
      {
        backgroundColor: ["#db4100", "#008a8e", "#3C00FF"],
        data: [68, 21, 11],
      },
    ],
  },
  options: {
    title: {
      // タイトルの設定
      display: true, // ★必須　表示設定 省略時は false
      position: "bottom", // 表示位置 省略時は top、他に left, right が指定できる
      fontSize: 14, // フォントサイズ 省略時は 12
      fontColor: "black", // 文字の色 省略時は "#666"
      fontStyle: "bold", // フォントタイプ 省略時は "bold"
      fontFamily: "sans-serif", // フォントファミリ 省略時は "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
      text: "タイトル", // ★必須　タイトルの文字列
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      labels: {
        render: "percentage",
        fontColor: "white",
        fontSize: 20,
      },
    },
  },
});





// const myChart2 = new Chart(document.getElementById("myChart2"), config2);

// var ctx2 = document.getElementById("myChart2");
// var myPieChart2 = new Charts(ctx2, {
//   type: "doughnut",
//   data: {
//     labels: ["晴れ", "曇り", "雨"],
//     datasets: [
//       {
//         backgroundColor: ["#db4100", "#008a8e", "#3C00FF"],
//         data: [68, 21, 11],
//       },
//     ],
//   },
//   options: {
//     title: {
//       // タイトルの設定
//       display: true, // ★必須　表示設定 省略時は false
//       position: "bottom", // 表示位置 省略時は top、他に left, right が指定できる
//       fontSize: 14, // フォントサイズ 省略時は 12
//       fontColor: "black", // 文字の色 省略時は "#666"
//       fontStyle: "bold", // フォントタイプ 省略時は "bold"
//       fontFamily: "sans-serif", // フォントファミリ 省略時は "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
//       text: "タイトル", // ★必須　タイトルの文字列
//     },
//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//       labels: {
//         render: "percentage",
//         fontColor: "white",
//         fontSize: 20,
//       },
//     },
//   },
// });
// const labels22 = ["0", "2", "4", "6"];

// const data22 = {
//   labels: labelsList,
//   datasets: [
//     {
//       label: "My First dataset22",
//       backgroundColor: "rgb(178, 222, 242)",
//       borderColor: "rgb(178, 222, 242)",
//       data: [0, 2, 4, 6],
//     },
//   ],
// };

// const config22 = {
//   type: "doughnut",
//   data: data22,
//   options: {},
// };


// const myChart22 = new Chart(document.getElementById("myChart22"), config22);









$(function () {
  $(".js-modal-open").on("click", function () {
    $(".js-modal").fadeIn();
    return false;
  });
  $(".js-modal-close").on("click", function () {
    $(".js-modal").fadeOut();
    return false;
  });
});
