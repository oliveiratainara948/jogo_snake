// criar elemento que irá rodar o jogo 
let canvas =  document.getElementById(" snake")
let context = canvas.getContext("2d")
let box = 32;

let snake = [];

//incio cobrinha
snake [0] =[
    x: 8 * box,
    y: 8 * box,
]