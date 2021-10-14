class Mario {
    constructor(images, jumpSound, {x, y}, size){
        this.x = x
        this.y = y
        this.startY = y
        this.size = size
        this.images = images
        this.imageCounter = 5
        this.direction = 1
        this.accelerationX = 4
        this.accelerationY = 1
        this.velocityX = 0
        this.velocityY = 0
        this.drag = 2
        this.gravity = 3
        this.jumping = false
        this.jumpValue = 0
        this.jumpInterval = null
        this.jumpSound = jumpSound
        this.boundingbox = new BoundingBox(this.x, this.y, this.size)
        this.score = 0
        this.midDisolve = false
    }

    animateJump = () => {
        this.imageCounter = 8
        this.velocityY += this.accelerationY
    
    
    }

    clearJump = () => {
        clearInterval(this.jumpInterval)
        this.jumpValue = 1
        this.imageCounter = 0
        this.jumping = false
    }

    jump(){
        
        
        if(!this.jumping){
            this.jumpSound.play()
            this.jumpInterval = setInterval(this.animateJump, 20)
            setTimeout(this.clearJump, 500)
            this.jumping = true
            this.jumpValue = -1
        
        }
    }

    move(){
        this.velocityX += this.accelerationX
    }

    nextImage(start, end){
        if(this.imageCounter < start){
            this.imageCounter = end
        } else if(this.imageCounter > end){
            this.imageCounter = start
        } else {
            this.imageCounter+=this.direction

        }
    }

    render(){
         //this.boundingbox.update(this.x, this.y)
         //this.boundingbox.render()
        image(this.images[this.imageCounter], this.x, this.y, this.size, this.size)
    }

    runLeft(){
        if(this.imageCounter === 8){
            this.imageCounter = 2
        }
        this.direction = -1
        this.move()
        this.nextImage(2, 4)
    }

    runRight(){
        if(this.imageCounter === 8){
            this.imageCounter = 5
        }
        this.direction = 1
        this.move()
        this.nextImage(5, 6)
    }

    towardsRest(){
        if(this.midDisolve){
            this.imageCounter++
            if(this.imageCounter = 14){
                this.midDisolve = false
            }

            return
        }
        if(this.velocityX > 0){
            this.velocityX -= this.drag
        } else{
            if(this.x > 500){
                this.imageCounter = 0
            } else{
                this.imageCounter = 1
            }
            
        }
        if(this.y < this.startY){
            this.velocity += this.gravity
            this.jumping = true
            this.imageCounter = 8
        } else{
            this.velocityY = 0
        }
    }

    keepOnScreen(){
        if(this.x < 0){
            this.x = 0
            this.velocityX = 0
        }
        if(this.x > 900){
            this.x = 900
            this.velocityX = 0
        }

        if(this.y > this.startY){
            this.y = this.startY
           
        }
        if(this.y < 50){
            this.jumpValue = 0        
        }
    }


    update(){
        this.x += this.direction * this.velocityX
        this.y += this.jumpValue * this.velocityY 
        this.towardsRest()
        this.keepOnScreen()
    }



    disolve(){
        this.midDisolve = true
        this.imageCounter = 9
    }

}




