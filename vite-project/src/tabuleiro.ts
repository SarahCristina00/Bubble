export default class Tabuleiro extends HTMLElement{

    constructor(){
        super()
        console.log("Criando tabuleiro do jogo");
    }

    indice: HTMLElement[] = []; //irá representar cada uma das posições do tabuleiro
    local: number[] = []; // irá representar a posição que a peça está posicionada
     i: number = 0; // determina o indice em que a peça está posicionada7
     
    
}