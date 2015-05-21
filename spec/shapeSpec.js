var Shape = require("../src/shape");
console.log(Shape);

var shape;
shape = new Shape(1,"red");
console.log(shape.color);

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

describe("Area", function() {
it("should should be 0 for this abstract shape", function() {
  expect(shape.area()).toEqual(0);
  });
});

describe("RGB", function() {
it("should return RGB as a string", function() {
  expect(shape.getRGB()).toEqual("rgb(182, 15, 91)");
  });
});

});