
// y = 5x
// x = 5t
// y = 3t + 3

float t;

void setup() {
  background(20);
  size(800, 600);
}

void draw() {
  stroke(255); // black
  strokeWeight(5);
  
  translate(width/2, height/2); // put point in center
  point(cos( t / 10) * 100, sin(t / 10) * 100 + cos(t / 15) * 100  ) ;
  t++;
}

float x(float t) {
  return 0;
}

float y(float t) {
  return 0;  
}
