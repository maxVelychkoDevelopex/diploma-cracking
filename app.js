'use strict';

initialPaperSetup();
createShapes(10);
drawView();


function initialPaperSetup() {
    paper.setup('crackingCanvas');
}

function createShapes(shapesQuantity) {
    var positionStartX = 0;
    for(var x=0; x<shapesQuantity; x++) {
        positionStartX += 110;

        var shape = new Shape({
            point: [positionStartX, 100],
            size: [100, 100],
            fillColor: '#0BA449'
        });

        shape.createShape();
    }
}

function drawView() {
    paper.view.draw();
}
