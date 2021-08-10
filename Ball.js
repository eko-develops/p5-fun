class Ball {
    constructor(x, y, xSpeed, ySpeed) {
        this.x = x
        this.y = y
        this.xSpeed = xSpeed
        this.ySpeed = ySpeed
    }

    move() {
        //on each draw, we'll increment the balls speed
        this.x += this.xSpeed
        this.y += this.ySpeed
    }

    display() {
        noStroke() //remove border on ball
        fill(100, 100, 200) //fill the ball
        circle(this.x, this.y, 24) //create the ball
    }

    bounce() {
        //if the ball reaches the right or left side
        if (this.x > width || this.x < 0) {
            this.xSpeed = this.xSpeed * -1 //invert the speed(change the direction)
        }
        //if the ball reaches the top or the bottom of the screen
        if (this.y > height || this.y < 0) {
            this.ySpeed = this.ySpeed * -1 //invert the speed(change the direction)
        }
    }
}