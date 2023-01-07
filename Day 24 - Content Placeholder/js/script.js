'use strict'

const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const names = document.getElementById('name')
const date = document.getElementById('date')

const animated_bg = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)

function getData() {
    header.innerHTML = '<img src="img/lakesidecabin.jpg" alt="lakesidecabin"></img>'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, modi!'
    profile_img.innerHTML = '<img src="img/Fox.jpg" alt="Fox-cropped">'
    names.innerHTML = 'Kristijan Majeric'
    date.innerHTML = 'Dec 24, 2022'

    animated_bg.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'));
}