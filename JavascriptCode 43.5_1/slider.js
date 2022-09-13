const images = [
    'images/Screenshot (1).png',
    'images/Screenshot (2).png',
    'images/Screenshot (3).png',
    'images/Screenshot (4).png',
    'images/Screenshot (5).png',
    'images/Screenshot (6).png',
    'images/Screenshot (7).png',
    'images/Screenshot (8).png',
    'images/Screenshot (9).png',
    'images/Screenshot (10).png'

];

let imagesIndex = 0;

const imgElemts = document.getElementById('slider-img');

setInterval(() => {

    if (imagesIndex >= images.length) {
        imagesIndex = 0;
    }
    const imgUrl = images[imagesIndex];
    imgElemts.setAttribute('src', imgUrl)
    imagesIndex++;

}, 500)