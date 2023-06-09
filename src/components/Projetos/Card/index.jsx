export default function Cards({ card, styles, showProjeto, checked, selectedCard }) {
  return (
    <div className={selectedCard[0].id === card.id ? `${styles.card} ${styles.selectedCard}` : styles.card}>
      <h2>{card.nome}</h2>
      <img src={card.image} alt={card.nome} />
      <div className={styles.about}>
        <p className={checked.Brasil ? "" : styles.hide} onClick={() => showProjeto(card.id)}>
          Sobre
        </p>
        <p className={checked.USA ? "" : styles.hide} onClick={() => showProjeto(card.id)}>
          About
        </p>
      </div>
    </div>
  );
}
