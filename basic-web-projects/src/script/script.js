if (localStorage.getItem("theme") === "dark") {
    localStorage.removeItem("theme");
    toggleTheme();
}

function toggleNavbar() {
    var x = document.getElementById("navbar");
    x.classList.toggle("responsive");
}

function toggleTheme() {
    var x = document.getElementById("navbar");
    x.classList.toggle("navbar");
    x.classList.toggle("dnavbar");
    var y = document.getElementById("body");
    y.classList.toggle("body");
    y.classList.toggle("dbody");
    var z = document.getElementById("container");
    if (z != null) {
        z.classList.toggle("grid-container");
        z.classList.toggle("dgrid-container");
    }
    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.removeItem("theme");
    }
}
