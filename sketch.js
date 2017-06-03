var s;
var speedmult = 1;
var canvasWidth = 500;
var canvasHeight = 500;
var startSnakeX = 100;
var startSnakeY = 100;
var snakeSegmentSize = 10;
var f;


function setup() {
    reset();
}

function draw() {
    background(100);
    s.update();
    s.checkDeath();
    s.show();
}

function reset(){
      createCanvas(canvasWidth, canvasHeight);
      
      frameRate(5)
      s = new Snake();
}

function keyPressed(){
    if (keyCode === UP_ARROW)
    {
        s.dir(0, -1);
    }
    if (keyCode === DOWN_ARROW)
    {
        s.dir(0, 1);
    }
    if (keyCode === LEFT_ARROW)
    {
        s.dir(-1, 0);
    }
    if (keyCode === RIGHT_ARROW)
    {
        s.dir(1, 0);
    }
}

 

function Snake() {   
    this.update = function() {
        this.x = this.x + (this.xspeed*snakeSegmentSize);
        this.y = this.y + (this.yspeed*snakeSegmentSize);
    }
    
    this.pos = function(xi,yi)
    {
        this.x = xi;
        this.y = yi;
    }
    
    this.show = function() {
        fill(255);
        rect(this.x,this.y,snakeSegmentSize,snakeSegmentSize);
    }
    
    this.dir = function(xi, yi)
    {
        this.xspeed = xi*speedmult;
        this.yspeed = yi*speedmult;
    }
    
    this.checkDeath = function()
    {
        if(this.x > canvasWidth - snakeSegmentSize || this.x < 0)
        {
            this.ondeath();
        }
        if(this.y > canvasHeight - snakeSegmentSize || this.y < 0)
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
    
    this.checkFood = function() {
        
    }
    
    this.x = startSnakeX;
    this.y = startSnakeY;
    this.length = 1;
    this.dir(-1,0);
}

function Food(){
    
}