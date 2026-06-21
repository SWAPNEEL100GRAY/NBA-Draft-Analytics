import stadium3 from "../assets/hero/stadium3.jpg";

import lebron from "../assets/players/lebron.webp";
import kobe from "../assets/players/Kobe.jpg";
import curry from "../assets/players/curry.webp";
import duncan from "../assets/players/duncan.jpg";
import dirk from "../assets/players/dirk.jpg";
import jokic from "../assets/players/jokic.jpg";

import "../styles/Players.css";

const players = [
  {
    name: "LeBron James",
    image: lebron,
    points: "38,652",
    assists: "10,420",
    rebounds: "10,667",
    pick: "#1"
  },

  {
    name: "Kobe Bryant",
    image: kobe,
    points: "33,643",
    assists: "6,306",
    rebounds: "7,047",
    pick: "#13"
  },

  {
    name: "Stephen Curry",
    image: curry,
    points: "24,500+",
    assists: "6,500+",
    rebounds: "4,700+",
    pick: "#7"
  },

  {
    name: "Tim Duncan",
    image: duncan,
    points: "26,496",
    assists: "4,225",
    rebounds: "15,091",
    pick: "#1"
  },

  {
    name: "Dirk Nowitzki",
    image: dirk,
    points: "31,560",
    assists: "3,651",
    rebounds: "11,489",
    pick: "#9"
  },

  {
    name: "Nikola Jokic",
    image: jokic,
    points: "14,000+",
    assists: "4,500+",
    rebounds: "7,000+",
    pick: "#41"
  }
];

function Players() {
  return (
    <div
      className="players-page"
      style={{
        backgroundImage: `url(${stadium3})`
      }}
    >
      <div className="players-overlay">

        <h1>NBA Legends Database</h1>

        <p>
          Explore legendary NBA careers,
          draft positions and performance metrics.
        </p>

        <div className="player-grid">

          {players.map((player, index) => (

            <div
              className="player-card"
              key={index}
            >

              <img
                src={player.image}
                alt={player.name}
              />

              <h2>{player.name}</h2>

              <p>Points: {player.points}</p>

              <p>Assists: {player.assists}</p>

              <p>Rebounds: {player.rebounds}</p>

              <span>
                Draft Pick {player.pick}
              </span>

            </div>

          ))}

        </div>

        <button className="load-btn">
          View More Players
        </button>

      </div>
    </div>
  );
}

export default Players;