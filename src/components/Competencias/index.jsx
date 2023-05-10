import React from "react";
import styles from "./Competencias.module.css";

export default function Competências({ checked }) {
  return (
    <div>
      <h1 className={checked.Brasil ? "" : styles.hide}>Competências</h1>
      <h1 className={checked.USA ? "" : styles.hide}>Skills</h1>
      <div className={styles.container}>
        <section>
          <h2>Front End</h2>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </section>
        <section>
          <h2>Back End</h2>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>Postman</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
