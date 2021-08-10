//create the ball object. it will contain information about the ball.
//starting location and the horizontal and vertical speeds
let ball = {
    x: 300,
    y: 200,
    xSpeed: 4,
    ySpeed: -3
  }
  
  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(50)  //bg color
    
    createBall()
    bounce()
    move()
  }
  
  function createBall(){
      noStroke()  //remove border on ball
      fill(100, 100, 200)  //fill the ball
      circle(ball.x, ball.y, 24)  //create the ball
  }
  
  function bounce(){
    //if the ball reaches the right or left side
    if(ball.x > width || ball.x < 0){
      ball.xSpeed = ball.xSpeed * -1  //invert the speed(change the direction)
    }
    //if the ball reaches the top or the bottom of the screen
    if(ball.y > height || ball.y < 0){
      ball.ySpeed = ball.ySpeed * -1  //invert the speed(change the direction)
    }
  }
  
  function move(){
    //on each draw, we'll increment the balls speed
    ball.x += ball.xSpeed
    ball.y += ball.ySpeed
  }