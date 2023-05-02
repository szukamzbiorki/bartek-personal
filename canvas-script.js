let img1,img2


function preload() {
    img1 = loadImage('assets/images/carpet.png');
    img2 = loadImage('assets/images/collage.png');
  }

function setup() {
    var cnv = createCanvas(500 , 500);
    cnv.style('display', 'block');
    cnv.parent('canvasholder')
    background(255, 0, 200);
    img1.loadPixels();
    img2.loadPixels();
  }
  
  function draw() {
    let noiseScale=0.006;
    background(0);
    for (let x=0; x < width; x++) {
        for (let y=0; y < height; y++) {
            let noiseVal = noise(x*noiseScale, y*noiseScale);
            stroke(noiseVal*255);
            point(x, y);
        }
    }
  }