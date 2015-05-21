var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.

function Rectangle(width, length, color) { // TODO: THIS IS JUST A PLACE HOLDER, PLEASE CHANGE.
	Shape.call(this, 4, color);
	this.width = width;
	this.length = length;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.area = function(){
	return this.width * this.length;
}

Rectangle.prototype.perimeter = function(){
	return this.width+this.width+this.length+this.length;
}

module.exports = Rectangle;
