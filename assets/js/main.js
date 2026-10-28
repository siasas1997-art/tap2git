
"use strict";

// Сайт ашылған кезде сәлемдесу хабарламасы шығады
window.addEventListener("DOMContentLoaded", function () {
    alert("Сәлем! Менің сайтыма қош келдіңіз!");

    // Батырма басылған кезде хабарлама көрсету
    const button = document.querySelector(".button");

    if (button) {
        button.addEventListener("click", function () {
            console.log("Пайдаланушы сайт туралы ақпаратты ашты.");
        });
    }

    console.log("Сайт сәтті жүктелді!");
});
