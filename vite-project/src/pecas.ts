export default class Pecas {

    forma: string;
    cor: string;

    constructor(forma: string, cor: string){
        this.forma = forma;
        this.cor = cor;

    }
    desenhar(): string{

        const template = `
         <div class= "peca"
         style = "background-color: ${this.cor};
         text-align: center;
         line-height: 50px;">
         ${this.forma}
         </div>
     `;
     return template;
     }
};
