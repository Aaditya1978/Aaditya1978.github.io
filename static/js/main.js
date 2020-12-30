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
    projectName: "Facial Expression Prediction",
    description: "A upyter notebook for performing facial expression recognization using deep learning techniques.",
    htmlUrl: "https://github.com/Aaditya1978/Face_Expression_Prediction",
    htmlUrl2: "https://github.com/Aaditya1978/Face_Expression_Prediction"
  },
  {
    projectName: "COVID-19 Tweet Prediction",
    description: "A Web App for the prediction of Tweets realted to COVID-19 by using aNLP based Model",
    htmlUrl: "https://github.com/Aaditya1978/COVID-19-Tweet-Predictor",
    htmlUrl2 : "https://covid-19-tweet-predictor.herokuapp.com/"
  },
  {
    projectName: "ML Automator (Team Project) (08/2020 - Present)",
    description: "A Web App which provided Feature Engineering Tools, Exploratory Data Analysis, Machine learning model building and training in a very easy and automated way. It was built using Streamlit module",
    htmlUrl: "https://github.com/Ayush-Malik/basic_ML_model_building_assistant_for_regression_and_classification_problems",
    htmlUrl2: "https://ml-automator.herokuapp.com/",
  },
  {
    projectName: "Webapp For Farmers (Team Project) (08/2020 - Present)",
    description: "This website is designed for farmers with multi-lingual options. Features of our website are : To check weather conditions, Portal to apply for loan and insurance policies. Facility to buy or sell products, Predict the crop and seed diseases",
    htmlUrl: "https://github.com/abhaydhiman/farm_app",
    htmlUrl2: "https://github.com/abhaydhiman/farm_app",
  },
  {
    projectName: "COVID-19 Sentiment Analysis (Team Project) (06/2020 - 08/2020)",
    description: "A web app for analysis of people’s sentiments during lockdown in India . It provided proper sentiments analysis of peoples during lockdown with having relevant graphs, tables, and plots all of this is further compiled into a attractive user interactive web app",
    htmlUrl: "https://github.com/SmartPracticeschool/Covis",
    htmlUrl2: "http://covid19sentimentanalyzer-silly-buffalo-si.eu-gb.mybluemix.net/",
  },
  {
    projectName: "Stock Price Prediction (Team Project) (07/2020 - 07/2020)",
    description: "A Jupyter notebook for performing stock price prediction on the google stock dataset",
    htmlUrl: "https://github.com/abhaydhiman/stock_predictions",
    htmlUrl2: "https://github.com/abhaydhiman/stock_predictions",
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