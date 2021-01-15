var hr, min, sec, hrAngle, minAngle, secAngle



function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

}

function draw() {
  background(0,0,0);


  translate(200, 200)
  rotate(-90)

  hr = hour();
  min = minute();
  sec = second()

  secAngle = map(sec, 0, 60, 0, 360)
  minAngle = map(min, 0, 60, 0, 360)
  hrAngle = map(hr % 12, 0, 12, 0, 360)

push()
rotate(secAngle)
strokeWeight(7)
stroke(0,48,181)
line(0,0 ,100,0)
pop()


push()
rotate(minAngle)
strokeWeight(7)
stroke(255,255,255)
line(0,0 ,75,0)
pop()

push()
rotate(hrAngle)
strokeWeight(7)
stroke(255,0,0)
line(0,0 ,50,0)
pop()

strokeWeight(10)
noFill()
stroke(0,48,181)
arc(0,0,300,300,0,secAngle)
stroke(255,0,0)
arc(0,0,280,280,0,minAngle)
stroke(255,255,255)
arc(0,0,260,260,0,hrAngle)



}
