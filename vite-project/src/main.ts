import Tabuleiro from './tabuleiro.ts';

if (!document.querySelector('tabuleiro-jogo')) {
    const tabuleiro = new Tabuleiro();
    document.body.appendChild(tabuleiro);
}