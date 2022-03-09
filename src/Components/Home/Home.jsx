import "./home.css";
import { Link } from "react-router-dom";
import LinkCard from "./LinkCard/LinkCard";
const Home = () => {
  const quickLinks = [
    {
      link: "/menu",
      linkText: "Let's Eat",
      blackImg: "./Images/Icons/pizza-slice-black.png",
      whiteImg: "./Images/Icons/pizza-slice-white.png",
    },
    {
      link: "/games",
      linkText: "Let's Play",
      blackImg: "./Images/Icons/joystick-black.png",
      whiteImg: "./Images/Icons/joystick-white.png",
    },
    {
      link: "/events",
      linkText: "Let's Party",
      blackImg: "./Images/Icons/party-black.png",
      whiteImg: "./Images/Icons/party-white.png",
    },
    {
      link: "/careers",
      linkText: "Careers",
      blackImg: "./Images/Icons/dollar-bill-black.png",
      whiteImg: "./Images/Icons/dollar-bill-white.png",
    },
    {
      link: "/rewards",
      linkText: "Rewards",
      blackImg: "./Images/Icons/badge-black.png",
      whiteImg: "./Images/Icons/badge-white.png",
    },
    {
      link: "/giftcards",
      linkText: "Gift Cards",
      blackImg: "./Images/Icons/credit-card-black.png",
      whiteImg: "./Images/Icons/credit-card-white.png",
    },
  ];
  return (
    <div id="home">
      <div id="hero-img">
        <div id="hero-text">
          <h2>Gamerooms are back.</h2>
          <h2>Let the games begin.</h2>
        </div>
        <Link to="/games">Check out our games</Link>
      </div>

      <h1>Let's Get Started</h1>
      <div className="home-links-container">
        {quickLinks.map((quickLink) => {
          return (
            <LinkCard
              link={quickLink.link}
              linkText={quickLink.linkText}
              blackImg={quickLink.blackImg}
              whiteImg={quickLink.whiteImg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
