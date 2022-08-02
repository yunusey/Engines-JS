class Wall{
    constructor(x, y, xe, ye){
      this.x = x;
      this.y = y;
      this.xe = xe;
      this.ye = ye;
    }
    show() {
      stroke(255);
      line(this.x, this.y, this.xe, this.ye);
      noStroke();
    }
  }
  
  class Block{
    constructor(x, y, w, h, m, v){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.m = m;
      this.v = v;
    }
  
    bounce(other){
      let sumMasses = this.m + other.m;
      let newVelocs = (this.m - other.m) / sumMasses * this.v + (2 * other.m / sumMasses * other.v);
      return newVelocs;
    }
  
    update(){
      this.x += this.v;
    }
  
    show(){
      quad(
        this.x, this.y, 
        this.x + this.w, this.y, 
        this.x + this.w, this.y - this.h, 
        this.x, this.y - this.h
      );
    }
  
    checkCollision(){
      if(this.x <= wall.x){
        collisionCount++;
        this.v = - this.v;
      }
    }
  }
  
  function areColliding(x1, w1, x2, w2){
    return (x1 + w1 >= x2 && x1 + w1 <= x2 + w2);
  }