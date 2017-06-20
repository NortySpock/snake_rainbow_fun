var snake;
var food;
var canvasWidth = 200;
var canvasHeight = 200;
var startSnakeX = 100;
var startSnakeY = 100;
var scl = 10;



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
      snake = new Snake();
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

function showBody(element, index,array) {
            fill(255);
            rect(element.x,element.y,scl,scl);
        }

function Snake() {
    this.update = function() {
        console.log(print(this.body.toString()))
        this.x = this.x + (this.xspeed*scl);
        this.y = this.y + (this.yspeed*scl);
        this.body.pop();
        this.body.unshift(createVector(this.x,this.y));        
    }

    this.pos = function()
    {
        return createVector(this.x, this.y);
    }
    
    this.pos = function(xi,yi)
    {
        this.x = xi;
        this.y = yi;
    }
    
    this.show = function() {
        this.body.forEach(showBody);        
    }
    
    this.dir = function()
    {
        return createVector(this.xspeed,this.yspeed);
    }
    
    this.dir = function(inputVector) 
    {
        this.xspeed = inputVector.x;
        this.yspeed = inputVector.y;
    }
    
    this.dir = function(xi, yi)
    {
        this.xspeed = xi;
        this.yspeed = yi;
    }
    
    this.checkDeath = function()
    {
        if(this.x > canvasWidth - scl || this.x < 0)
        {
            this.ondeath();
        }
        if(this.y > canvasHeight - scl || this.y < 0)
        {
            this.ondeath();
        }
        if(createVector(this.x,this.y) in this.body)
        {
            this.ondeath();
        }
    }
    
    this.ondeath = function() 
    {
        frameRate(1);
        fill(255,0,0);
        ellipse(this.x, this.y, 100);        
        reset();
    }
    
    this.checkFood = function(posx,posy) {
        return (dist(this.x,this.y, posx, posy) < scl);
    }
    
    this.x = startSnakeX;
    this.y = startSnakeY;
    this.body = [];
    this.body.push(createVector(this.x,this.y));
    this.length = 1;
    this.dir(1,0);
}

function Food() {
    this.x;
    this.y;
    
    this.reset = function(){
        this.x = floor(random()*(canvasWidth/scl)*scl);
        this.y = floor(random()*(canvasHeight/scl)*scl);
    }
    
    this.show = function(){
        fill(0,100,100);
        rect(food.x, food.y, scl,scl);
    }
    
 
}
 