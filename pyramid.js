function drawPyramid() {

    // initialize all variables via querySelector.
    var pyramid = document.querySelector('#pyramid');
    var brick = document.querySelector('#brick-select').value;
    var height = document.querySelector('#slider').value;
    var label = document.querySelector('#height-label');
    label.innerHTML = height;

    while (pyramid.children.length > 0) {
        pyramid.removeChild(pyramid.firstChild);
    }

    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += " ";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick;
        }

       // create a text element with the string of characters
       textElem = document.createTextNode(rowStr);

       // create a <p> element with the text inside
       rowElem = document.createElement("pre");
       rowElem.appendChild(textElem);

       // insert the paragraph as a child of the container <div>
       document.getElementById("pyramid").appendChild(rowElem);
    }
}
drawPyramid();


var brickSelector = document.querySelector('#brick-select');
brickSelector.addEventListener('change', drawPyramid);


var slider = document.getElementById('slider');
slider.addEventListener('change', drawPyramid);


// var lastX;
// slider.addEventListener('mousedown', function(event){
//     if (event.which == 1) {
//         lastX = event.pageX;
//         addEventListener('mousemove', moved);
//     }
// });
//
// function buttonPressed(event) {
//     if (event.buttons == null) {
//         return event.which != 0;
//     } else {
//         return event.buttons != 0;
//     }
// }
//
// function moved(event) {
//     if (!buttonPressed(event)) {
//         removeEventListener("mousemove", moved);
//     } else {
//     drawPyramid;
//     }
// }
