let ball1
let ball2
let words = ["rainbow", "hello", "world"]
let balls = []
const ballsAmount = 50

function setup() {
    createCanvas(400, 400);

    //we can set a constant to create any amount of balls we want
    for(let i = 0; i < ballsAmount; i++){
        //for each ball, the starting position and speeds are randomized
        balls[i] = new Ball(random(100, 200), random(100, 300), random(-2, 3), random(-2, 2))
    }
}

function draw() {
    background(50) //bg color

    //loop through the balls array to display, move, and bounce the balls
    balls.forEach( (ball) => {
        ball.display()
        ball.move()
        ball.bounce()
    })

    fill(255)
    textSize(50)
    text(words[1], 12, 200)

}

