var s;

function setup() {
      createCanvas(500, 500);
      
      // frameRate(5)
      s = new Snake();
}

function draw() {
    background(51);
    s.update();
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
    this.x = 100;
    this.y = 100;
    this.xspeed = 1;
    this.yspeed = 0;
    
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
        this.xspeed = xi;
        this.yspeed = yi;
    }
    

}