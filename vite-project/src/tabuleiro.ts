import Pecas, { pecasExistentes } from "./pecas.ts";

export default class Tabuleiro extends HTMLElement {
  quadro: HTMLElement[] = [];
  posiciona: HTMLElement;
  seleciona: HTMLElement;
  atual: Pecas | null = null; 

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
                background-color: #FFFF;
            }
            .grade div {
                width: 50px;
                height: 50px;
                background-color: #803296;
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

    this.posiciona = this.shadowRoot!.querySelector(".grade")!;
    this.seleciona = this.shadowRoot!.querySelector(".seleciona")!;

    this.criaTabuleiro();
    this.selecaoPecas();
  }

  criaTabuleiro(): void {
    for (let n = 0; n < 55; n++) {
      const quadro = document.createElement("div");
     quadro.addEventListener("click", () => this.posicionarPecas(n));
      this.posiciona.appendChild(quadro);
      this.quadro.push(quadro);
    }
  }

  selecionarPecas(pc: Pecas): void {
    this.atual = pc;
    console.log(`Selecionada: ${pc.forma}`);
  }

  selecaoPecas(): void {
    pecasExistentes.forEach((pc) => {
      const divPeca = document.createElement("div");
      divPeca.innerHTML = pc.desenhar();
      divPeca.addEventListener("click", () => this.selecionarPecas(pc));
      this.seleciona.appendChild(divPeca);
    });
  }

  posicionarPecas(inicio: number): void {
    const elemento = this.quadro[inicio];

    if (this.atual) {
      if (!elemento.classList.contains("inserida")) {
        elemento.classList.add("inserida");
        elemento.innerHTML = this.atual.desenhar();

        elemento.addEventListener("click", () => {
          elemento.classList.remove("inserida");
          elemento.innerHTML = "";
        });

        this.atual = null;
      }
    } else if (elemento.classList.contains("inserida")) {
      elemento.classList.remove("inserida");
      elemento.innerHTML = "";
    }
  }
}

customElements.define("tabuleiro-jogo", Tabuleiro);
