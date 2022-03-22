const PizzaCard = ({ name, imgLink, ingredients }) => {
  return (
    <div className="pizza-card">
      <img src={imgLink} alt={name} />
      <div className="pizza-details">
        <h3>{name}</h3>
        <div className="pizza-toppings">
          {ingredients.map((ingredient) => {
            return <p>{ingredient}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
