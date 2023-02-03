//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis das raquetes
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis minha raquete
let xMinhaRaquete = 5;
let yMinhaRaquete = 150;

//variaveis minha raquete
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;


//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let colidiu = false;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xMinhaRaquete, yMinhaRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xMinhaRaquete, yMinhaRaquete);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

 function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, 
      raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(87)){
    yMinhaRaquete -= 10;
  }
  if (keyIsDown(83)){
    yMinhaRaquete += 10;
  }
}



function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
  
}

function movimentaRaqueteOponente(){
  /*velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 50;
  yRaqueteOponente += velocidadeYOponente*/
  if (keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  }
}

function incluiPlacar(){
  stroke(255)
  textSize(20)
  textAlign(CENTER)
  fill(color(0, 0, 255))
  rect(150,8, 40, 20)
  fill(255)
  text(meusPontos, 170, 26)
  fill(color(0, 0, 255))
  rect (450, 8, 40, 20)
  fill(255)
  text(pontosOponente, 470, 26)
  
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if(xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
  
}
