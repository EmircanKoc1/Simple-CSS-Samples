document.addEventListener("DOMContentLoaded", () => {


    const div = document.querySelector(".try-opacity");
    const btnOpacity = document.querySelector(".btn-opacity");
    const btnReverseOpacity = document.querySelector(".btn-reverse-opacity");


    btnOpacity.addEventListener("click", () => {
        div.classList.remove("opacityAnimation");
        div.classList.remove("reverseOpacityAnimation");
        div.classList.add("opacityAnimation");
    });

    btnReverseOpacity.addEventListener("click", () => {
        div.classList.remove("opacityAnimation");
        div.classList.remove("reverseOpacityAnimation");
        div.classList.add("reverseOpacityAnimation");
    });







});