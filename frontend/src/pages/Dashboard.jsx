import stadium2 from "../assets/hero/stadium2.jpg";

import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
LineChart,
Line
} from "recharts";

import "../styles/Dashboard.css";

const playerData = [
{ player: "LeBron", points: 38652 },
{ player: "Kobe", points: 33643 },
{ player: "Dirk", points: 31560 },
{ player: "Duncan", points: 26496 },
{ player: "Curry", points: 24500 }
];

const collegeData = [
{ college: "Kentucky", players: 125 },
{ college: "Duke", players: 112 },
{ college: "North Carolina", players: 96 },
{ college: "UCLA", players: 84 },
{ college: "Kansas", players: 79 }
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
> <section className="dashboard-header">

    <h1>NBA Draft Analytics Command Center</h1>

    <p>
      Explore draft steals, superstar careers,
      college pipelines, predictive modeling
      and advanced NBA player intelligence.
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

          <Bar
            dataKey="points"
            fill="#F59E0B"
            animationDuration={2500}
            radius={[10, 10, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>

    <div className="chart-card">

      <h2>Top Draft Colleges</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={collegeData}
        >
          <XAxis type="number" />

          <YAxis
            dataKey="college"
            type="category"
          />

          <Tooltip />

          <Bar
            dataKey="players"
            fill="#3B82F6"
            animationDuration={2500}
            radius={[0, 10, 10, 0]}
          />

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
            <th>Achievement</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Kobe Bryant</td>
            <td>13</td>
            <td>33,643 Career Points</td>
          </tr>

          <tr>
            <td>Dirk Nowitzki</td>
            <td>9</td>
            <td>NBA Champion & MVP</td>
          </tr>

          <tr>
            <td>Giannis Antetokounmpo</td>
            <td>15</td>
            <td>Multiple MVP Awards</td>
          </tr>

          <tr>
            <td>Nikola Jokic</td>
            <td>41</td>
            <td>Multiple MVP Awards</td>
          </tr>

        </tbody>

      </table>

    </div>

  </section>

  <section className="dashboard-action">

    <h2>
      Explore Advanced NBA Analytics
    </h2>

    <p>
      Dive deeper into player scouting,
      college pipelines, draft value and
      machine learning driven insights.
    </p>

    <a href="/players">
      <button className="analytics-btn">
        Explore Players
      </button>
    </a>

  </section>

  <section className="insight-box">

    <h2>Key Insights</h2>

    <ul>

      <li>
        ⭐ Lottery picks generate nearly 3x more Win Shares than second-round selections.
      </li>

      <li>
        🏀 LeBron James remains the highest scoring player in the dataset.
      </li>

      <li>
        🎓 Duke, Kentucky and North Carolina consistently produce elite NBA talent.
      </li>

      <li>
        📈 Win Shares emerged as the strongest predictor of long-term career success.
      </li>

      <li>
        💎 Several late-round selections dramatically outperformed lottery picks.
      </li>

    </ul>

  </section>

</div>

);
}

export default Dashboard;