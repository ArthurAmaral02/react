'use client';
import { useState } from 'react';
import Dado from './Dado';

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);
  const [jogadorAtual, setJogadorAtual] = useState(1);
  const [dados, setDados] = useState({ j1: [1, 1], j2: [1, 1] });
  const [somas, setSomas] = useState({ j1: 2, j2: 2 });
  const [placar, setPlacar] = useState({ j1: 0, j2: 0 });
  const [resultadoRodada, setResultadoRodada] = useState('');
  const [fimDeJogo, setFimDeJogo] = useState(false);

  function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function jogar(jogador) {
    if (fimDeJogo) return;

    const novosDados = [rolarDado(), rolarDado()];
    const soma = novosDados[0] + novosDados[1];

    setDados((prev) => ({
      ...prev,
      [jogador === 1 ? 'j1' : 'j2']: novosDados
    }));

    setSomas((prev) => ({
      ...prev,
      [jogador === 1 ? 'j1' : 'j2']: soma
    }));

    if (jogador === 1) {
      setJogadorAtual(2);
    } else {
      finalizarRodada(soma);
    }
  }

  function finalizarRodada(somaJ2) {
    const somaJ1 = somas.j1;
    let novoPlacar = { ...placar };
    let diferenca = Math.abs(somaJ1 - somaJ2);

    if (somaJ1 > somaJ2) {
      setResultadoRodada(`Jogador 1 venceu por ${diferenca} ponto(s)`);
      novoPlacar.j1 += 1;
    } else if (somaJ2 > somaJ1) {
      setResultadoRodada(`Jogador 2 venceu por ${diferenca} ponto(s)`);
      novoPlacar.j2 += 1;
    } else {
      setResultadoRodada('Empate');
    }

    setPlacar(novoPlacar);

    if (rodada === 5) {
      setFimDeJogo(true);
      setJogadorAtual(null);
    } else {
      setRodada((r) => r + 1);
      setJogadorAtual(1);
    }
  }

  function reiniciar() {
    setRodada(1);
    setJogadorAtual(1);
    setDados({ j1: [1, 1], j2: [1, 1] });
    setSomas({ j1: 2, j2: 2 });
    setPlacar({ j1: 0, j2: 0 });
    setResultadoRodada('');
    setFimDeJogo(false);
  }

  let resultadoFinal = '';
  if (fimDeJogo) {
    if (placar.j1 > placar.j2) resultadoFinal = 'Jogador 1 venceu o jogo!';
    else if (placar.j2 > placar.j1) resultadoFinal = 'Jogador 2 venceu o jogo!';
    else resultadoFinal = 'Empate geral!';
  }

  return (
    <div className="container">
      <h1 className="titulo">🎲 Jogo de Dados</h1>

      <h2 className="rodada">Rodada: {rodada}</h2>

      <div className="placar">
        <h3>Placar</h3>
        <p>Jogador 1: {placar.j1}</p>
        <p>Jogador 2: {placar.j2}</p>
      </div>

      <div className="jogadores">
        <div className="card">
          <h3>Jogador 1</h3>
          <Dado valor={dados.j1[0]} />
          <Dado valor={dados.j1[1]} />
          <p>Soma: {somas.j1}</p>
          <button
            className="botao"
            disabled={jogadorAtual !== 1 || fimDeJogo}
            onClick={() => jogar(1)}
          >
            Jogar
          </button>
        </div>

        <div className="card">
          <h3>Jogador 2</h3>
          <Dado valor={dados.j2[0]} />
          <Dado valor={dados.j2[1]} />
          <p>Soma: {somas.j2}</p>
          <button
            className="botao"
            disabled={jogadorAtual !== 2 || fimDeJogo}
            onClick={() => jogar(2)}
          >
            Jogar
          </button>
        </div>
      </div>

      <div className="resultado">{resultadoRodada}</div>

      {fimDeJogo && (
        <div>
          <h2>{resultadoFinal}</h2>
          <button className="botao" onClick={reiniciar}>
            Jogar Novamente
          </button>
        </div>
      )}
    </div>
  );
}
