"use client";

import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className={styles.container1}>
      <div className={styles.container2}></div>

      <div className={styles.divprincipal1}>
        <img
          className={styles.foto_minha}
          src="foto_minha.png"
          alt="uma foto minha"
        />

        <hr className={styles.linha} />

        <h1 className={styles.fast}>⚪ ▶ fastfetch </h1>

        <p className={styles.texto1}>
          <b>Name:</b><br /> Arthur Amaral de Souza<br />
          <b>Age:</b> <br /> 20<br />
          <b>Education:</b> <br /> Science Computer<br />
          Universidade Catolica<br /> de Pernambuco<br />
        </p>
      </div>

      <div className={styles.divprincipal4}>
        <p className={styles.p1}>
          Sou estudante de <span className={styles.destaque}>Ciência da Computação</span> na{" "}
          <span className={styles.destaque}>Universidade Católica de Pernambuco</span>, 
          onde venho construindo não apenas uma{" "}
          <span className={styles.destaque}>base técnica sólida</span>, mas também desenvolvendo{" "}
          <span className={styles.destaque}>habilidades interpessoais importantes</span>.
          
          <br /><br />

          Atualmente, participo de um{" "}
          <span className={styles.destaque}>projeto de iniciação científica</span>, 
          experiência enriquecedora.

          <br /><br />

          No campo técnico, possuo experiência com{" "}
          <span className={styles.destaque}>C, Python e Java</span>, além de{" "}
          <span className={styles.destaque}>React, Next.js e MySQL</span>.
        </p>
      </div>

      <div className={styles.repos}>
        <img className={styles.git_logo1} src="git_logo.png" alt="logo git" />

        <a
          className={styles.link_principal}
          href="https://github.com/ArthurAmaral02"
          target="_blank"
          rel="noopener noreferrer"
        >
          My links to GitHub
        </a>
      </div>

      <div id="forca" className={styles.divprincipal3}>
        <Forca />
      </div>
    </div>
  );
}

// 🎮 JOGO DA FORCA
function Forca() {
  const palavras = ["react", "javascript", "computador", "programacao"];

  const [palavra, setPalavra] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);

  useEffect(() => {
    const aleatoria =
      palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(aleatoria);
  }, []);

  function tentarLetra(letra) {
    if (
      letrasCorretas.includes(letra) ||
      letrasErradas.includes(letra)
    ) return;

    if (palavra.includes(letra)) {
      setLetrasCorretas([...letrasCorretas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
    }
  }

  const venceu =
    palavra &&
    palavra.split("").every((l) => letrasCorretas.includes(l));

  const perdeu = letrasErradas.length >= 6;

  // 🔑 evita erro de hydration
  if (!palavra) return null;

  return (
    <div className={styles.forca}>
      <h2>Jogo da Forca</h2>

      <p className={styles.palavra}>
        {palavra.split("").map((letra, i) => (
          <span key={i}>
            {letrasCorretas.includes(letra) || perdeu ? letra : "_"}
          </span>
        ))}
      </p>

      <p className={styles.erros}>
        Erros: {letrasErradas.join(", ")}
      </p>

      <div className={styles.teclado}>
        {"abcdefghijklmnopqrstuvwxyz".split("").map((letra) => (
          <button
            key={letra}
            onClick={() => tentarLetra(letra)}
            disabled={
              letrasCorretas.includes(letra) ||
              letrasErradas.includes(letra) ||
              venceu ||
              perdeu
            }
          >
            {letra}
          </button>
        ))}
      </div>

      {venceu && <h3>🎉 Você venceu!</h3>}
      {perdeu && <h3>💀 Você perdeu! Palavra: {palavra}</h3>}
    </div>
  );
}