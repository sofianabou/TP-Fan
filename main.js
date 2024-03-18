document.addEventListener("DOMContentLoaded", function() {
    let img = document.getElementById("img");
    let btnOn = document.getElementById("btnOn");
    let btnOff = document.getElementById("btnOff");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");

    btnOn.addEventListener("click", function() {
        img.style.animationDuration = "3s";
    });

    btnOff.addEventListener("click", function() {
        img.style.animationDuration = "0s";
    });

    btn1.addEventListener("click", function() {
        img.style.animationDuration = "1s";
    });

    btn2.addEventListener("click", function() {
        img.style.animationDuration = "0.5s";
    });

    btn3.addEventListener("click", function() {
        img.style.animationDuration = "0.1s";
    });
});
