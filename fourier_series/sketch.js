let time = 0;
let wave = [];

function setup() {
    createCanvas(600, 400);

}

function draw() {
    background(0);
    translate(200, 200);
    let radius = 100;

    stroke(255);
    noFill();
    ellipse(0, 0,radius * 2);

    let x = radius * cos(time);
    let y = radius * sin(time);
    wave.unshift(y);
    fill(255);
    // Draw line
    line(0,0,x,y);
    // Draw ball at end of line
    ellipse(x, y,10);

    // Draw link from ball to graph and sync.
    translate(200,0);
    line(x - 200, y, 0, wave[0]);

    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();


    time += 0.03;
}
