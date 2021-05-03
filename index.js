// Add your Circle class here

class Circle{
  constructor(radius){
    this.radius = radius;
  }
  
  get diameter{
    return this.radius * 2
  }
  get circumference{
    return  π * this.diameter
  }
  get area {
   return π * this.radius2
  }
  
}