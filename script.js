// botons
const webProgBtn = document.querySelector("#webProgBtn")
const databasedBtn = document.querySelector("#databasedBtn")
const POOBtn = document.querySelector("#POOBtn")
const mobileApplicationBtn = document.querySelector("#mobileApplicationBtn")
const showAllBtn = document.querySelector("#showAllBtn")

// projectes
const poppyPlaytimeHTML = document.querySelector("#poppyPlaytimeHTML")
const provaCompetencialLaravel = document.querySelector("#provaCompetencialLaravel")
const bibliotecaED = document.querySelector("#bibliotecaED")
const shareTicket = document.querySelector("#shareTicket")

webProgBtn.addEventListener("click", (event) => {
    shareTicket.classList.add("hidden")
    bibliotecaED.classList.add("hidden")
    poppyPlaytimeHTML.classList.remove("hidden")
    provaCompetencialLaravel.classList.remove("hidden")
})

databasedBtn.addEventListener("click", (event) => {
    poppyPlaytimeHTML.classList.add("hidden")
    bibliotecaED.classList.add("hidden")
    provaCompetencialLaravel.classList.remove("hidden")
    shareTicket.classList.remove("hidden")
})

POOBtn.addEventListener("click", (event) => {
    poppyPlaytimeHTML.classList.add("hidden")
    provaCompetencialLaravel.classList.add("hidden")
    bibliotecaED.classList.remove("hidden")
    shareTicket.classList.add("hidden")
})

showAllBtn.addEventListener("click", (event) => {
    poppyPlaytimeHTML.classList.remove("hidden")
    provaCompetencialLaravel.classList.remove("hidden")
    bibliotecaED.classList.remove("hidden")
    shareTicket.classList.remove("hidden")
})

mobileApplicationBtn.addEventListener("click", (event) => {
    poppyPlaytimeHTML.classList.add("hidden")
    provaCompetencialLaravel.classList.add("hidden")
    bibliotecaED.classList.add("hidden")
    shareTicket.classList.remove("hidden")
})