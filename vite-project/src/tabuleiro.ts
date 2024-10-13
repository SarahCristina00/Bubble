export default class Tabuleiro extends HTMLElement {
    indice: HTMLElement[] = []; // irá representar cada uma das posições do tabuleiro
    local: number[] = []; // irá representar a posição que a peça está posicionada
    i: number = 0; // determina o índice em que a peça está posicionada
    posiciona: HTMLElement; // permite alterar a posição da peça no tabuleiro
    seleciona: HTMLElement; // permite que o usuário selecione a posição que deseja por a peça no tabuleiro

    constructor() {
        super();
        console.log("Criando tabuleiro do jogo");
        this.attachShadow({ mode: "open" });

        this.shadowRoot!.innerHTML = `
        <style>
            .grade {
                display: grid;
                grid-template-columns: repeat(11, 50px);
                grid-template-rows: repeat(5, 50px);
                gap: 1px;
                background-color: #333;
                border: 2px solid #fff;
            }
            .grade div {
                width: 50px;
                height: 50px;
                background-color: #000;
            }
            .seleciona {
                margin-top: 20px;
                display: grid;
                grid-template-columns: repeat(3, 50px);
                gap: 1px;
            }
            .peca {
                background-color: orange;
            }
            .inserida {
                background-color: blue;
            }
        </style>
        <div class="grade"></div>
        <div class="seleciona"></div>
        `;


        this.posiciona = this.shadowRoot!.querySelector('.grade')!;
        this.seleciona = this.shadowRoot!.querySelector('.seleciona')!;

        this.criaTabuleiro();
    }

    criaTabuleiro(): void {
        // A quantidade de posições é 55, pois usei como exemplo uma imagem de um tabuleiro com 5 linhas e 11 colunas (5x11)
        for (let n = 0; n < 55; n++) {
            const indice = document.createElement('div');
            this.posiciona.appendChild(indice);
            this.indice.push(indice);
        }
    }
}
customElements.define('Tabuleiro', Tabuleiro);
