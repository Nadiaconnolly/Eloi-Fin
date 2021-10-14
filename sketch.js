let objectImg, marioImg, goombaImg
let images 
let themeSong, jumpSound, coinSound
let sounds 
let game


function preload(){
    objectsImg = loadImage('assets/head.png')
    marioImg = loadImage('assets/eloi.png')
    goombaImg = loadImage('assets/KrisC.png')
    themeSong = loadSound('assets/sounds/Eloi-theme.mp3'), 
    coinSound = loadSound('assets/sounds/Eloi-collection.mp3'),
    jumpSound = loadSound('assets/sounds/Eloi-jump.mp3'),
    dieSound = loadSound('assets/sounds/Eloi-death.mp3')

    images = {
        objectsImg,
        marioImg, 
        goombaImg
    }

    sounds = {
        themeSong, 
        jumpSound, 
        coinSound,
        dieSound
    }
}

function setup(){
    createCanvas(1000, 600)
    background(95, 138, 245)
    frameRate(15)
    game = new Game(images, sounds)

}

function draw(){
    checkKeys()
    game.update()
    game.render()    
}

function checkKeys(){
    if(keyIsDown(UP_ARROW)){
        game.hero.jump()
        return
    } else if(keyIsDown(LEFT_ARROW)){
        game.hero.runLeft()
        return
    } else if(keyIsDown(RIGHT_ARROW)){
        game.hero.runRight()
        return
    }
}

function keyReleased(){
    if(keyCode === UP_ARROW){
        game.hero.clearJump()
    }
}

