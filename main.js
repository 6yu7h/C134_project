function setup()
{
	video = createCapture(VIDEO);
	video.size(500, 450);
	
	canvas = createCanvas(500, 450);
	canvas.position(560, 150);
}