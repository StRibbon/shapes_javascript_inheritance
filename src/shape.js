function Shape(sides, color) {
  this.sides = sides;
  this.color = color;
}

Shape.prototype.area = function() {
  return 0;
};

Shape.prototype.perimeter = function() {
  return 0;
};

// Should return an assci version of the shape.  Since the shape
// doesn't make sense here, we return a string.
Shape.prototype.draw = function() {
   return "A shape with " + this.sides + " sides";
};

Shape.prototype.toString = function() {
  return "[Shape sides:" + this.sides + ", color:" + this.color +" ]"
};

// Return the rgb value (as a string) for the color you've selected.
// You can have a preset list of colors that you switch on.

Shape.prototype.getRGB = function() {
  
  var colors = {
		red: "rgb(182, 15, 91)",
		green: "rgb(118, 182, 15)",
		blue: "rgb(15, 141, 182)",
	};

	for(var key in colors){
		if(this.color === key)
			return colors[key];
    }
};

//var blueShape = new Shape(4, "blue");	
//blueShape.getRGB();

module.exports = Shape;
