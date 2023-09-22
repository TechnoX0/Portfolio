const BURGER_MENU = document.getElementById('burger-menu')
const MENU_TOGGLE = document.querySelectorAll(".toggle")

MENU_TOGGLE.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
        console.log(toggle, e.currentTarget)

        BURGER_MENU.classList.toggle("active")
        BURGER_MENU.classList.toggle("inactive")
    })
})

// MENU_TOGGLE.addEventListener("click", () => {
//     BURGER_MENU.classList.toggle("active")
//     BURGER_MENU.classList.toggle("inactive")
// })

addEventListener("resize", () => {
    if (screen.width > 480) {
        BURGER_MENU.classList.remove("active")
        BURGER_MENU.classList.add("inactive")
    }
})