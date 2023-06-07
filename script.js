// criar elemento que irá rodar o jogo 
let canvas =  document.getElementById("gamesnake")
let context = canvas.getContext("2d")
let box = 32;

let snake = [];

//incio cobrinha
snake [0] =[
    x, 8 * box,
    y, 8 * box,
]

// Direção 
let direction = "right";

//Comida 
let food ={
    x: Math. floor(Math.random() *15 + 1 ) * box,
    y: Math. floor(Math.random() *15 + 1 ) * box,
}
// Função para criar o Backgroud
function criarBG(){
    context.fillStyle =  "lightgreen" ;
    // Desenha o retângulo usado x e y e a largura e altura setadas
    context.fillRect(0, 0, 16 * box, 16 * box);
}
// Função para criar a cobrinha 
function criarCobrinha () {
    for(i = 0; i < snake.length; i++) {
        context.fillStyle =  "green" ;
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
// Função para desenhar a comida 
function drawFood () {
    context.fillStyle = "red";
    context.fillStyle(food.x,food.y,box,box);
}
// Quando um evento acontece, detecta e chama a função update
document.addEventListener('keydown', update);

function update(event){
   if(event.keyCode == 37 && diferection !== 'right') diferection = 'left';
   if(event.keyCode == 38 && diferection !== 'right') diferection = 'up';
   if(event.keyCode == 39 && diferection !== 'right') diferection = 'right';
   if(event.keyCode == 40 && diferection !== 'right') diferection = 'down';
}
// Função Principal 
function iniciarJogo(){
    if(snake[0].x > 15*box && direction == "right"){
        snake[0].x = 0;
    }
    if(snake[0].x > 0*box && direction == "right"){
        snake[0].x = 16 * box;
    }
    if(snake[0].x > 15*box && direction == "right"){
        snake[0].x = 0;
    }
    if(snake[0].x > 0*box && direction == "right"){
        snake[0].x = 16 * box;
    }
    for(i = 1; i <snake.length; i++){
        if(snake[0].x == snake[i].x && snale[0].y == snake[i].y){
            clearInterval(jgo);
            alert('Game Over :(');
        }
    }
    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if(diferection == "right") snakeX += box;
    if(diferection == "left") snakeX += box;
    if(diferection == "up") snakeY += box;
    if(diferection == "down") snakeY += box;
    if(snakeX !=food.x || snakeY !=food.y){
        snake.pop(); //pop tira o último elemento da lista
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }
      let newHead = {
        x: snakeX
        y: snakeY
      }
      //método unshift adiciona como 
      //primeiro quadrinho da cobrinha 
      snake.unshift(newHead)
}
let jogo = setInterval(iniciarJogo, 1000);