var anim = function(s) {
  var size = Math.min(window.innerWidth, window.innerHeight);
  var xCenter = window.innerWidth * 0.5;
  var yCenter = window.innerHeight * 0.5;
  var quart = size * 0.25;
  var dia = size * 0.075;
  s.setup = function() {
    var cvs = s.createCanvas(window.innerWidth, window.innerHeight);
    cvs.parent(document.body.querySelector('.parallax-bg'));
    cvs.elt.classList.add('hidden');
    s.noStroke();
    s.colorMode(s.HSB, 100);
    s.angleMode(s.DEGREES);
  }
  s.draw = function () {
    s.background(100, 1);
    s.translate(xCenter, yCenter);
    s.rotate(s.frameCount/360);
    const d = s.frameCount % 360;
    s.fill(
      s.map(d, 0, 360, 0, 100), //map(d, 0, 360, 0, 60), 
      50,
      100, //map(d, 0, 360, 100, 60),
      80
    );
    s.push();
    s.rotate(s.frameCount);
    s.translate(quart, 0);
    s.circle(
      0,
      0,
      dia + s.noise(s.frameCount * 0.01, d * 0.25) * dia
    );
    s.pop();
  }
}
var animP5 = new p5(anim);