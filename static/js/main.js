eva.replace();
AOS.init({
  once: true,
});
// Add scrollspy to <body>
$("body").scrollspy({ target: ".navbar", offset: 50 });
// Smooth Scrolling
$("#main-nav a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});
// Preloader
$(window).on("load", function () {
  if ($("#preloader").length) {
    $("#preloader")
      .delay(1500)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});
// Navbar
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 200) {
    $(".fixed-top").css({ background: "transparent", "box-shadow": "none" });
  } else {
    $(".fixed-top").css({
      background: "white",
      "box-shadow": "0px 1px 4px #292b2c20",
    });
  }
});

// Rotating Text
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1500;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

//Projects Cards
const addCards = document.querySelector(".addCards");
const Cards = [
  {
    projectName: "Sportify- Sports Web App (03/2021 - 04/2021)",
    description: "This is a sports web app which lets user to get latest information about their favourite sports in detail. The frontend tech used is HTML, CSS, jQuery and Backend Tech Used is Flask. The database was Firebase",
    htmlUrl: "https://github.com/Aaditya1978/sportify--sports-web-app",
    htmlUrl2: "https://sportify-sports-web-app.herokuapp.com/"
  },
  {
    projectName: "Meme Stream (02/2021 - 02/2021)",
    description: "This is a meme stream web app built withflask as backend and HTML, CSS and JS as frontend. Here user can post his own meme and can view others shared meme. The Project was the part of crio winter of Doing where I Completed to Stage-2 where we had to build this project.",
    htmlUrl: "https://github.com/Aaditya1978/x-meme-stream",
    htmlUrl2: "https://x--meme--stream.herokuapp.com/"
  },
  {
    projectName: "Facial Expression Prediction (12/2020 - 01/2021)",
    description: "This is a GUI Application for recognizing live facial expressions using Tensorflow and OpenCV. Firstly Tensorflow is used to train the model. After that prediction is done using OpenCV. The application is built with Tkinter.",
    htmlUrl: "https://github.com/Aaditya1978/Facial-Expression-GUI",
    htmlUrl2 : "https://github.com/Aaditya1978/Facial-Expression-GUI"
  },
  {
    projectName: "ML Automator (Team Project) (08/2020 - 09/2020)",
    description: "A Web App which provided Feature Engineering Tools, Exploratory Data Analysis, Machine learning model building and training in a very easy and automated way. It was built using Streamlit module",
    htmlUrl: "https://github.com/Ayush-Malik/basic_ML_model_building_assistant_for_regression_and_classification_problems",
    htmlUrl2: "https://ml-automator.herokuapp.com/",
  },
  {
    projectName: "COVID-19 Sentiment Analysis (Team Project) (06/2020 - 08/2020)",
    description: "A web app for analysis of people’s sentiments during lockdown in India . It provided proper sentiments analysis of peoples during lockdown with having relevant graphs, tables, and plots all of this is further compiled into a attractive user interactive web app",
    htmlUrl: "https://github.com/SmartPracticeschool/Covis",
    htmlUrl2: "https://github.com/SmartPracticeschool/Covis",
  },
];

const showCards = () => {
  let output = "";
  Cards.forEach(
    ({ projectName, description, htmlUrl, htmlUrl2}) =>
      (output += `
      <div class="col-md-6 pb-4 px-3" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
        <div class="card shadow-sm">
          <div class="card-body">
            <h3 class="card-title mb-1">${projectName}</h3>
            <p class="card-text" style="opacity: 0.7;font-size: 1rem;">${description}</p>
            <a href="${htmlUrl2}" class="float-left" target="_blank" style="text-decoration: none;">View Webapp &#8594;</a><br>
            <a href="${htmlUrl}" class="float-left" target="_blank" style="text-decoration: none;">View Project &#8594;</a>
          </div>
        </div>
      </div>
      `)
  );
  addCards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);