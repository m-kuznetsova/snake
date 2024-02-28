
let _renderer = (function() {
  return window.requestAnimationFrame ||

  function(callback) {
    setTimeout(callback, 1000 / 60);
  };

})();

let _engine = function(){
  log('игр.ц.не иниц.')
};

let startGame = function(game){
  if (typeof game == 'function'){
    _engine = game;
  };
  gameLoop();
};

let setGame = function(game){
  if (typeof game == 'function'){
    _engine = game;
  };
}

let gameLoop = function(){
  _engine();
  _renderer(gameLoop);
}

let gameOver = function(){
  _engine = function(){
  }
}