// creates multiple divs to create a grid
function createGrid() {
    for (let i = 0; i < Math.pow(slider.value, 2); i++) {
        container.appendChild(document.createElement('div'));
    }
    container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;

    regularColor();
}

// deletes the grid
function deleteGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
}

// default element color on mouse hover
function regularColor() {
    // gets all the divs that create the grid
    let divs = document.querySelectorAll('div.container > div');
    // each div has an event listener that changes color when the mouse hovers over it
    divs.forEach(div => {
        div.addEventListener('mouseenter', (e) => e.target.style.backgroundColor = inpColor.value);
    });
}

// randomizes element color on mouse hover
function randomizeColor() {
    // gets all the divs that create the grid
    let divs = document.querySelectorAll('div.container > div');
    // each div has an event listener that changes color when the mouse hovers over it
    divs.forEach(div => {
        div.addEventListener('mouseenter', (e) =>  e.target.style.backgroundColor =  "#" + Math.floor(Math.random()*16777215).toString(16));
    });
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
let butSubmit = document.querySelector('.submit');
let butRandomize = document.querySelector('.randomize');
let inpColor = document.querySelector('.color');

// shows the value of the slider
value.innerText = slider.value;

// changes value text dynamically to the slider
slider.addEventListener('input', () => {
    value.innerText = slider.value;
})

// on button "submit" press changes the grid layout by the slider number
butSubmit.addEventListener('click', () => {
    deleteGrid();
    createGrid();
})

// when "Randomize" button clicked randomize element colors
butRandomize.addEventListener('click', () => {
    randomizeColor();
});

// Color changes to user choice
inpColor.addEventListener('click', (e) => {
    console.log(e);
    regularColor();
});

createGrid();
