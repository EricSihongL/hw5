var shade= [10,20,45,25,60,100,40,32,56]
function setup() {
  createCanvas(600, 600);
}

function draw() {
  colorMode(HSB);
  noStroke();
	
    for (var i = 0; i < 9; i ++ 1);{
			fill(shade[i],100,100);
			rect(0*width/5, 0, width/5, height);
		}
}
