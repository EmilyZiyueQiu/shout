let song, analyzer;



function setup() {
  createCanvas(windowWidth, windowHeight);
  song=new p5.AudioIn();

  song.start();
  

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background(255);

  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with size based on volume
  a=5 + rms * 10000;

  fill("white");
  rect(200,200,800,100);

  
  if (a<800){
 
  fill("blue")
  rect(200, 200, a,100);
  }else if (a>=800){
    fill("red")
    rect(200, 200, 800,100);
    noloop();
  }



}


