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
         line-height: 50px;"
         width: 50px;
         height: 50px;>
         ${this.forma}
    

         </div>
     ` ;
     return template;
     }
};

export const pecasExistentes=[
    new Pecas('1', 'red'),
   new Pecas('2', 'yellow'),
   new Pecas('3', 'blue'),
   new Pecas('4', 'green'),
    new Pecas('5', 'white')
 ]
