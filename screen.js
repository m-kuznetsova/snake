const screen = document.querySelector(".main__screen");

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
  snake.draw();
  snake.move();
  snake.drawFood();
  snake.checkScore();
  setTimeout(drawGame, 1000 / snake.getSpeed());
}

drawGame();

screen.addEventListener(controller.ACTION_ACTIVATED, moving, false);
screen.addEventListener(controller.ACTION_DEACTIVATED, () => {}, false);