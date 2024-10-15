


document.addEventListener("DOMContentLoaded", () => {

    const navbar_burger = document.querySelector(".navbar-burger");
    const nav_sidebar = document.querySelector(".nav-sidebar");
    sidebarOpened = false;
    firstClicked = false;


    navbar_burger.addEventListener("click", () => {
        firstClicked = true;
        if (!sidebarOpened) {
            openSidebar();
        }
        else {
            closeSidebar();
        }


    });

    window.addEventListener("resize", () => {

        const width = window.innerWidth;
        if (width > 500) {
            closeSidebar(width);
        }

    });


    document.addEventListener("click", (event) => {

        if (sidebarOpened && !firstClicked) {
            if (!nav_sidebar.contains(event.target)) {
                console.log("div dışına tıklandı");
                closeSidebar();
            }
        }
        firstClicked = false;

    });


    function closeSidebar(width) {
        nav_sidebar.style.display = "none";
        navbar_burger.style.backgroundColor = "pink";
        sidebarOpened = false;
        console.log("sidebar closed", sidebarOpened, width);
    }

    function openSidebar(width) {
        nav_sidebar.style.display = "flex";
        navbar_burger.style.backgroundColor = "red";
        sidebarOpened = true;
        console.log("sidebar opened", sidebarOpened, width);
    }


});




