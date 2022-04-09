const cardbox = document.querySelector(".card-box"); //localiza o card-box
const cardList = [] //lista de cards que serao embaralhados e distribuidos
const imgLista = [ //array de objetos mídia e nome dos cards
    { nome: "bob", img: 'bobrossparrot.gif' },
    { nome: "bob", img: 'bobrossparrot.gif' },
    { nome: "explody", img: 'explodyparrot.gif' },
    { nome: "explody", img: 'explodyparrot.gif' },
    { nome: "fiesta", img: 'fiestaparrot.gif' },
    { nome: "fiesta", img: 'fiestaparrot.gif' },
    { nome: "metal", img: 'metalparrot.gif' },
    { nome: "metal", img: 'metalparrot.gif' },
    { nome: "revertit", img: 'revertitparrot.gif' },
    { nome: "revertit", img: 'revertitparrot.gif' },
    { nome: "triplets", img: 'tripletsparrot.gif' },
    { nome: "triplets", img: 'tripletsparrot.gif' },
    { nome: "unicorn", img: 'unicornparrot.gif' },
    { nome: "unicorn", img: 'unicornparrot.gif' },
];


let jogadas = 0; //numero de clicks/jogadas
let click1; //valor do click1
let click2; //valor do click2
let acertos = 0;









let qtd = prompt("Com quantas cartas deseja jogar? Escolha de 4 a 14"); //pergunta qtd cartas a jogar

while (qtd % 2 !== 0 || qtd < 4 || qtd > 14) { //impede que seja impar, <4 e >14
    qtd = prompt("Com quantas cartas deseja jogar? Escolha de 4 a 14");
}
if (qtd % 2 == 0 || qtd >= 4 || qtd <= 14) {
    qtdCard(); //cria array com a qtd carta escolhidas
    arrangeCard();
}

function qtdCard() {
    for (let i = 0; i < (qtd); i++) {
        cardList.push(imgLista[i]) //envia as imgs pra array que distribui
    }
    cardList.sort(comparador) //embaralha a array de card selecionado
}

function arrangeCard() { //adiciona cards usando a segunda array
    for (let i = 0; i < (qtd); i++) {
        cardbox.innerHTML +=
            `<div class="card" onclick="pickCard(this)">
        <div class="front-face face">
            <img src="assets/front.png">
        </div>
        <div class="back-face face">
            <img src="assets/${cardList[i].img}" id="${cardList[i].nome}">
        </div>
    </div>`;
    }
}

//embaralhar
cardList.sort(comparador);
function comparador() {
    return Math.random() - 0.5;
}

//flipcard e manter virado
function flipCard(elemento) {
    elemento.children[0].classList.add("flip");
    elemento.children[1].classList.add("flip");
}


//comparar clicks pra manter virada ou desvirar e contar pontos


function pickCard(elemento) {
    flipCard(elemento);
    jogadas++;

    if (click1 === undefined) { //pegando carta 1
        click1 = elemento;
        
    } else if (click1 !== undefined && click2 === undefined) { //pegando carta2
        click2 = elemento;
        
    }

    if (click1.innerHTML == click2.innerHTML && click1 !== click2) {//testando se sao iguais
        acertos++;
        click1 = undefined;
        click2 = undefined;
        
    } else if (click1.innerHTML !== click2.innerHTML) {// caso sejam diferentes, virar e resetar
        setTimeout(function () {
            click1.children[0].classList.remove("flip");
            click1.children[1].classList.remove("flip");
            click2.children[0].classList.remove("flip");
            click2.children[1].classList.remove("flip");
            click1 = undefined;
            click2 = undefined;

        }, 1000)
    }
    setTimeout(endGame(), 1500)
}

function endGame () {
    if (acertos === (cardList.length/2)){
        setTimeout(function (){
        alert(`Você ganhou em ${jogadas} jogadas!`)
    }, 300)
}
}



