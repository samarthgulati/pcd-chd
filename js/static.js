var static = function(s) {
  s.setup = function() {
    var size = Math.min(window.innerWidth, window.innerHeight);
    var xCenter = window.innerWidth * 0.5;
    var yCenter = window.innerHeight * 0.5;
    var quart = size * 0.25;
    var dia = size * 0.075;
    var cvs = s.createCanvas(window.innerWidth, window.innerHeight);
    cvs.parent(document.body.querySelector('.parallax-bg'));
    s.noStroke();
    s.colorMode(s.HSB, 100);
    s.angleMode(s.DEGREES);
    s.background(100);
    s.translate(xCenter, yCenter);
    for(var d = 0; d < 360; d+=1) {
      s.fill(
        s.map(d, 0, 360, 0, 100), //map(d, 0, 360, 0, 60), 
        50, 
        100, //map(d, 0, 360, 100, 60), 
        10
      );
      s.push();
      s.rotate(d);
      s.translate(quart, 0);
      s.circle(
        0, 
        0, 
        dia + s.noise(s.frameCount*0.01, d*0.25) * dia
      );
      s.pop();
    }
  }
}
var staticP5 = new p5(static);