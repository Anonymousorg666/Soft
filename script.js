const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu')
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;


btn.addEventListener('click',navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollpos = window.scrollY;
    if(scrollpos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    }
    else if(scrollpos < 100) {
        reset();
        scrollStarted = false;
    }
}


function countUp() {
    counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText; 
        const increament = target / 100;

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increament)}`;

            setTimeout(updateCounter,20);
        }

        else {
            counter.innerText = target;
        }

        
    };

    updateCounter();

    });
}


function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
}

countUp();