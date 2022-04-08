const cardbox = document.querySelector(".card-box"); //localiza o card-box
const cardList = []
const imgLista = [
{ nome: "bob", img: 'bobrossparrot.gif'},
{ nome: "bob", img: 'bobrossparrot.gif'},
{ nome: "explody", img: 'explodyparrot.gif'},
{ nome: "explody", img: 'explodyparrot.gif'},
{ nome: "fiesta", img: 'fiestaparrot.gif'},
{ nome: "fiesta", img: 'fiestaparrot.gif'},
{ nome: "metal", img: 'metalparrot.gif'},
{ nome: "metal", img: 'metalparrot.gif'},
{ nome: "revertit", img: 'revertitparrot.gif'},
{ nome: "revertit", img: 'revertitparrot.gif'},
{ nome: "triplets", img: 'tripletsparrot.gif'},
{ nome: "triplets", img: 'tripletsparrot.gif'},
{ nome: "unicorn", img: 'unicornparrot.gif'},
{ nome: "unicorn", img: 'unicornparrot.gif'},
];

//fazer um splice nessa lista resolve? divide depois embaralha, sla?

let qtd = prompt("Com quantas cartas deseja jogar?"); //pergunta qtd cartas a jogar

while (qtd % 2 !== 0 || qtd < 4 || qtd > 14) { //impede que seja impar, <4 e >14
    qtd = prompt("Com quantas cartas deseja jogar?");
}
if (qtd % 2 == 0 || qtd >= 4 || qtd <= 14){
    qtdCard(); //cria array com a qtd carta escolhidas
    pickCard();
}

function qtdCard () {
    for(let i = 0; i < (qtd); i++){
    cardList.push(imgLista[i])
    }
    cardList.sort(comparador)
}

function pickCard (){
    for(let i = 0; i < (qtd); i++){
        cardbox.innerHTML += `<div class="card">
        <img src="assets/front.png" alt="front-parrot" class="front">
        <img src="assets/${cardList[i].img}" alt="" class="back" id="${cardList[i].nome}">
    </div>`;
}
}


cardList.sort(comparador);
function comparador() { 
	return Math.random() - 0.5; 
}

