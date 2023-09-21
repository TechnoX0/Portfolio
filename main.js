const BURGER_MENU = document.getElementById('burger-menu')

BURGER_MENU.addEventListener("click", () => {
    BURGER_MENU.classList.toggle("active")
    BURGER_MENU.classList.toggle("inactive")
})

addEventListener("resize", () => {
    if (screen.width > 480) {
        BURGER_MENU.classList.remove("active")
        BURGER_MENU.classList.add("inactive")
    }
})