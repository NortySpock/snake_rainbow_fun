"use strict";

class Food 
{
    constructor()
    {
        this.x;
        this.y;
    }

    reset()
    {
        this.x = this.spawnDimension(canvasWidth);
        this.y = this.spawnDimension(canvasHeight);
    }

    show()
    {
        fill(0,100,100);
        rect(food.x, food.y, scl,scl);
    }

    spawnDimension(maxCanvasDimension)
    {
        var minDim = scl;
        var maxDim = maxCanvasDimension - scl;
        var randomDim = maxDim - minDim
        var randomScl = floor(random(randomDim) / scl);
        return (randomScl*scl) + minDim
    }
}


class Snake {
    constructor(positionVector, directionVector)
    {
        this.x = positionVector.x;
        this.y = positionVector.y;
        this.body = [];
        this.body.push(createVector(this.x,this.y));
        this.length = 1;
        this.xspeed = directionVector.x;
        this.yspeed = directionVector.y;
    }

    update() {
        this.x = this.x + (this.xspeed*scl);
        this.y = this.y + (this.yspeed*scl);
        this.body.pop();
        this.body.unshift(createVector(this.x,this.y));
    }

    pos()
    {
        return createVector(this.x, this.y);
    }

    pos(xi,yi)
    {
        this.x = xi;
        this.y = yi;
    }

    show()
    {
        this.body.forEach(showBody);
    }

    dir()
    {
        return createVector(this.xspeed,this.yspeed);
    }

    dir(inputVector)
    {
        this.xspeed = inputVector.x;
        this.yspeed = inputVector.y;
    }

    dir(xi, yi)
    {
        this.xspeed = xi;
        this.yspeed = yi;
    }

    checkDeath()
    {
        if(this.x > canvasWidth - scl || this.x < 0)
        {
            this.ondeath();
        }
        if(this.y > canvasHeight - scl || this.y < 0)
        {
            this.ondeath();
        }

        if(this.body.length > 1)
        {
            for(var idx = 1; idx<this.body.length; idx++) //not including the head
            {
                if(createVector(this.x,this.y).equals(this.body[idx]))
                {
                    this.ondeath()
                }
            }
        }
    }

    ondeath()
    {
        frameRate(1);
        fill(255,0,0);
        ellipse(this.x, this.y, 100);
        reset();
    }

    checkFood(posx,posy) {
        return (dist(this.x,this.y, posx, posy) < scl);
    }



}


var snake;
var food;
var canvasWidth = 200;
var canvasHeight = 200;
var startSnakeX = 100;
var startSnakeY = 100;
var scl = 10;
var debug = 0;




function setup() {
    reset();
}

function draw() {
    background(50);

    snake.update();
    snake.checkDeath();
    snake.show();
    if(snake.checkFood(food.x,food.y))
    {
        snake.body.unshift(createVector(food.x,food.y))
        food.reset();
    }

    food.show();
}

function reset(){
      createCanvas(canvasWidth, canvasHeight);

      frameRate(5)
      snake = new Snake(createVector(100,100),createVector(1,0));
      food = new Food();
      food.reset();
}

function keyPressed(){
    var targetDir;
    if (keyCode === UP_ARROW)
    {
        targetDir = createVector(0, -1);
    }
    if (keyCode === DOWN_ARROW)
    {
        targetDir = createVector(0, 1);
    }
    if (keyCode === LEFT_ARROW)
    {
        targetDir = createVector(-1, 0);
    }
    if (keyCode === RIGHT_ARROW)
    {
        targetDir = createVector(1, 0);
    }
    
    snake.dir(targetDir.x,targetDir.y);
}

function mousePressed(){
    if(debug === 1)
    {
        snake.body.unshift(createVector(this.x,this.y))
    }
}

function showBody(element, index,array) 
{
            fill(255);
            rect(element.x,element.y,scl,scl);
}
