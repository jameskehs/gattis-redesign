import "./events.css";

const Events = () => {
  return (
    <div>
      <h1>It's a celebration! Let's Party!</h1>
      <h2>We have several packages to meet your needs</h2>
      <div className="packages-container">
        <div className="package-card">
          <h3>Tier 1</h3>
          <ul>
            <li>Private party room for 1.5 hours</li>
            <li>$15 game card per guest</li>
            <li>3 medium 1-topping pizzas</li>
            <li>2 drink pitchers</li>
          </ul>
          <h3>$79.99</h3>
        </div>
        <div className="package-card">
          <h3>Tier 2</h3>
          <ul>
            <li>Private party room for 1.5 hours</li>
            <li>$25 game card per guest</li>
            <li>4 medium 1-topping pizzas</li>
            <li>2 drink pitchers</li>
          </ul>
          <h3>$99.99</h3>
        </div>
        <div className="package-card">
          <h3>Tier 3</h3>
          <ul>
            <li>Private party room for 1.5 hours</li>
            <li>$40 game card per guest</li>
            <li>5 medium 1-topping pizzas</li>
            <li>3 drink pitchers</li>
          </ul>
          <h3>$119.99</h3>
        </div>
      </div>
      <form id="booking-form">
        <h2>Book with us today!</h2>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input id="bday-name" type="text"></input>
        </div>
        <div className="input-group">
          <label htmlFor="bday-email">Email Address</label>
          <input id="bday-email" type="email"></input>
        </div>
        <div className="input-group">
          <label htmlFor="bday-bday-person-name">Birthday Persons Name</label>
          <input id="bday-bday-person-name" type="text"></input>
        </div>
        <div className="input-group">
          <label htmlFor="bday-location">Location</label>
          <select id="bday-location">
            <option value="">Denham Springs</option>
            <option value="">Baton Rouge</option>
            <option value="">Lake Charles</option>
            <option value="">Crowley</option>
            <option value="">New Orleans</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="bday-package-tier">Package Tier</label>
          <select id="bday-package-tier">
            <option value="">Tier 1</option>
            <option value="">Tier 2</option>
            <option value="">Tier 3</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="bday-date">Date</label>
          <input id="bday-date" type="date"></input>
        </div>
        <button>Book It!</button>
      </form>
    </div>
  );
};

export default Events;
