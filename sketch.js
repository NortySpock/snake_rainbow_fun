var s;
var f;
var speedmult = 1;
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
    
    s.update();
    s.checkDeath();
    s.show();
    if(s.checkFood(f.x,f.y))
    {
        s.body.unshift(f.x,f.y)
        f.reset();
    }
    
    f.show();
}

function reset(){
      createCanvas(canvasWidth, canvasHeight);
      
      frameRate(5)
      s = new Snake();
      f = new Food();
      f.reset();
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

function showBody(element, index,array) {
            fill(255);
            rect(element.x,element.y,scl,scl);
        }

function Snake() {   
    this.update = function() {
        this.x = this.x + (this.xspeed*scl);
        this.y = this.y + (this.yspeed*scl);
        this.body.shift();
        this.body.unshift(createVector(this.x,this.y));        
    }
    
    this.pos = function(xi,yi)
    {
        this.x = xi;
        this.y = yi;
    }
    
    this.show = function() {
        this.body.forEach(showBody);        
    }
    
    this.dir = function(xi, yi)
    {
        this.xspeed = xi*speedmult;
        this.yspeed = yi*speedmult;
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
        rect(f.x, f.y, scl,scl);
    }
    
 
}
 