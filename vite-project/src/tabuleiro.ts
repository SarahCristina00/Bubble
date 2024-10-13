export default class Tabuleiro extends HTMLElement{
    
    constructor(){
        super()
        console.log("Criando tabuleiro do jogo");
        this.attachShadow({mode:"open"});
    }

    indice: HTMLElement[] = []; //irá representar cada uma das posições do tabuleiro
    local: number[] = []; // irá representar a posição que a peça está posicionada
     i: number = 0; // determina o indice em que a peça está posicionada
    posiciona = HTMLElement; //permite alterar a posição da peça no tabuleiro

     
    
}

function criaTabuleiro(): void{
    //a quantidade de posições é 55, pois usei como exemplo uma imagem de um tabuleiro com 5 linhas e 11 colunas (5x11)
    for( let n = 0; n<55; n++){
        const indice = document.createElement('indice');
        this.posiciona.appendChild(indice);
        this.indice.push(indice);
    }
}