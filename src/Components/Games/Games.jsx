import GameCard from "./GameCard";
import "./games.css";
import GamesCarousel from "./GamesCarousel";
const Games = () => {
  const gameData = [
    {
      name: "Hyper Shoot",
      imgLink: "./Images/Games/hyper-shoot.png",
      desc: "Interactive light tunnel, unique hoop and real time sports commentary create an innovative and rewarding game experience that guests just can’t seem to walk past.",
    },
    {
      name: "Amazing Alley",
      imgLink: "./Images/Games/amazing-alley.png",
      desc: "Amazing Alley is a modern 2-lane alley bowler that seamlessly connects the physical and virtual worlds with colorful holographic effects.",
    },
    {
      name: "High Five",
      imgLink: "./Images/Games/high-five.png",
      desc: "An energetic, side-by-side competitive redemption game for kids. The over-size buttons on the playfield randomly light up showing the player which to hit, and as soon as one light goes out, another button lights for the player to “high-five” it.",
    },
    {
      name: "Let's Bounce",
      imgLink: "./Images/Games/lets-bounce.png",
      desc: "You have 30 seconds and 20 balls to bounce through the playfield in an attempt to clear 45 neon tiles before the clock runs out. Clear the playfield and enter the bonus round, with 5 more balls and 7 more seconds on the clock, with each rainbow tile worth double points!",
    },
    {
      name: "Whack-N-Win",
      imgLink: "./Images/Games/whack-n-win.png",
      desc: "Players must whack their way into the win zone by using their skill to tap the sensor pad and attempt to win the Bonus.",
    },
  ];
  return (
    <div id="games">
      <h1>Pizza.Play.Repeat</h1>
      <h2>View our gallery of state of the art games</h2>
      <GamesCarousel />
      <h3>Hover over a game to view details</h3>
      <div className="game-cards-container">
        {gameData.map((game) => {
          return (
            <GameCard
              name={game.name}
              imgLink={game.imgLink}
              desc={game.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Games;
