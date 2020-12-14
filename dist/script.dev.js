"use strict";

var twitterIcon = document.querySelector('.twiiter_icon');
var content = document.querySelector('.main_content_body');
var navButton = document.querySelector('.navButton');
var sideDrawerBtn = document.querySelector('.side_drawer_button');
twitterIcon.addEventListener("click", function () {
  document.getElementById("small_nav").style.transform = "translateX(0%)";
});
navButton.addEventListener("click", function () {
  document.getElementById("small_nav").style.transform = "translateX(-100%)";
});
content.addEventListener("click", function () {
  document.getElementById("small_nav").style.transform = "translateX(-100%)";
});
sideDrawerBtn.addEventListener("click", function () {
  document.getElementById("small_nav").style.transform = "translateX(0%)";
});