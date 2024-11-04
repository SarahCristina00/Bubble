export default class Pecas {
    forma: { x: number; y: number }[];
    cor: string;

    constructor(forma: { x: number; y: number }[], cor: string) {
        this.forma = forma;
        this.cor = cor;
    }
}


export const pecasExistentes = [
    new Pecas([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }], "red"), 
    new Pecas([{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }], "yellow"), 
    new Pecas([{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }], "blue"), 
    new Pecas([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 1 }], "green") 
];