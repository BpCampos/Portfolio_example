export default function Cards({ card, styles, showProjeto }) {
  return (
    <div className={styles.card}>
      <h2>{card.nome}</h2>
      <img src={card.image} alt={card.nome} />
      <div className={styles.about}>
        <p onClick={() => showProjeto(card.id)}>Sobre</p>
      </div>
    </div>
  );
}
