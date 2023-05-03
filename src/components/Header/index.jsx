import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <a href="#sobreMim">
          <p>Sobre Mim</p>
        </a>
      </div>
      <div>
        <a href="#projetos">
          <p>Projetos</p>
        </a>
      </div>
      <div>
        <a href="#contato">
          <p>Contato</p>
        </a>
      </div>
    </header>
  );
}
