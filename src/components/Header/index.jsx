/* eslint-disable react/prop-types */
import styles from './Header.module.css'

export default function Header({ checked }) {
  return (
    <header className={styles.header}>
      <div>
        <a href="#sobreMim">
          <p className={checked.Brasil ? '' : styles.hide}>Sobre Mim</p>
          <p className={checked.USA ? '' : styles.hide}>About me</p>
        </a>
      </div>
      <div>
        <a href="#projetos">
          <p className={checked.Brasil ? '' : styles.hide}>Projetos</p>
          <p className={checked.USA ? '' : styles.hide}>Projects</p>
        </a>
      </div>
      <div>
        <a href="#contato">
          <p className={checked.Brasil ? '' : styles.hide}>Contato</p>
          <p className={checked.USA ? '' : styles.hide}>Contact</p>
        </a>
      </div>
    </header>
  )
}
