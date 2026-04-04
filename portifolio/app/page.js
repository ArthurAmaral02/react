"use client";

import styles from "./page.module.css";
import { useState } from "react";

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
      <div className={styles.divprincipal3}>
          <p className={styles.p1}>
            Sou estudante de <span className={styles.destaque}>Ciência da Computação</span> na{" "}
            <span className={styles.destaque}>Universidade Católica de Pernambuco</span>, 
            onde venho construindo não apenas uma{" "}
            <span className={styles.destaque}>base técnica sólida</span>, mas também desenvolvendo{" "}
            <span className={styles.destaque}>habilidades interpessoais importantes</span> 
            para o trabalho em equipe e para o ambiente profissional. 
            Considero-me uma pessoa <span className={styles.destaque}>sociável</span>, 
            com facilidade de <span className={styles.destaque}>comunicação e colaboração</span>, 
            sempre buscando aprender com as pessoas ao meu redor. 
            Minha principal motivação é o <span className={styles.destaque}>desejo constante de evoluir</span>, 
            tanto no âmbito acadêmico quanto pessoal.
            
            <br /><br />

            Atualmente, participo de um{" "}
            <span className={styles.destaque}>projeto de iniciação científica</span>, 
            experiência que tem sido extremamente{" "}
            <span className={styles.destaque}>enriquecedora</span> e prazerosa. 
            Além de ampliar meus conhecimentos, esse projeto tem me proporcionado contato com{" "}
            <span className={styles.destaque}>novas ideias, metodologias e desafios</span>, 
            tornando o processo de aprendizado ainda mais dinâmico e estimulante.
            
            <br /><br />

            No campo técnico, possuo experiência com linguagens como{" "}
            <span className={styles.destaque}>C, Python e Java</span>, além de conhecimentos em{" "}
            <span className={styles.destaque}>Figma, React, Next.js e MySQL</span>. 
            Também tenho familiaridade com{" "}
            <span className={styles.destaque}>modelagem de sistemas</span>, utilizando{" "}
            <span className={styles.destaque}>UML e BPMN</span>. 
            Busco constantemente integrar esses conhecimentos em{" "}
            <span className={styles.destaque}>projetos práticos</span>, 
            sempre com o objetivo de aprimorar minhas habilidades e me preparar para os desafios do mercado de tecnologia.
          </p>
      </div>


      <div className={styles.teste}>

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

        <a className={styles.alllinks} href="#" target="_blank">
          ⚪ ▶ Projeto em C
        </a>
        <a className={styles.alllinks} href="#" target="_blank">
          ⚪ ▶ Stonks-viewer
        </a>
        <a className={styles.alllinks} href="#" target="_blank">
          ⚪ ▶ Aprendendo Arvores
        </a>
      </div>


      <div id="forca" className={styles.divprincipal2}>
        <Forca />
      </div>
    </div>
  );
}





function Forca() {
  const palavras = ["react", "javascript", "computador", "programacao"];

  const [palavra] = useState(
    palavras[Math.floor(Math.random() * palavras.length)]
  );
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);

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

  const venceu = palavra
    .split("")
    .every((l) => letrasCorretas.includes(l));

  const perdeu = letrasErradas.length >= 6;

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