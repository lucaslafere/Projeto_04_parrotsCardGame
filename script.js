const cardbox = document.querySelector(".card-box"); //localiza o card-box
const card = document.querySelector(".card");
const cardList = [];
const imgLista = [
'bobrossparrot.gif',
'bobrossparrot.gif',
'explodyparrot.gif',
'explodyparrot.gif',
'fiestaparrot.gif', 
'fiestaparrot.gif', 
'metalparrot.gif',
'metalparrot.gif',
'revertitparrot.gif',
'revertitparrot.gif',
'tripletsparrot.gif',
'tripletsparrot.gif',
'unicornparrot.gif',
'unicornparrot.gif'];

//fazer um splice nessa lista resolve? divide depois embaralha, sla?

let qtd = prompt("Com quantas cartas deseja jogar?"); //pergunta qtd cartas a jogar

while (qtd % 2 !== 0 || qtd < 4 || qtd > 14) { //impede que seja impar, <4 e >14
    qtd = prompt("Com quantas cartas deseja jogar?");
}
if (qtd % 2 == 0 || qtd >= 4 || qtd <= 14){
    qtdCard(); //executa distribuiçao das cartas
}

function qtdCard () {

    for(let i = 0; i < (qtd); i++){
        cardbox.innerHTML += `<div class="card">
        <img src="assets/front.png" alt="front-parrot" class="front">
        <img src="assets/${imgLista[i]}" alt="" class="back">
    </div>`;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

//vou ignorar tudo de cima, ja da pra distribuir "aleatoriamente"
//mas ainda nao embaralha. Porem vem em pares, e sempre diferentes.
//ajeito depois dessa parte de cima
