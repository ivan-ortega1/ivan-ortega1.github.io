// botons
const webProgBtn = document.querySelector("#webProgBtn")
const databasedBtn = document.querySelector("#databasedBtn")
const POOBtn = document.querySelector("#POOBtn")
const showAllBtn = document.querySelector("#showAllBtn")

// projectes
const poppyPlaytimeHTML = document.querySelector("#poppyPlaytimeHTML")
const provaCompetencialLaravel = document.querySelector("#provaCompetencialLaravel")
const bibliotecaED = document.querySelector("#bibliotecaED")

webProgBtn.addEventListener("click", (event) => {
    bibliotecaED.classList.add("hidden")
    poppyPlaytimeHTML.classList.remove("hidden")
    provaCompetencialLaravel.classList.remove("hidden")
})

databasedBtn.addEventListener("click", (event) => {
    poppyPlaytimeHTML.classList.add("hidden")
    bibliotecaED.classList.add("hidden")
    provaCompetencialLaravel.classList.remove("hidden")
})

POOBtn.addEventListener("click", (event) => {
    poppyPlaytimeHTML.classList.add("hidden")
    provaCompetencialLaravel.classList.add("hidden")
    bibliotecaED.classList.remove("hidden")
})

showAllBtn.addEventListener("click", (event) => {
    poppyPlaytimeHTML.classList.remove("hidden")
    provaCompetencialLaravel.classList.remove("hidden")
    bibliotecaED.classList.remove("hidden")
})