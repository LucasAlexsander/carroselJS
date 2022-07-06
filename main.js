'use strict';

const images = [
    {'id': '1', 'url': './midia/img1.jpg'},
    {'id': '2', 'url': './midia/img2.jpg'},
    {'id': '3', 'url': './midia/img3.jpg'},
    {'id': '4', 'url': './midia/img4.jpg'},
    {'id': '5', 'url': './midia/img5.jpg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, containerItems) => {
    images.forEach( image => {
        containerItems.innerHTML += `
            <div class='item'>
                <img src='${image.url}'>
            </div>
        `            
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = items[items.length-1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)