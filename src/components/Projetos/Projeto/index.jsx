import React from "react";
import styles from "./Projeto.module.css";
import { Typewriter } from "react-simple-typewriter";

export default function Projeto({ info }) {
  const text = <Typewriter words={info.descricao} typeSpeed={25} />;

  return (
    <>
      <div className={styles.project_image}>
        <h1>{info.nome}</h1>
        <img src={info.image} alt="" />
      </div>
      <div className={styles.about_project}>
        <p>{text}</p>
        <h2>tecnologias utilizadas</h2>
        <div>
          <ul className={styles.technologies}>
            {info.tecnologias.map((tecnologia) => {
              return <li key={tecnologia}>{tecnologia}</li>;
            })}
          </ul>
          <div className={styles.links}>
            <a href={info.github} target="_blank">
              <img src="../../images/github.png" alt="" />
            </a>
            <a href={info.website} target="_blank">
              <img src="../../images/link-externo.png" alt="" />
              <span>Acesse</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
