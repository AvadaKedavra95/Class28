class Bird extends BaseClass {
  constructor(x,y){

    
    super(x,y,50,50);
    var option = {
      density : 50,
      friction : 0.01,
      restitution : 0.0001
    }
    this.body=Bodies.rectangle(x,y,50,50,option)
    this.image = loadImage("sprites/bird.png");
    World.add(world,this.body)
  }

  display() {
    // this.body.position.x = mouseX;
    // this.body.position.y = mouseY;
    super.display();
  }
}
