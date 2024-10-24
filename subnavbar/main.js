
import * as functions from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {


    const navItems = document.querySelectorAll(".main-nav a");
    const subNavbar = document.querySelector(".sub-nav")

    functions.setHiddenClass(subNavbar);


    functions.arrowFor(20, () => {
        let subNavbarItem = document.createElement("a");
        subNavbarItem.textContent = `Sub nav item`;
        subNavbar.appendChild(subNavbarItem);
    });



    navItems.forEach(navItem => {
        navItem.addEventListener("mouseover", () => {

            functions.setFlexClass(subNavbar);
            functions.log("Mouse navbar item üzerine geldi");

        });
    });

    navItems.forEach(navItem => {
        navItem.addEventListener("mouseout", (event) => {

            functions.log("Mouse navbarItems üzerinden çekildi");
            functions.setHiddenClass(subNavbar);

        });
    });


    subNavbar.addEventListener("mouseover", () => {
        functions.log("mouse subNavbar üstünde");
        functions.setFlexClass(subNavbar);
    });


    subNavbar.addEventListener("mouseout", () => {
        functions.log("mouse subNavbar üstünde");
        functions.setHiddenClass(subNavbar);
    })















});