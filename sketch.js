let xVelocity
let yVelocity    //the speed of the ball
let posX
let posY
let balls = []
let radius

const ballNumber = 3

function setup() {
    createCanvas(400, 400);

    /**Create number of Ball objects dependent on the ballNumber constant
     * and add them to the balls array. */
    for( let i = 0; i < ballNumber; i++){
        //Creating Ball objects with random values
        balls[i] = new Ball(random(10, 390), random(10, 390), 30, random(-2, 5), random(-2, 5))
    }
}

function draw() {
    background(50) //Set the background colour

    /**Loop through the balls array to create each ball set in config.
     * We'll use a "for of" loop because index does not matter and has
     * better performance than a forEach loop.
     */
    for(let ball of balls){
        
        ball.createBall()   //Create the CURRENT ball in the array
        ball.moveBall() //Move the CURRENT ball in the array
        ball.bounceBall(width, height)  //Bounce the CURRENT ball in the array
        
        let overlapping = false //We'll assume that the CURRENT ball is not overlapping anything

        /**While we are looping to create, move, and bounce the balls, we'll check if this CURRENT ball is colliding
         * with any other ball in the balls array.
         */
        for (let otherBall of balls){
            /**If the current ball is colliding with another ball and the other ball
             * is also not equal to the current ball, set overlapping to true. This
             * will avoid the current ball staying true and constantly passing the
             * conditional.
             */
            if(ball.colliding(otherBall) && ball !== otherBall){
                overlapping = true
            }

            /**If overlapping is true, we'll make the changes to the current ball
             */
             overlapping ? ball.changeRadius(100) : ball.changeRadius(30)
        //     if(overlapping){
        //         ball.changeRadius(100)
        //     } else{
        //         ball.changeRadius(30)
        //     }
        }
    }
}
