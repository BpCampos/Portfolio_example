import styles from "./Contato.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ctl460h", "template_r4ith29", form.current, "yYZgZ7JLiIMUkA4OD").then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <h1 className={styles.contato} id="contato">
        Contato
      </h1>
      <div className={styles.container}>
        <form ref={form} onSubmit={sendEmail} action="" className={styles.form}>
          <h3>Mande uma mensagem</h3>
          <label htmlFor="">Seu nome</label>
          <input type="text" name="user_name" required />
          <label htmlFor="">Seu email</label>
          <input type="email" name="user_email" required />
          <label htmlFor="">Mensagem</label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          <button type="submit">Enviar</button>
        </form>
        <div className={styles.links}>
          <div>
            <a href="mailto:campos.bruno98@gmail.com">
              <img src="../../images/gmail.png" alt="" />
            </a>
            <p>campos.bruno98@gmail.com</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/bruno-campos98/" target="_blank">
              <img src="../../images/linkedin.png" alt="" />
            </a>
            <p>bruno-campos98/</p>
          </div>
          <div>
            <a href="https://github.com/BpCampos" target="_blank">
              <img src="../../images/github.png" alt="" />
            </a>
            <p>BpCampos</p>
          </div>
        </div>
      </div>
    </>
  );
}
