const pages = document.getElementsByClassName('badge');
const p = document.getElementsByClassName('description');
const cube = document.getElementById('photo-cube');
const cubeContainer = document.getElementsByClassName('cube-container');
const cubeControl = document.getElementsByClassName('bp-list')[0];
let RNG = function () {
    return Math.floor(Math.random() * (180 - (-180)) + (-180));
  }
  

 function rotator() {
    setInterval (function () {if (p[0].style.display === 'none' && p[1].style.display === 'none' && p[2].style.display === 'none' && p[3].style.display === 'none' && p[4].style.display === 'none' && p[5].style.display === 'none') {
        cube.style.transition = 'transform 20s linear';
        cube.style.transform = `rotateX(${RNG()}deg) rotateY(${RNG()}deg) rotateZ(${RNG()}deg)`;
    } else {
        clearInterval();
    }}, 10000)
}

function startRotator() {
        cube.style.transition = 'transform 10s linear';
        cube.style.transform = `rotateX(${RNG()}deg) rotateY(${RNG()}deg) rotateZ(${RNG()}deg)`;
}

startRotator();
rotator();



pages[0].addEventListener('click', ()=>{
    cube.style.transition = 'transform 1s ease-in-out';
    cube.style.transform = 'rotateX(0deg)';
    cubeContainer[0].style.marginLeft = '';
    cubeContainer[0].style.marginRight = '';
    if (p[0].style.display === 'none') {
        for(i=0; i<pages.length; i++) {
            if(p[i].style.display === '') {
                p[i].style.display = 'none';
            }
        }
        p[0].style.display = '';
    } else {
        p[0].style.display = 'none';
        startRotator();
    }
})

pages[1].addEventListener('click', ()=>{
    cube.style.transition = 'transform 1s ease-in-out';
    cube.style.transform = 'rotateX(90deg)';
    cubeContainer[0].style.marginLeft = '';
    cubeContainer[0].style.marginRight = '';
    if (p[1].style.display === 'none') {
        for(i=0; i<pages.length; i++) {
            if(p[i].style.display === '') {
                p[i].style.display = 'none';
            }
        }
        p[1].style.display = '';
    } else {
        p[1].style.display = 'none';
        startRotator();
    }
})

pages[2].addEventListener('click', ()=>{
    cube.style.transition = 'transform 1s ease-in-out';
    cube.style.transform = 'rotateY(90deg)';
    cubeContainer[0].style.marginLeft = '50px';
    cubeContainer[0].style.marginRight = '';
    if (p[2].style.display === 'none') {
        for(i=0; i<pages.length; i++) {
            if(p[i].style.display === '') {
                p[i].style.display = 'none';
            }
        }
        p[2].style.display = '';
        return
    } else {
        p[2].style.display = 'none';
        startRotator();
    }
})

pages[3].addEventListener('click', ()=>{
    cube.style.transition = 'transform 1s ease-in-out';
    cube.style.transform = 'rotateY(-90deg)';
    cubeContainer[0].style.marginLeft = '';
    cubeContainer[0].style.marginRight = '50px';
    if (p[3].style.display === 'none') {
        for(i=0; i<pages.length; i++) {
            if(p[i].style.display === '') {
                p[i].style.display = 'none';
            }
        }
        p[3].style.display = '';
    } else {
        p[3].style.display = 'none';
        startRotator();
    }
})

pages[4].addEventListener('click', ()=>{
    cube.style.transition = 'transform 1s ease-in-out';
    cube.style.transform = 'rotateY(180deg)';
    cubeContainer[0].style.marginLeft = '';
    cubeContainer[0].style.marginRight = '';
    if (p[4].style.display === 'none') {
        for(i=0; i<pages.length; i++) {
            if(p[i].style.display === '') {
                p[i].style.display = 'none';
            }
        }
        p[4].style.display = '';
    } else {
        p[4].style.display = 'none';
        startRotator();
    }
})

pages[5].addEventListener('click', ()=>{
    cube.style.transition = 'transform 1s ease-in-out';
    cube.style.transform = 'rotateX(-90deg)';
    cubeContainer[0].style.marginLeft = '';
    cubeContainer[0].style.marginRight = '';
    if (p[5].style.display === 'none') {
        for(i=0; i<pages.length; i++) {
            if(p[i].style.display === '') {
                p[i].style.display = 'none';
            }
        }
        p[5].style.display = '';
    } else {
        p[5].style.display = 'none';
        startRotator();
    }
})