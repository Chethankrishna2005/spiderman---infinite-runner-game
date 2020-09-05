class SpiderMan extends BaseClass {
  constructor(x,y){
  if(height/20 >40){
    super(x,y,height/20,height/20);
  }else if(height/20 <40){
    super(x,y,50,50);
  }
    
    this.image = loadImage("SpiderMan.png");
  
    
  }
  
  
  display() {
    

    super.display();

    
     
   
  
  }
}
