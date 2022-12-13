// dropdown_menu

const settingsmenu = document.querySelector(".settings-menu");
const navUserIcon = document.querySelector(".nav-user-icon");

navUserIcon.onclick = () => {
    settingsmenu.classList.toggle("settings-menu-height");
}

// dark_mode_btn

const darkBtn = document.getElementById("dark-btn");
darkBtn.onclick = () => {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    // second condition with action
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }


}

// keep dark mode whenever the page is refreshed
// first condition
if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme","light")
}