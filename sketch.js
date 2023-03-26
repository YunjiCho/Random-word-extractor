let circles = [];
let colors = [
  "#FF0000",
  "rgb(0,162,49)",
  "rgb(0,0,255)",
  "rgba(255,255,255)(0,0,0,0)",
];
let table;
let snum = 5888;
let wordindex1 = snum;
let wordindex2 = snum;
let wordindex3 = snum;
let wordindex4 = snum;
let wordindex5 = snum;
let s = 0;
let wx1 = 0;
let wx2 = 0;
let wx3 = 0;
let wx4 = 0;
let wx5 = 0;
let wy1 = 0;
let wy2 = 0;
let wy3 = 0;
let wy4 = 0;
let wy5 = 0;
let d1 = 0;
let d2 = 0;
let d3 = 0;
let d4 = 0;
let d5 = 0;
let txtSize = 30;
let t1 = 380-100;
let t3 = 480;
let t5 = 580+100;
let ty = 800;
let x = 100;
let y = 300;
let r = 150;
let sx1 = 2;
let sy1 = 2;
let nc = 220;
let gong = 75;
let circlewidth = 530;
let img;
let titlelc;
let widthn = 960;
let heightn = 480;
function preload() {
  table = loadTable("wordlist.csv", "csv", "header");
  img = loadImage("2.png");
}

function setup() {
  // frameRate(30);
  canvas = createCanvas(960, 960);
  canvas.position(500 - 50, 200);
  for (let i = 0; i < 400; i++) {
    circles[i] = new Circle(
      random(width / 2 - circlewidth / 2, width / 2 + circlewidth / 2),
      random(height / 2 - circlewidth / 2, height / 2 + circlewidth / 2),
      random(16, 18),
      random(14, 16)
    );
  }
}
function draw() {
  background(255);
  values = table.getColumn("word");
  textAlign(CENTER, CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  //추첨기계
  for (let i = 0; i < circles.length; i++) {
    //print(i);
    if (i % 3 == 1) {
      fill(255, 0, 0);
    } else if (i % 3 == 2) {
      fill("rgb(0,162,49)");
    } else {
      fill(0, 0, 255);
    }
    circles[i].move();
  }
  image(img, 130, -50, 700, 700);
  //가림막..
  fill(255);
  stroke(0);
  //noStroke();
  rect(480, 800, 700, 400);
  //제목
  strokeWeight(0);
  stroke(0);
  fill(0);
  textSize(20);
  text(
    "국립국어연구원의 자주 쓰이는 한국어 낱말 5800을 바탕으로 만들어진",
    320,
    66
  );
  textSize(40);
  strokeWeight(2);
  text("랜덤 단어 추출기", 740, 60);

  //원의 선
  noFill();
  strokeWeight(1);
  //stroke(20);
  noStroke();
  ellipse(width / 2, height / 2, circlewidth, circlewidth);
  //단어의 공
  strokeWeight(1);

  fill(colors[0]);
  circle(wx1, wy1, d1);
  fill(colors[1]);
  circle(wx2, wy2, d2);
  fill(colors[2]);
  circle(wx3, wy3, d3);
  fill(colors[1]);
  circle(wx4, wy4, d4);
  fill(colors[0]);
  circle(wx5, wy5, d5);
  //단어
  fill(255);
  textSize(20);
  strokeWeight(0);
  text(values[wordindex1], wx1, wy1);
  text(values[wordindex2], wx2, wy2);
  text(values[wordindex3], wx3, wy3);
  text(values[wordindex4], wx4, wy4);
  text(values[wordindex5], wx5, wy5);
  
  //1,3,5 버튼
  stroke(255);
  fill(nc);
  ellipse(t1, ty - 2, 60, 60);
  ellipse(t3, ty - 2, 60, 60);
  ellipse(t5, ty - 2, 60, 60);
  //1,3,5 글씨
  fill(255);
  textSize(txtSize);
  text("1", t1, ty);
  text("3", t3, ty);
  text("5", t5, ty);
}

function mousePressed() {
  if (
    mouseX > t1 - (txtSize + 10) / 2 &&
    mouseX < t1 + (txtSize + 10) / 2 &&
    mouseY > ty - (txtSize + 10) / 2 &&
    mouseY < ty + (txtSize + 10) / 2
  ) {
    wordindex1 = snum;
    wordindex2 = snum;
    wordindex3 = int(random(values.length));
    wordindex4 = snum;
    wordindex5 = snum;
    d1 = 0;
    d2 = 0;
    d3 = gong;
    d4 = 0;
    d5 = 0;

    wx3 = random(40, width - 40);
    wy3 = random(100, height - 100);
  }

  if (
    mouseX > t3 - (txtSize + 10) / 2 &&
    mouseX < t3 + (txtSize + 10) / 2 &&
    mouseY > ty - (txtSize + 10) / 2 &&
    mouseY < ty + (txtSize + 10) / 2
  ) {
    wordindex1 = snum;
    wordindex2 = int(random(values.length));
    wordindex3 = int(random(values.length));
    wordindex4 = int(random(values.length));
    wordindex5 = snum;
    d1 = 0;
    d2 = gong;
    d3 = gong;
    d4 = gong;
    d5 = 0;

    wx2 = random(40, width - 40);
    wy2 = random(100, height - 100);
    wx3 = random(40, width - 40);
    wy3 = random(100, height - 100);
    wx4 = random(40, width - 40);
    wy4 = random(100, height - 100);
    cl = 1;
  }
  if (
    mouseX > t5 - (txtSize + 10) / 2 &&
    mouseX < t5 + (txtSize + 10) / 2 &&
    mouseY > ty - (txtSize + 10) / 2 &&
    mouseY < ty + (txtSize + 10) / 2
  ) {
    wordindex1 = int(random(values.length));
    wordindex2 = int(random(values.length));
    wordindex3 = int(random(values.length));
    wordindex4 = int(random(values.length));
    wordindex5 = int(random(values.length));
    d1 = gong;
    d2 = gong;
    d3 = gong;
    d4 = gong;
    d5 = gong;
    wx1 = random(40, width - 40);
    wy1 = random(100, height - 100);
    wx2 = random(40, width - 40);
    wy2 = random(100, height - 100);
    wx3 = random(40, width - 40);
    wy3 = random(100, height - 100);
    wx4 = random(40, width - 40);
    wy4 = random(100, height - 100);
    wx5 = random(40, width - 40);
    wy5 = random(100, height - 100);
  }
}

class Circle {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  move() {
    this.x += this.xSpeed;
    if (this.x < 300 || this.x > 700) {
      this.xSpeed *= -1;
    }

    this.y += this.ySpeed;
    if (this.y < 100 || this.y > 500) {
      this.ySpeed *= -1;
    }
    // strokeWeight(1);
    noStroke();
    circle(this.x, this.y, 60);
    if (mousePressed) {
      this.ySpeed += 2;
    }
  }
}
