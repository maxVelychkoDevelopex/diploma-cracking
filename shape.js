
'use strict';

Shape.prototype.createShape = function() {
    return new paper.Path.Rectangle(this.properties);
};


function Shape(properties) {
    this.properties = properties;
    return this;
}
