//https://p5js.org

//03_Colorlines (Exercise 01)
//Link all circles with individual lines
//Color of the line is the mix of the circle colors

//Initialization function
let ringNum=5;
let ringSize=30;
let size = x*ringSize;

function setup() {
  //Set the size of rendering window - pixels
  createCanvas(500, 500);

  //Size of stroke
  strokeWight(1);

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  background(0);

  for (let x= ringNum; x>0; x--)
  {
  fill()  
  ellipse(width/2, height/2,size, size);

  }




}
