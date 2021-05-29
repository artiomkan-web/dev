'use strict'
class boombasterFaster{
    constructor(person, typical, boombaster) {
        person.addEventListener('mouseover', ()=>{
            person.src = boombaster
        })
        person.addEventListener('mouseleave', ()=>{
            person.src = typical
        })
    }
}

let max = document.querySelector('#max'),
    maxTypical = 'img/attachments/max.png',
    maxBoombaster = 'img/attachments/max-boombaster.png',
    egor = document.querySelector('#egor'),
    egorTypical = 'img/attachments/egor.jpg',
    egorBoombaster = 'img/attachments/egor-boombaster.jpg'

let bf1 = new boombasterFaster(max, maxTypical, maxBoombaster),
    bf2 = new boombasterFaster(egor, egorTypical, egorBoombaster)
