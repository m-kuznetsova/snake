let canvas, ctx, width, heigth; 

let init = function(){
  canvas = document.getElementById("gameCanvas");
  height = 600;
  width = 600;
  canvas.height = height;
  canvas.width = width;
  ctx = canvas.getContext('2d');  
};

let fillAll = function(color){
  ctx.fillStyle = color ? color : "#ffffff";
  ctx.fillRect(0, 0, width, height)
};

let clearAll = function(){
  ctx.clearRect(0, 0, width, height);
  canvas.style.backgroundImage = '#ffffff';
};

let drawRect = function(x, y, w, h, color){
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};

let drawCircle = function(x, y, r, color){
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.fill();
};

let drawImage = function(x, y, w, h, file){
  let image = document.getElementById(file);
  ctx.drawImage(image, x, y, w, h);
};