import Pecas, { pecasExistentes } from "./pecas.ts";

export default class Tabuleiro extends HTMLElement {
  quadro: HTMLElement[] = [];
  posiciona: HTMLElement;
  seleciona: HTMLElement;
  atual: Pecas | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot!.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
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
                }
                .seleciona {
                    margin-top: 20px;
                    display: grid;
                    grid-template-columns: repeat(3, 60px); 
                    gap: 10px; 
                }
                .botao-rotacao {
                    margin-top: 10px;
                    padding: 10px;
                    background-color: #803296;
                    color: white;
                    cursor: pointer;
                    text-align: center;
                }
            </style>
            <div class="grade"></div>
            <div class="seleciona"></div>
            <div class="botao-rotacao">Rotacionar Peça</div>
        `;

    this.posiciona = this.shadowRoot!.querySelector(".grade")!;
    this.seleciona = this.shadowRoot!.querySelector(".seleciona")!;
    const botaoRotacao = this.shadowRoot!.querySelector(".botao-rotacao")!;
    botaoRotacao.addEventListener("click", () => this.rotacionarPeca());

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
    console.log(`Selecionada: Peça com cor ${pc.cor}`);
  }

  selecaoPecas(): void {
    pecasExistentes.forEach((pc) => {
      const divPeca = this.criarElementoPeca(pc);
      divPeca.addEventListener("click", () => this.selecionarPecas(pc));
      this.seleciona.appendChild(divPeca);
    });
  }

  criarElementoPeca(pc: Pecas): HTMLElement {
    const container = document.createElement("div");
    container.style.position = "relative";
    container.style.width = "50px";
    container.style.height = "50px";

    pc.forma.forEach((block) => {
      const bloco = document.createElement("div");
      bloco.style.position = "absolute";
      bloco.style.width = "20px"; 
      bloco.style.height = "20px";
      bloco.style.backgroundColor = pc.cor;
      bloco.style.left = `${block.x * 20}px`;
      bloco.style.top = `${block.y * 20}px`;
      container.appendChild(bloco);
    });

    return container;
  }

  posicionarPecas(inicio: number): void {
    if (!this.atual) return;

    this.atual.forma.forEach((block) => {
      const index = inicio + block.y * 11 + block.x;
      if (index >= 0 && index < this.quadro.length) {
        const elemento = this.quadro[index];

        if (!elemento.classList.contains("inserida")) {
          elemento.classList.add("inserida");
          elemento.style.backgroundColor = this.atual.cor;

          elemento.addEventListener("click", () => {
            elemento.classList.remove("inserida");
            elemento.style.backgroundColor = "#803296";
          });
        }
      }
    });

    this.atual = null;
  }

  rotacionarPeca(): void {
    if (!this.atual) return;

    this.atual.forma = this.atual.forma.map((block) => {
      return { x: -block.y, y: block.x };
    });

    this.seleciona.innerHTML = "";
    this.selecaoPecas();
  }
}

customElements.define("tabuleiro-jogo", Tabuleiro);
