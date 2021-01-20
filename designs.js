// Select elements
const colorInput = document.getElementById("colorPicker");
const selectInput = document.getElementById("pixelCanvas");
const formInput = document.getElementById("sizePicker");
const heightInput = document.getElementById("inputHeight");
const widthInput = document.getElementById("inputWidth");
    
// Draw the grid: for each row. draw a cell
function makeGrid(heightInput, widthInput) {
    // Insert a row 
    for(let n = 1; n <= heightInput.value; n++ ) {
        let row = selectInput.insertRow();
        // Insert a cell in the row 
        for (let m = 1; m <= widthInput.value; m++) {
            let cell = row.insertCell();
        }
    }
}

// add color to specific cell using evt.target
function addColor(evt) {
    evt.target.style.backgroundColor = colorInput.value;
}

// add a max attribute to sizePicker
heightInput.setAttribute('max', '50');

// Listener for submit
formInput.addEventListener("submit", function (evt) {
    // prevent page reload after click 'submit'
    evt.preventDefault();
    // clear the old grid and add new grid
    selectInput.innerHTML = "";
    // draw the grid
    makeGrid(heightInput, widthInput);
    
});

// 'click' listener to the table, check if the element is a 'td'
selectInput.addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'TD') {
        addColor(evt);
    }
});