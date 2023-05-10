import styles from "./BotaoIdioma.module.css";

export default function BotaoIdioma({ checked, changeRadio }) {
  return (
    <section className={styles.container}>
      <div>
        <input onChange={changeRadio} type="radio" checked={checked.Brasil} value="Brasil" id="Brasil-flag" />
        <label htmlFor="Brasil-flag">
          <img src="../../images/flags/brasil.png" alt="bandeira do brasil" />
        </label>
      </div>
      <div>
        <input onChange={changeRadio} type="radio" checked={checked.USA} value="USA" id="USA-flag" />
        <label htmlFor="USA-flag">
          <img src="../../images/flags/estados-unidos.png" alt="United States flag" />
        </label>
      </div>
    </section>
  );
}
