	var sizes = [100,85,75,65,55,45,35,25,20];
	var x=200;
	var y=height/2;

function setup() {
  createCanvas(900, 600);
	

    
  for (var i = 0; i < sizes.length; i += 1) {
    colorMode(HSB)
		fill(sizes[i]);
    ellipse(50+i*100, height/2, sizes[i], sizes[i]);
		
		function：draw(){
			sizes[i].x=size[i].x+random(-1,+1);
			size[i].y=size[i].y+random(-1,+1);
		}
  }
}
