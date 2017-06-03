var s;
var speedmult = 2;
var canvasWidth = 500;
var canvasHeight = 500;
var startSnakeX = 100;
var startSnakeY = 100;
var snakeBodySize = 10;


function setup() {
      createCanvas(canvasWidth, canvasHeight);
      
      frameRate(30)
      s = new Snake();
}

function draw() {
    background(100);
    s.update();
    s.checkDeath();
    s.show();
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
    this.x = startSnakeX;
    this.y = startSnakeY;
    this.length = 1;
    
    this.update = function() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }
    
    this.show = function() {
        fill(255);
        rect(this.x,this.y,10,10);
    }
    
    this.dir = function(xi, yi)
    {
        this.xspeed = xi*speedmult;
        this.yspeed = yi*speedmult;
    }
    
    this.dir(-1,0);
    
    this.checkDeath = function()
    {
        if(this.x > canvasWidth - snakeBodySize || this.x < 0)
        {
            this.ondeath();
        }
    }
    
    this.ondeath = function() 
    {
        fill(255,0,0);
        ellipse(this.x, this.y, 100);        
        s.dir(0,0);
    }

}