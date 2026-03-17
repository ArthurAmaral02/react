import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container1}>

      <div className={styles.container2}></div>

        <div className={styles.divprincipal1}>
          
          <img className={styles.foto_minha} 
          src="foto_minha.png" 
          alt="uma foto minha"
          />
          
          <hr className={styles.linha}/>
          
          <h1 className={styles.fast}>⚪ ▶ fastfetch </h1>
          
          <p className={styles.texto1}> 
            <b>Name:</b><br/> Arthur Amaral de Souza<br/>
            <b>Age:</b> <br/> 20<br/>
            <b>Education:</b> <br/> Science Computer<br/>
            Universidade Catolica<br/> de Pernambuco<br/>


          </p>
        </div>
        <div className={styles.repos}>
          <img className={styles.git_logo1} 
          src="git_logo.png" 
          alt="uma foto minha"
          />
          <a className={styles.link_principal} 
          href="https://github.com/ArthurAmaral02"
          target="_black"
          >My links to GitHub </a>
          
          <a className={styles.alllinks} 
            href="https://github.com/ArthurAmaral02/trabalhoC"
            target="_blank">
            ⚪ ▶ Projeto em C
          </a>

          <a className={styles.alllinks} 
            href="https://github.com/ArthurAmaral02/stonks-viewer"
            target="_blank">
            ⚪ ▶ Stonks-viewer
          </a>

          <a className={styles.alllinks} 
            href="https://github.com/ArthurAmaral02/Java_Aprendendo"
            target="_blank">
            ⚪ ▶ Aprendendo Arvores
          </a>

          <a className={styles.alllinks} 
            href="https://github.com/ArthurAmaral02/Ecommerce"
            target="_blank">
            ⚪ ▶ Ecommerce
          </a>

          <a className={styles.alllinks} 
            href="https://github.com/ArthurAmaral02/trabalho-10-02-2026"
            target="_blank">
            ⚪ ▶ Aprendendo React
          </a>

        </div>

 
    </div>
  );
}