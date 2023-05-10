import styles from "./BotaoIdioma.module.css";

export default function BotaoIdioma({ checked, changeRadio }) {
  return (
    <section className={styles.container}>
      <input onChange={changeRadio} type="radio" checked={checked.Brasil} value="Brasil" id="Brasil-flag" />
      <label htmlFor="Brasil-flag">
        <img src="../../images/flags/brasil.png" alt="bandeira do brasil" />
      </label>
      <input onChange={changeRadio} type="radio" checked={checked.USA} value="USA" id="USA-flag" />
      <label htmlFor="USA-flag">
        <img src="../../images/flags/estados-unidos.png" alt="United States flag" />
      </label>
    </section>
  );
}
