// 
// Blackjack
//

let naipes = [
    "Copas", "Espadas", "Paus", "Ouros"
];

let valores = [
    "Ás", "Rei", "Dama", "Valete", "Dez", "Nove", "Oito",
    "Sete", "Seis", "Cinco", "Quatro", "Três", "Dois"
];

function criarBaralho(){

    let baralho = [];

    for (let iNaipes = 0 ; iNaipes < naipes.length ; iNaipes++){

        for (let iValores = 0 ; iValores < valores.length ; iValores++){

            let carta = {
                valor: valores[iValores],
                naipe: naipes[iNaipes]
            };

            baralho.push(carta);
        }

    }

    return baralho;
}

let baralhoCriado = criarBaralho();

function gerarStringCarta(carta){
    return carta.valor + " de " + carta.naipe;
}

function proximaCarta(){
    return baralhoCriado.shift();
}

let cartasJogador = [
    proximaCarta(),
    proximaCarta()
];

console.log("Bem-vindo ao Blackjack!");

console.log("Você recebeu: ");
console.log( " " + gerarStringCarta(cartasJogador[0]) );
console.log(" " + gerarStringCarta(cartasJogador[1]) );


