import stadium4 from "../assets/hero/stadium4.jpg";

import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";

import "../styles/MLInsights.css";

const featureData = [
{ feature: "Win Shares", score: 95 },
{ feature: "Minutes Played", score: 88 },
{ feature: "VORP", score: 82 },
{ feature: "Points", score: 75 },
{ feature: "Draft Pick", score: 65 }
];

function MLInsights() {
return (
<div
className="ml-page"
style={{
backgroundImage: `url(${stadium4})`
}}
> <div className="ml-overlay">

    <section className="ml-header">

      <h1>Machine Learning Intelligence Center</h1>

      <p>
        Predicting NBA player success using
        Random Forest Classification and
        advanced performance metrics.
      </p>

    </section>

    <section className="metric-grid">

      <div className="metric-card">
        <h2>84%</h2>
        <span>Model Accuracy</span>
      </div>

      <div className="metric-card">
        <h2>1,922</h2>
        <span>Players Analysed</span>
      </div>

      <div className="metric-card">
        <h2>238</h2>
        <span>Colleges</span>
      </div>

      <div className="metric-card">
        <h2>RF</h2>
        <span>Random Forest</span>
      </div>

    </section>

    <section className="workflow-section">

      <h2>Prediction Workflow</h2>

      <div className="workflow">

        <div className="workflow-card">
          Player Statistics
        </div>

        <div className="arrow">→</div>

        <div className="workflow-card">
          Feature Engineering
        </div>

        <div className="arrow">→</div>

        <div className="workflow-card">
          Random Forest
        </div>

        <div className="arrow">→</div>

        <div className="workflow-card">
          Success Category
        </div>

      </div>

    </section>

    <section className="feature-section-ml">

      <div className="chart-box">

        <h2>Feature Importance</h2>

        <ResponsiveContainer width="100%" height={350}>

          <BarChart data={featureData}>

            <XAxis dataKey="feature" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="score"
              fill="#f59e0b"
              radius={[10,10,0,0]}
              animationDuration={2500}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </section>

    <section className="prediction-section">

      <h2>Example Predictions</h2>

      <div className="prediction-grid">

        <div className="prediction-card">
          <h3>LeBron James</h3>
          <p>Predicted Category: Superstar</p>
          <span>Confidence: 99%</span>
        </div>

        <div className="prediction-card">
          <h3>Stephen Curry</h3>
          <p>Predicted Category: Superstar</p>
          <span>Confidence: 98%</span>
        </div>

        <div className="prediction-card">
          <h3>Nikola Jokic</h3>
          <p>Predicted Category: Superstar</p>
          <span>Confidence: 97%</span>
        </div>

      </div>

    </section>

    <section className="insight-section">

      <h2>Key Machine Learning Findings</h2>

      <ul>

        <li>
          Win Shares emerged as the strongest predictor of NBA success.
        </li>

        <li>
          Draft position alone was not sufficient to predict long-term careers.
        </li>

        <li>
          Several second-round picks outperformed lottery selections.
        </li>

        <li>
          Minutes Played and VORP significantly improved model performance.
        </li>

        <li>
          Random Forest achieved the best balance of accuracy and interpretability.
        </li>

      </ul>

    </section>

  </div>
</div>

);
}

export default MLInsights;
