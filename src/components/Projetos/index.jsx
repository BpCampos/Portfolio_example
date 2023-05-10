import React, { useRef, useState, useEffect } from "react";
import styles from "./Projetos.module.css";
import { motion } from "framer-motion";
import Card from "./Card";
import cards from "~/json/cards.json";
import Projeto from "./Projeto";

export default function Projetos({ checked }) {
  const [itens, setItens] = useState(cards);
  const [width, setWidth] = useState(0);
  const [projeto, setProjeto] = useState([]);
  const [show, setShow] = useState(true);

  const projects = useRef();

  useEffect(() => {
    setWidth(projects.current?.scrollWidth - projects.current?.offsetWidth);
  }, []);

  function showProjeto(card) {
    let projetoAtivo = itens.filter((item) => item.id === card);
    if (projetoAtivo) {
      setShow(false);
    }
    setProjeto(projetoAtivo);
  }

  return (
    <>
      <motion.div ref={projects} className={styles.container}>
        <h1 id="projetos">Projetos</h1>
        <motion.section
          className={styles.projects}
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ right: width, left: -width }}>
          {itens.map((itens) => {
            return (
              <Card
                checked={checked}
                width={width}
                card={itens}
                styles={styles}
                showProjeto={showProjeto}
                key={itens.id}
              />
            );
          })}
        </motion.section>
      </motion.div>
      <div className={show ? styles.show : styles.projectContainer}>
        {projeto.map((projeto) => {
          return <Projeto key={projeto.id} info={projeto} checked={checked} />;
        })}
      </div>
    </>
  );
}
