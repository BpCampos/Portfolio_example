import styles from './SobreMim.module.css'

export default function SobreMim({ checked }) {
  return (
    <div className={styles.container}>
      <div className={styles.identidade}>
        <img id="sobreMim" src="https://github.com/BpCampos.png" alt="foto de perfil" />
        <div>
          <p className={checked.Brasil ? '' : styles.hide}>Olá, eu sou o Bruno Campos</p>
          <p className={checked.USA ? '' : styles.hide}>Hi, I'm Bruno Campos</p>
          <p className={checked.Brasil ? '' : styles.hide}>Desenvolvedor Full Stack</p>
          <p className={checked.USA ? '' : styles.hide}>Full Stack Developer</p>
          <p className={checked.Brasil ? '' : styles.hide}>Formado em Economia pela PUC-SP</p>
          <p className={checked.USA ? '' : styles.hide}>Graduated in Economic Science at PUC-SP</p>
        </div>
      </div>
      <p className={checked.Brasil ? styles.aboutMe : styles.hide}>
        Recém graduado de um bootcamp de desenvolvimento full stack, estou ansioso para impulsionar minha carreira como desenvolvedor júnior full stack. Com uma paixão por tecnologia e uma base sólida em desenvolvimento web, estou estou comprometido
        em criar aplicativos e soluções web intuitivos e eficientes que atendam às necessidades dos clientes. Com habilidades em design de interface do usuário e desenvolvimento de back-end e front-end.
      </p>
      <p className={checked.USA ? styles.aboutMe : styles.hide}>
        As a recent graduate of a full stack coding bootcamp, I am eager to jumpstart my career as a junior full stack developer. With a passion for technology and a strong foundation in web development, I am confident in my ability to contribute to
        a dynamic and collaborative team. While I may not have professional experience yet, I am motivated, adaptable, and excited to take on new challenges and continue learning in a fast-paced industry.
      </p>
    </div>
  )
}
