import PizzaCard from "./PizzaCard";
import { pizzaData } from "./pizzaData";
import "./menu.css";

const Menu = () => {
  return (
    <div id="menu">
      <h1>Our Top Picks</h1>
      <div className="top-picks-container">
        {pizzaData.topPicks.map((pizza) => {
          return (
            <PizzaCard
              name={pizza.name}
              imgLink={pizza.img}
              ingredients={pizza.ingredients}
            />
          );
        })}
      </div>
      <h1>Our other Specialties</h1>
      <div className="other-specialties-container">
        {pizzaData.otherSpecialties.map((pizza) => {
          return (
            <PizzaCard
              name={pizza.name}
              imgLink={pizza.img}
              ingredients={pizza.ingredients}
            />
          );
        })}
      </div>
      <h1>Or Build Your Own</h1>
      <div className="all-toppings-container">
        <div className="topping-section">
          <h3>Sauces</h3>
          {pizzaData.allToppings.sauces}
        </div>
        <div className="topping-section">
          <h3>Cheeses</h3>
        </div>
        <div className="topping-section">
          <h3>Meats</h3>
        </div>
        <div className="topping-section">
          <h3>Veggies</h3>
        </div>
      </div>
    </div>
  );
};

export default Menu;
