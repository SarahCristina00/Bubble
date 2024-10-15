import Pecas, { pecasExistentes } from './pecas.ts';

export default class Tabuleiro extends HTMLElement {
    indice: HTMLElement[] = [];
    posiciona: HTMLElement;
    seleciona: HTMLElement;
    pecaAtual: Pecas | null = null;

    constructor() {
        super();
        console.log("Criando tabuleiro do jogo");
        this.attachShadow({ mode: "open" });

        this.shadowRoot!.innerHTML = `
        <style>
            :host {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
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
                background-color: #DB2DF7;
                align: center;
            }
            .seleciona {
                margin-top: 20px;
                display: grid;
                grid-template-columns: repeat(3, 50px);
                gap: 1px;
            }
        </style>
        <div class="grade"></div>
        <div class="seleciona"></div>
        `;

        this.posiciona = this.shadowRoot!.querySelector('.grade')!;
        this.seleciona = this.shadowRoot!.querySelector('.seleciona')!;

        this.criaTabuleiro();
        this.selecaoPecas();
    }

    criaTabuleiro(): void {
        for (let n = 0; n < 55; n++) {
            const indice = document.createElement('div');
            indice.addEventListener('click', () => this.posicionarPecas(n));
            this.posiciona.appendChild(indice);
            this.indice.push(indice);
        }
    }

    selecionarPecas(pc: Pecas): void {
        this.pecaAtual = pc;
        console.log(`Selecionada: ${pc.forma}`);
    }

    selecaoPecas(): void {
        pecasExistentes.forEach(pc => {
            const divPeça = document.createElement('div');
            divPeça.innerHTML = pc.desenhar();
            divPeça.addEventListener('click', () => this.selecionarPecas(pc));
            this.seleciona.appendChild(divPeça);
        });
    }

    posicionarPecas(inicio: number): void {
        const elemento = this.indice[inicio];
        
        if (this.pecaAtual) {
            if (!elemento.classList.contains("inserida")) {
                elemento.classList.add("inserida");
                elemento.innerHTML = this.pecaAtual.desenhar();
                
                
                elemento.addEventListener('click', () => {
                    elemento.classList.remove("inserida");
                    elemento.innerHTML = '';
                });
                
                this.pecaAtual = null;
            }
        } else 
            if (elemento.classList.contains("inserida")) {
    
            elemento.classList.remove("inserida");
            elemento.innerHTML = '';
        }
    }
}

customElements.define('tabuleiro-jogo', Tabuleiro);
