import React from 'react'
import styles from './Competencias.module.css'

export default function Competências({ checked }) {
  return (
    <div>
      <h1 className={checked.Brasil ? '' : styles.hide}>Competências</h1>
      <h1 className={checked.USA ? '' : styles.hide}>Skills</h1>
      <div className={styles.container}>
        <section>
          <h2>Front End</h2>
          <ul>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
              Javascript
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
              Typescript
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              HTML
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              CSS
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              React
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
              Bootstrap
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
              Tailwind
            </li>
          </ul>
        </section>
        <section>
          <h2>Back End</h2>
          <ul>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              Node
            </li>
            <li>
              <img src="https://img.icons8.com/office/60/express-js.png" alt="express-js" />
              Express
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
              MySQL
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
              Sequelize
            </li>
            <li>
              <img src="../../images/postman-icon.png" />
              Postman
            </li>
            <li>
              <img src="../../images/prisma.png" />
              Prisma
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
