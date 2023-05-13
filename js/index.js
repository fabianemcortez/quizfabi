const startButton = document.querySelector("#btnPrimary");
const questionDiv = document.querySelector("#question");
const homeScreen = document.querySelector("#homeScreen");
const resultDiv = document.querySelector("#result");
const geralQuestion = document.querySelector("#geralQuestion");
const imgQuestion = document.querySelector("#img");
const op1 = document.querySelector("#op1");
const op2 = document.querySelector("#op2");
const op3 = document.querySelector("#op3");
const op4 = document.querySelector("#op4");
const nextButton = document.querySelector("#next");
const resultTxt = document.querySelector("#resultTxt");

let question1 = {
  pergunta: "Quem pintou “O grito”?",
  op1: "Tarsila do Amaral",
  op2: "Di Cavalcanti",
  op3: "Monet",
  op4: "Vincent van Gogh",
  resposta: "Monet",
  img: "./imgs/foto1.png",
};

let question2 = {
  pergunta: "Quem esculpiu “Davi”?”",
  op1: "Francisco Brennand",
  op2: "Alexander Calder",
  op3: "Fernando Botero",
  op4: "Michelangelo Buonarroti",
  resposta: "Michelangelo Buonarroti",
  img: "./imgs/foto2.png",
};

let question3 = {
  pergunta: "Quem pintou “Judite Decapitando Holofernes”?”",
  op1: "Aleijadinho",
  op2: "Johannes Vermeer",
  op3: "Artemisia Gentileschi",
  op4: "Caravaggio",
  resposta: "Artemisia Gentileschi",
  img: "./imgs/foto3.png",
};


//aqui eu guardo minahs perguntas
const questions = [question1, question2, question3];

//Capturar o botão start
//Colocar um addEventListener no botão de começar
//Denrtro desse addEventListener -> apagar homeScreen mostrar div de pergunras

startButton.addEventListener("click", () => {
  homeScreen.classList.add("hide");
  homeScreen.classList.remove("show");
  questionDiv.classList.remove("hide");

  startGame();
});

let index = 0;
let points = 0;

function startGame() {
  geralQuestion.innerText = questions[index].pergunta;

  op1.classList.remove("btn-rigth", "btn-wrong");
  op2.classList.remove("btn-rigth", "btn-wrong");
  op3.classList.remove("btn-rigth", "btn-wrong");
  op4.classList.remove("btn-rigth", "btn-wrong");
  
  op1.innerText = questions[index].op1;
  op2.innerText = questions[index].op2;
  op3.innerText = questions[index].op3;
  op4.innerText = questions[index].op4;

  img.setAttribute("src", questions[index].img);
}

op1.addEventListener("click", () => {
  console.log("Cliquei na primeira opção");
  verificarResposta(op1.innerText);
  const result = verificarResposta(op1.innerText);
  console.log(result);

  if (result === true) {
    op1.classList.add("btn-rigth");
  }
  if (result === false) {
    op1.classList.add("btn-wrong");
  }
});

op2.addEventListener("click", () => {
  console.log("Cliquei na segunda opção");
  const result = verificarResposta(op2.innerText);
  console.log(result);

  if (result === true) {
    op2.classList.add("btn-rigth");
  }
  if (result === false) {
    op2.classList.add("btn-wrong");
  }
});

op3.addEventListener("click", () => {
  console.log("Cliquei na terceira opção");
  const result = verificarResposta(op3.innerText);
  console.log(result);

  if (result === true) {
    op3.classList.add("btn-rigth");
  }
  if (result === false) {
    op3.classList.add("btn-wrong");
  }
});

op4.addEventListener("click", () => {
  console.log("Cliquei na quarta opção");
  const result = verificarResposta(op4.innerText);
  console.log(result);

  if (result === true) {
    op4.classList.add("btn-rigth");
  }
  if (result === false) {
    op4.classList.add("btn-wrong");
  }
});

function verificarResposta(respostaSelecionada) {
  if (respostaSelecionada === questions[index].resposta) {
    //Aqui é o que vai acontecer se a resposta for correta
    console.log("Resposta Correta");
    nextButton.classList.remove("hide");
    points++;
    return true;
  } else {
    //Aqui é o que vai acontecer se a resposta for errada
    console.log("Resposta errada");
    nextButton.classList.remove("hide");
    return false;
  }
}

nextButton.addEventListener("click", () => {
  console.log(points);
  //Esse if confere se estamos na última pergunta
  if (index === 2) {
    console.log("Acabou");
    questionDiv.classList.add("hide");
    resultDiv.classList.remove("hide");
    if (points === 0) {
      resultTxt.innerText = `Você marcou ${points} ponto, continue estudando`;
    }
    if (points === 1) {
      resultTxt.innerText = `Você marcou ${points} ponto, continue estudando`;
    }
    if (points === 2) {
      resultTxt.innerText = `Você marcou ${points} pontos, parabéns`;
    }
    if (points === 3) {
      resultTxt.innerText = `Você marcou ${points} pontos, arrasou!!❤️❤️`;
    }

    return;
  }

  //Trocar a pergunta
  index++;
  startGame();
});

//estrutura da minha pergunta
//fazer estelização das perguntas
//QUANDO CLICAR NO BOTAO COMCAR APAGAR A HOMESCREEN
