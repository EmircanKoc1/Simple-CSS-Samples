document.addEventListener("DOMContentLoaded", () => {


    const div = document.querySelector(".try-opacity");
    const btnOpacity = document.querySelector(".btn-opacity");
    const btnReverseOpacity = document.querySelector(".btn-reverse-opacity");


    btnOpacity.addEventListener("click", () => {
        div.classList.remove("opacityAnimation", "reverseOpacityAnimation");
        setTimeout(() => {
            div.classList.add("opacityAnimation");
        }, 10);
    });

    btnReverseOpacity.addEventListener("click", () => {
        div.classList.remove("opacityAnimation", "reverseOpacityAnimation");
        setTimeout(() => {
            div.classList.add("reverseOpacityAnimation");
        }, 10);
    });







});