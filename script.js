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
    qtdCard();
}

function qtdCard () {
    for(let i = 0; i < qtd; i++){
        cardbox.innerHTML += `<div class="card">
        <img src="assets/front.png" alt="front-parrot" class="front">
        <img src="assets/${imgLista[i]}" alt="" class="back">
    </div>`;
    cardList.push(i);
    }
}

// Após esta linha, a minhaArray estará embaralhada
cardList.sort(comparador);
imgLista.sort(comparador);

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}
