const GameCard = ({ name, imgLink, desc }) => {
  return (
    <div class="flip-card" tabIndex="0">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={imgLink} alt={name} />
          <h3>{name}</h3>
        </div>
        <div class="flip-card-back">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
