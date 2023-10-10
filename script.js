// document ready
$(document).ready(function () {
  $(".loading").addClass("loaded");
  setTimeout(function () {
    $(".loading").css("display", "none");
  }, 500);
});

// navbar active
$(document).scroll(function () {
  $(".navbar ul li a").each(function () {
    var container = $(this).attr("href");
    var containerOffset = $(container).offset().top;
    var containerHeight = $(container).outerHeight();
    var containerBottom = containerOffset + containerHeight;
    var scrollPosition = $(document).scrollTop();
    if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});

// slide navbar
$(".menu-toggle input").click(function () {
  $(".navbar ul").toggleClass("slide");
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $(".navbar").addClass("fix-navbar");
  } else {
    $(".navbar").removeClass("fix-navbar");
    $(".navbar ul li a").first().removeClass("active");
  }
});

$(".mencegah-card").click(function (e) {
  $(this).find(".mencegah-card-detail").toggleClass("show-detail");
  $(this).find(".card-arrow").toggleClass("card-arrow-click");
});

$(".mencegah-card-detail").each(function (index) {
  index % 2 == 0 ? $(this).css("background", "#AADCD3") : $(this).css("background", "#E7E8EA");
});

//    canvas
const getCanvas = $("#canvas_chart");
let configChart = {
  options: {
    maintainAspectRasio: false,
  },
  data: {
    options: {
      maintainAspectRasio: false,
    },
    labels: ["2020", "2021", "2022", "April 2023"],
    datasets: [
      {
        label: "Kasus Kematian Akibat Rabies",
        data: [40, 62, 102, 11],
        backgroundColor: "#F9A11B10",
        borderColor: "rgb(255,0,0)",
        type: "line",
        yAxisID: "y",
        position: "right",
        pointRadius: 10,
        options: {
          maintainAspectRasio: false,
        },
      },
      {
        type: "bar",
        label: "Gigitan Hewan Penular Rabies",
        data: [82634, 57257, 104228, 32118],
        backgroundColor: ["#F79963"],
        yAxisID: "y1",
        options: {
          maintainAspectRasio: false,
        },
      },
      {
        type: "bar",
        label: "Kasus GHPR yang Mendapat VAR",
        data: [56797, 43779, 74888, 23211],
        backgroundColor: ["#AADCD3"],
        yAxisID: "y1",
        options: {
          maintainAspectRasio: false,
        },
      },
    ],
  },
  options: {
    // responsive: true,
    maintainAspectRasio: false,
    scales: {
      y: {
        beginAtZero: true,
        position: "right",
      },
    },
  },
};
const canvas_chart = new Chart(getCanvas, configChart);

// $(window).on("resize", function () {
//   console.log($(this).innerWidth());
//   if ($(this).innerWidth() < 662) {
//     // getCanvas.attr("height", "300");
//   }
// });
