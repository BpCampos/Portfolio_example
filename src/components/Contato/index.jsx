import styles from "./Contato.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contato({ checked }) {
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
      <h1 className={checked.Brasil ? styles.contato : styles.hide} id="contato">
        Contato
      </h1>
      <h1 className={checked.USA ? styles.contato : styles.hide} id="contato">
        Contact
      </h1>
      <div className={styles.container}>
        <form ref={form} onSubmit={sendEmail} action="" className={styles.form}>
          <h3 className={checked.Brasil ? "" : styles.hide}>Mande uma mensagem</h3>
          <h3 className={checked.USA ? "" : styles.hide}>Send me a massage</h3>
          <label className={checked.Brasil ? "" : styles.hide} htmlFor="">
            Seu nome
          </label>
          <label className={checked.USA ? "" : styles.hide} htmlFor="">
            Your name
          </label>
          <input type="text" name="user_name" required />
          <label className={checked.Brasil ? "" : styles.hide} htmlFor="">
            Seu email
          </label>
          <label className={checked.USA ? "" : styles.hide} htmlFor="">
            Your email
          </label>
          <input type="email" name="user_email" required />
          <label className={checked.Brasil ? "" : styles.hide} htmlFor="">
            Mensagem
          </label>
          <label className={checked.USA ? "" : styles.hide} htmlFor="">
            Message
          </label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          <button className={checked.Brasil ? "" : styles.hide} type="submit">
            Enviar
          </button>
          <button className={checked.USA ? "" : styles.hide} type="submit">
            Send
          </button>
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
