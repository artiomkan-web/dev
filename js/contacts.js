'use strict'
let max = document.querySelector('#max'),
    maxTypical = 'img/attachments/max.png',
    maxBoombaster = 'img/attachments/max-boombaster.png'

max.addEventListener('mouseover', ()=>{
    max.src = maxBoombaster
})
max.addEventListener('mouseleave', ()=>{
    max.src = maxTypical
})