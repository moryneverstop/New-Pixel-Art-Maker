


// Select color input
var color = document.getElementById("colorPicker");
var table = document.getElementById("pixelCanvas");
var sizePicker = document.getElementById("sizePicker");
// Select size input
var height = document.getElementById("inputHeight").value;
var weight = document.getElementById("inputWeight").value;
// When size is submitted by the user, call makeGrid()
makeGrid(height, weight);

sizePicker.addEventListener("click", (e) => {
    e = preventDefault();

    var height = document.getElementById("inputHeight").value;
    var weight = document.getElementById("inputWeight").value;
    table.firstElementChild.remove();

    makeGrid(height, weight);
});

function makeGrid(height, weight) {

    for ( var i = 0; i<= height; i++) {
        var row = table.insertRow(i);
        for (var j=0; j <= weight; j++){
            var cell = row.insertCell(j);
            cell.addEventListener("click", (e) => {
                cell.stylebackgroundColor - color.value;
            });
        }
    }
}

