// Initialize global variables
let time = 0;
let wave = [];

function setup() {
    createCanvas(600, 400);

}

function draw() {
    // Draw black background
    background(0);
    // Init variables
    let radius = 100;
    let x = radius * cos(time);
    let y = radius * sin(time);

    // Draw border of circle white
    stroke(255);
    // Make circle empty
    noFill();
    // Move our circle down a bit
    translate(200, 200);
    // Draw main circle
    ellipse(0, 0, radius * 2);


    // fill(255);
    // Draw line in main circle
    line(0, 0, x, y);
    // // Draw ball at end of line
    ellipse(x, y, 10);
    // // Draw link from ball to graph and sync.
    translate(200,0);
    // Draw flat, connector line
    line(x - 200, y, 0, wave[0]);
    // Add new y value at end of array wave
    wave.unshift(y);


    // Record shape on screen
    beginShape();
    noFill();
    // for each item in wave, plot point
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();


    time += 0.01;
}
