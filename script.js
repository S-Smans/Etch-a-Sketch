// creates multiple divs to create a grid
function createGrid() {
    for (let i = 0; i < Math.pow(slider.value, 2); i++) {
        container.appendChild(document.createElement('div'));
    }
    container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;

    // gets all the divs that create the grid
    let divs = document.querySelectorAll('div.container > div');

    // each div has an event listener that changes color when the mouse hovers over it
    divs.forEach(div => {
        div.addEventListener('mouseenter', (e) => e.target.style.backgroundColor = 'purple');
    });
}

// deletes the grid
function deleteGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
}

// gets div by class name from html
let main = document.querySelector('.main');

// creates a new div 
let container = document.createElement('div');

// adds a class="container" to the div that contains all the divs 
container.classList.add('container');

// adds created grid to the html
main.appendChild(container);

// gets div by class name from html
let slider = document.querySelector('.slider');
let value = document.querySelector('.value');
let submit = document.querySelector('.submit');

// shows the value of the slider
value.innerText = slider.value;

// changes value text dynamically to the slider
slider.addEventListener('input', () => {
    value.innerText = slider.value;
})

// changes the grid layout by the slider number
submit.addEventListener('click', (e) => {
    deleteGrid();
    createGrid();
})

createGrid();
