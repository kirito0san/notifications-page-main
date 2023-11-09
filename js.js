let div = document.querySelectorAll(`section > div`)
let close = document.querySelectorAll(`.close`)
let counter = document.querySelector(`.counter`)
let allDone = document.querySelector(`.allDone`)
let counter1 = 0
div.forEach((e) => {
    if (e.classList.contains(`notyet`)) {
        counter1 += 1
    }
    counter.innerHTML = counter1
    e.addEventListener(`click`, () => {
        e.children[0].lastElementChild.classList.remove(`close`)
        if (counter1 > 0 && e.classList.contains(`notyet`)) {
            counter1 -= 1
        }
        e.classList.remove(`notyet`)
        counter.innerHTML = counter1
    })
})

allDone.addEventListener(`click`, () => {
    div.forEach((e) => {
        e.classList.remove(`notyet`)
        e.children[0].lastElementChild.classList.remove(`close`)
    })
    counter.innerHTML = `0`
})

