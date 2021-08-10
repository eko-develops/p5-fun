class Ball {
    constructor(x, y, xSpeed, ySpeed, radius = 26) {
        this.x = x
        this.y = y
        this.xSpeed = xSpeed
        this.ySpeed = ySpeed
        this.radius = radius

        //local variables for the class
        this.red = 100
        this.blue = 100
        this.green = 155
    }

    //make the balls move
    move() {
        //on each draw, we'll increment the balls speed
        this.x += this.xSpeed
        this.y += this.ySpeed
    }

    //when the ball is clicked, change its color
    clicked(mouseX, mouseY){
        let d = dist(mouseX, mouseY, this.x, this.y)    //dist calcualtes distance from mouse to center of object
        if(d < this.radius){    //if the mouse is within the radius
            this.red = random(0, 255)
            this.greed = random(0, 255)
            this.blue = random(0, 255)
        }
    }

    display() {
        noStroke() //remove border on ball
        fill(this.red, this.green, this.blue)
        circle(this.x, this.y, this.radius) //create the ball
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