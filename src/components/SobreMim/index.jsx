import React from "react";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
  return (
    <div className={styles.container}>
      <img id="sobreMim" src="https://github.com/BpCampos.png" alt="foto de perfil" />
      <p>
        Recém graduado de um bootcamp de desenvolvimento full stack, estou ansioso para impulsionar minha carreira como
        desenvolvedor júnior full stack. Com uma paixão por tecnologia e uma base sólida em desenvolvimento web, estou
        estou comprometido em criar aplicativos e soluções web intuitivos e eficientes que atendam às necessidades dos
        clientes. Com habilidades em design de interface do usuário e desenvolvimento de back-end e front-end.
      </p>
    </div>
  );
}
