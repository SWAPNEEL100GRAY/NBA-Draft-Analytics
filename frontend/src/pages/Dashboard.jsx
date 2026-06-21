import stadium2 from "../assets/hero/stadium2.jpg";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";

import "../styles/Dashboard.css";

const draftData = [
  { name: "Lottery", value: 42 },
  { name: "Mid First", value: 28 },
  { name: "Late First", value: 18 },
  { name: "Second Round", value: 12 }
];

const playerData = [
  { player: "LeBron", points: 38652 },
  { player: "Kobe", points: 33643 },
  { player: "Dirk", points: 31560 },
  { player: "Duncan", points: 26496 },
  { player: "Curry", points: 24500 }
];

const COLORS = [
  "#F59E0B",
  "#3B82F6",
  "#10B981",
  "#EF4444"
];

function Dashboard() {
  return (
    <div
      className="dashboard-page"
      style={{
        backgroundImage: `url(${stadium2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <section className="dashboard-header">
        <h1>NBA Draft Intelligence Center</h1>

        <p>
          Explore draft steals, superstar careers,
          college pipelines and player success through
          interactive visual analytics.
        </p>
      </section>

      <section className="dashboard-stats">
        <div className="stat-card">
          <h2>1,922</h2>
          <span>Players</span>
        </div>

        <div className="stat-card">
          <h2>238</h2>
          <span>Colleges</span>
        </div>

        <div className="stat-card">
          <h2>17.87</h2>
          <span>Avg Win Shares</span>
        </div>

        <div className="stat-card">
          <h2>3.27</h2>
          <span>Draft Score</span>
        </div>
      </section>

      <section className="chart-section">

        <div className="chart-card">
          <h2>Top Players by Career Points</h2>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={playerData}>
              <XAxis dataKey="player" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="points" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">

        <h2>Top Draft Colleges</h2>

        <ResponsiveContainer width="100%" height={350}>
            <BarChart
            layout="vertical"
            data={[
                { college: "Kentucky", players: 125 },
                { college: "Duke", players: 112 },
                { college: "North Carolina", players: 96 },
                { college: "UCLA", players: 84 },
                { college: "Kansas", players: 79 }
            ]}
            >
            <XAxis type="number" />
            <YAxis dataKey="college" type="category" />
            <Tooltip />
            <Bar dataKey="players" fill="#3B82F6" />
            </BarChart>
        </ResponsiveContainer>

        </div>

      </section>

      <section className="chart-section">

        <div className="chart-card">
          <h2>Career Success Trend</h2>

          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={playerData}>
              <XAxis dataKey="player" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="points"
                stroke="#F59E0B"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </section>

      <section className="chart-section">

  <div className="chart-card">

    <h2>Greatest Draft Steals</h2>

    <table className="draft-table">
      <thead>
        <tr>
          <th>Player</th>
          <th>Pick</th>
          <th>Points</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Kobe Bryant</td>
          <td>13</td>
          <td>33,643</td>
        </tr>

        <tr>
          <td>Dirk Nowitzki</td>
          <td>9</td>
          <td>31,560</td>
        </tr>

        <tr>
          <td>Giannis</td>
          <td>15</td>
          <td>18,000+</td>
        </tr>

        <tr>
          <td>Jokic</td>
          <td>41</td>
          <td>MVP</td>
        </tr>
      </tbody>

    </table>

  </div>

</section>

      <section className="insight-box">

        <h2>Key Insights</h2>

        <ul>

          <li>
            ⭐ Lottery picks generate nearly 3x more Win Shares than second-round selections.
          </li>

          <li>
            🏀 LeBron James leads all drafted players in total career points.
          </li>

          <li>
            🎓 Duke, Kentucky and North Carolina consistently produce elite NBA talent.
          </li>

          <li>
            📈 Win Shares emerged as the strongest predictor of long-term career success.
          </li>

          <li>
            💎 Several late-round selections outperformed top lottery picks.
          </li>

        </ul>

      </section>

    </div>
  );
}

export default Dashboard;