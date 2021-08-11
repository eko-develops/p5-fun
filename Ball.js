class Ball {
    constructor(posX, posY, radius, xVelocity = 3, yVelocity = -1) {
        this.posX = posX
        this.posY = posY
        this.radius = radius
        this.xVelocity = xVelocity
        this.yVelocity = yVelocity
    }

    createBall(){
        fill(100, 200, 255)
        noStroke()
        circle(this.posX, this.posY, this.radius)
    }

    moveBall(){
        this.posX += this.xVelocity
        this.posY += this.yVelocity
    }

    bounceBall(width, height){
        if (this.posX > width || this.posX < 0){
            this.xVelocity = this.xVelocity * -1
        }
        if(this.posY > height || this.posY < 0){
            this.yVelocity = this.yVelocity * -1
        }
    }

    colliding(otherBall){
        let d = dist(this.posX, this.posY, otherBall.posX, otherBall.posY)
        return d < this.radius + otherBall.radius
    }

    changeRadius(radius){
        this.radius = radius
    }
}