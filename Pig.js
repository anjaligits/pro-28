class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
     super.display();
    }
    else{
      World.remove(world, this.body);
      
      
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      
    }
    console.log(this.body.position.x);
    console.log(this.body.position.y);
  }

};