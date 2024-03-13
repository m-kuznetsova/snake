const screen = document.querySelector(".main__screen");
const again = document.querySelector(".main__button");

const controller = new InputController(screen);
const actionsList = actionsSettings.arr.map((data) => new Action(data, controller.onChange));
controller.bindActions(actionsList);
const keyboardPlugin = new KeyboardPlugin({onChange: controller.onPluginChange});
controller.registerPlugin(keyboardPlugin);
controller.attach(screen);
controller.setEnabled(true);
init();
snake.init(screen);
snake.draw();

function moving(e){
  if (controller.isActionActive("top")){
    if (snake.dX === 0) return; 
    snake.changeDirection(0, -1);
  }
  if ( controller.isActionActive("bottom")){
    if (snake.dX === 0) return; 
    snake.changeDirection(0, 1);
  }
  if (controller.isActionActive("left")){
    if (snake.dY === 0) return; 
    snake.changeDirection(-1, 0);
  }
  if (controller.isActionActive("right")){
    if (snake.dY === 0) return; 
    snake.changeDirection(1, 0);
  }
}

function drawGame() {
  fillAll();
  if (snake.isLose){
    snake.lose();
    again.classList.add("main__button_show");
  } else {
    snake.checkSnake();
    snake.checkWall();
    snake.draw();
    snake.move();
    snake.drawFood();
    snake.checkScore();
  }
  setTimeout(drawGame, 1000 / snake.getSpeed());
}

drawGame();

screen.addEventListener(controller.ACTION_ACTIVATED, moving, false);
screen.addEventListener(controller.ACTION_DEACTIVATED, () => {}, false);

function clickButton(){
  again.classList.remove("main__button_show");
  snake.startAgain();
}

again.addEventListener("click", clickButton);
// again.removeEventListener("click", clickButton);