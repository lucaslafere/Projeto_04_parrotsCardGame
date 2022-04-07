const cardbox = document.querySelector(".card-box"); //localiza o card-box
const card = document.querySelector(".card");
const cardList = [];
const imgLista = [
'assets/bobrossparrot.gif',
'assets/explodyparrot.gif',
'assets/fiestaparrot.gif', 
'assets/metalparrot.gif',
'assets/reveritparrot.gif',
'assets/tripletsparrot.gif',
'assets/unicornparrot.gif'];

let qtd = prompt("Com quantas cartas deseja jogar?"); //pergunta qtd cartas a jogar

while (qtd % 2 !== 0 || qtd < 4 || qtd > 14) { //impede que seja impar, <4 e >14
    qtd = prompt("Com quantas cartas deseja jogar?");
}
if (qtd % 2 == 0 || qtd >= 4 || qtd <= 14){
    qtdCard();
}

function qtdCard () {
    for(let i = 0; i < qtd; i++){
        cardbox.innerHTML += `<div class="card">
        <img src="assets/front.png" alt="front-parrot" class="front">
        <img src="/assets/${imgLista[0,i]}" alt="" class="back">
    </div>`;
    cardList.push(i);
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}


cardList.sort(comparador); 





// function addImage () { //teste que deu errado
   

//     card2.setAttribute("src", imgLista[6])
// }

