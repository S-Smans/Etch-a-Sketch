let body = document.querySelector('body');

let container = document.createElement('div');

for (let i = 0; i < 256; i++) {
    container.appendChild(document.createElement('div'));
}

container.classList.add('container');

body.appendChild(container);

let divs = document.querySelectorAll('div.container > div');

divs.forEach(div => {
    div.addEventListener('mouseenter', (e) => e.target.style.backgroundColor = 'purple');
});