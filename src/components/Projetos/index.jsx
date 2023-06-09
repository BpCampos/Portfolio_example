import React, { useRef, useState, useEffect } from 'react'
import styles from './Projetos.module.css'
import { motion } from 'framer-motion'
import Card from './Card'
import cards from '~/json/cards.json'
import Projeto from './Projeto'

export default function Projetos({ checked }) {
  const [itens, setItens] = useState(cards)
  const [width, setWidth] = useState(0)
  const [projeto, setProjeto] = useState([])
  const [show, setShow] = useState(true)
  const [selectedCard, setSelectedCard] = useState([{}])

  const projects = useRef()

  useEffect(() => {
    setWidth(projects.current?.scrollWidth - projects.current?.offsetWidth)
  }, [])

  function showProjeto(card) {
    let projetoAtivo = itens.filter((item) => item.id === card)
    if (projetoAtivo) {
      setShow(false)
      setSelectedCard(projetoAtivo)
    }
    setProjeto(projetoAtivo)
  }

  return (
    <>
      <motion.div ref={projects} className={styles.container}>
        <h1 className={checked.Brasil ? '' : styles.hide} id="projetos">
          Projetos
        </h1>
        <h1 className={checked.USA ? '' : styles.hide} id="projetos">
          Projects
        </h1>
        <motion.section className={styles.projects} whileTap={{ cursor: 'grabbing' }} drag="x" dragConstraints={{ right: width, left: -width }} animate={{ x: width }} transition={{ ease: 'linear', duration: 50, repeat: Infinity }}>
          {itens.map((itens) => {
            return <Card selectedCard={selectedCard} checked={checked} width={width} card={itens} styles={styles} showProjeto={showProjeto} key={itens.id} />
          })}
        </motion.section>
      </motion.div>
      <div className={show ? styles.show : styles.projectContainer}>
        {projeto.map((projeto) => {
          return <Projeto key={projeto.id} info={projeto} checked={checked} />
        })}
      </div>
    </>
  )
}
