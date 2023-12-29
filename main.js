import "./styles/main.scss";
import { setupCounter } from "./counter.js";

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");

  let currentIndex = 0;

  function updateSlider() {
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

  document.getElementById("prevButton").addEventListener("click", prevSlide);
});

setupCounter(document.querySelector("#counter"));
