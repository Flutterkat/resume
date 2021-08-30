const pages = document.getElementsByClassName('badge');
const p = document.getElementsByClassName('description');
const cube = document.getElementById('photo-cube');
const cubeContainer = document.getElementsByClassName('cube-container');
const cubeFocus = document.getElementsByTagName('a');
let RNG = function () {
    return Math.floor(Math.random() * (180 - (-180)) + (-180));
  };
  

 function rotator() {
    setInterval (function () {if (p[0].style.display === 'none' && p[1].style.display === 'none' && p[2].style.display === 'none' && p[3].style.display === 'none' && p[4].style.display === 'none' && p[5].style.display === 'none' && cubeFocus[0] !== document.activeElement && cubeFocus[1] !== document.activeElement && cubeFocus[2] !== document.activeElement && cubeFocus[3] !== document.activeElement && cubeFocus[4] !== document.activeElement && cubeFocus[5] !== document.activeElement) {
        cube.style.transition = 'transform 20s linear';
        cube.style.transform = `rotateX(${RNG()}deg) rotateY(${RNG()}deg) rotateZ(${RNG()}deg)`;
    } else {
        clearInterval();
    }}, 10000);
}

function startRotator() {
    setTimeout (function () {
        cube.style.transition = 'transform 10s linear';
        cube.style.transform = `rotateX(${RNG()}deg) rotateY(${RNG()}deg)`;
    }, 100);
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
});

cubeFocus[0].addEventListener('focus', ()=>{
    cube.style.transition = 'transform 1s ease-in-out';
    cube.style.transform = 'rotateX(0deg)';
    cubeContainer[0].style.marginLeft = '';
    cubeContainer[0].style.marginRight = '';
    });

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
});

cubeFocus[1].addEventListener('focus', ()=>{
    cube.style.transition = 'transform 1s ease-in-out';
    cube.style.transform = 'rotateX(90deg)';
    cubeContainer[0].style.marginLeft = '';
    cubeContainer[0].style.marginRight = '';
    });

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
        return;
    } else {
        p[2].style.display = 'none';
        startRotator();
    }
});

cubeFocus[2].addEventListener('focus', ()=>{
    cube.style.transition = 'transform 1s ease-in-out';
    cube.style.transform = 'rotateY(90deg)';
    cubeContainer[0].style.marginLeft = '50px';
    cubeContainer[0].style.marginRight = '';
    });

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
});

cubeFocus[3].addEventListener('focus', ()=>{
    cube.style.transition = 'transform 1s ease-in-out';
    cube.style.transform = 'rotateY(-90deg)';
    cubeContainer[0].style.marginLeft = '';
    cubeContainer[0].style.marginRight = '50px';
});

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
});

cubeFocus[4].addEventListener('focus', ()=>{
    cube.style.transition = 'transform 1s ease-in-out';
    cube.style.transform = 'rotateY(180deg)';
    cubeContainer[0].style.marginLeft = '';
    cubeContainer[0].style.marginRight = '';
});

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
});

cubeFocus[5].addEventListener('focus', ()=>{
    cube.style.transition = 'transform 1s ease-in-out';
    cube.style.transform = 'rotateX(-90deg)';
    cubeContainer[0].style.marginLeft = '';
    cubeContainer[0].style.marginRight = '';
});