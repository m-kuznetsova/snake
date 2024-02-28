const snake = {
  screen,
  arr: [
    {
      x: 280, 
      y: 480,
    }, 
    {
      x: 280, 
      y: 500,
    },     
    {
      x: 280, 
      y: 520,
    },     
    {
      x: 280, 
      y: 540,
    },     
    {
      x: 280, 
      y: 560,
    }
  ],
  width: 20,
  speed: 1,
  color: "#6fff8f",
  dY: -1,
  dX: 0,
  foodX: 280,
  foodY: this.width,


  init(screen){
    this.screen = screen;
    this.createFood();
  },

  draw(){
    this.arr.forEach(({x, y}) => {
      drawRect(x, y, this.width, this.width, this.color);
    })
  },

  move(){
    const head = {x: this.arr[0].x + this.dX * this.width, y: this.arr[0].y + this.dY * this.width};
    this.arr.unshift(head);
    const getFood = this.arr[0].x === this.foodX && this.arr[0].y === this.foodY;
    if (getFood){
      this.createFood();
      this.speed++;
    } else {
      this.arr.pop();
    }
  },

  randomFromRange(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  },

  createFood(){
    this.foodX = this.randomFromRange(1, (this.screen.offsetWidth / this.width) - 2) * this.width;
    this.foodY = this.randomFromRange(1, (this.screen.offsetWidth / this.width) - 2) * this.width;
    this.arr.forEach(function isGetFood(item) {
      const getFood = item.x == this.foodX && item.y == this.foodY;
      if (getFood) createFood();
    });
    // console.log(this.foodX, this.foodX)
  },

  drawFood(){
    // console.log("2 ", this.foodX, this.foodX)
    drawRect(this.foodX, this.foodY, this.width, this.width, "#ff0000");
  },

  changeDirection(x, y){
    this.dY = y;
    this.dX = x;
  },

  checkScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Score: " + (this.arr.length - 5), this.screen.offsetWidth - 100, 30);
  },

  getSpeed(){
    return this.speed;
  }
}