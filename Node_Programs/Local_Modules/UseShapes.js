var c=require("./circle")
var r= require("./rectangle")
var t = require("./triangle")
console.log("Area of Circle " +c.area(7))
console.log("Circumference of Circle " +c.circum(2))
console.log("Diameter of Circle " +c.dia(2))
console.log("Area of Rectangle " +r.area(1,2))
console.log("Perimeter of Rectangle " + r.peri(1,2))
console.log("Perimeter of Triangle " + t.peri(1,2,3))
console.log("Is traingle Equilateral " +t.equi(2,3,4))
console.log("Is traingle Equilateral " +t.equi(2,2,2))





