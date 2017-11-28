var colors = [
    '#eb3775',
    '#3b9391',
    '#faeaa2',
    '#9173b0'
];

var selectedColor = "#eb3775";

var bodies;
var eyes;
var mounths;

var body;
var eye;
var mouth;

function preload() {
    bodies = [
        loadImage("body1.png"),
        loadImage("body2.png"),
        loadImage("body3.png"),
        loadImage("body4.png"),
        loadImage("body5.png"),
    ];

    eyes = [
        loadImage("eyes1.png"),
        loadImage("eyes2.png"),
        loadImage("eyes3.png"),
        loadImage("eyes4.png"),
        loadImage("eyes5.png"),
        loadImage("eyes6.png"),
    ];

    mouths = [
        loadImage("mouth1.png"),
        loadImage("mouth2.png"),
        loadImage("mouth3.png"),
        loadImage("mouth4.png"),
        loadImage("mouth5.png"),
        loadImage("mouth6.png"),
    ];
}

function setup() {
    imageMode(CENTER);
    createCanvas(windowWidth, windowHeight);
    background(selectedColor);
    textAlign(CENTER);
    textFont('Trebuchet MS');
    textSize(30);
    fill(255);

}

function draw() {
    background(selectedColor);
    if (!body || !eye || !mouth) {
        text('Shake to generate', width / 2, height / 2 - 20);
        text('your monster', width / 2, height / 2 + 20);   
    } else {
        textSize(24);
        text('So cool!', width / 2, height / 1.15 - 30);
        text('Give it another try', width / 2, height / 1.15);

        image(body,width/2,height/2-40,600,600);
        image(eye,width/2,height/2-40,600,600);
        image(mouth,width/2,height/2-40,600,600);
    }
}

function deviceShaken() {
    body = bodies[Math.floor(Math.random() * bodies.length)];
    eye = eyes[Math.floor(Math.random() * eyes.length)];
    mouth = mouths[Math.floor(Math.random() * mouths.length)];
    selectedColor = colors[Math.floor(Math.random() * colors.length)];
}
