import stadium1 from "../assets/hero/stadium1.jpg";

import "../styles/About.css";

function About() {
return (
<div
className="about-page"
style={{
backgroundImage: `url(${stadium1})`
}}
> <div className="about-overlay">

    <section className="about-header">

      <h1>About The Project</h1>

      <p>
        NBA Draft Analytics is a data science and
        business intelligence project designed to
        analyze player careers, identify draft steals,
        evaluate college pipelines and predict player
        success using machine learning.
      </p>

    </section>

    <section className="about-grid">

      <div className="about-card">

        <h2>Dataset</h2>

        <p>
          1,922 NBA drafted players,
          238 colleges and multiple
          career performance metrics.
        </p>

      </div>

      <div className="about-card">

        <h2>Data Analytics</h2>

        <p>
          Exploratory Data Analysis,
          feature engineering and
          trend discovery using Python.
        </p>

      </div>

      <div className="about-card">

        <h2>Machine Learning</h2>

        <p>
          Random Forest Classification
          model for predicting player
          success categories.
        </p>

      </div>

      <div className="about-card">

        <h2>Visualization</h2>

        <p>
          Power BI dashboards and
          React visualizations for
          interactive analytics.
        </p>

      </div>

    </section>

    <section className="tech-section">

      <h2>Technologies Used</h2>

      <div className="tech-grid">

        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-Learn</span>
        <span>Power BI</span>
        <span>React</span>
        <span>Vite</span>
        <span>Recharts</span>
        <span>GitHub</span>
        <span>Vercel</span>

      </div>

    </section>

    <section className="workflow-about">

      <h2>Project Workflow</h2>

      <div className="workflow-row">

        <div>Raw Data</div>
        <div>→</div>
        <div>EDA</div>
        <div>→</div>
        <div>Feature Engineering</div>
        <div>→</div>
        <div>Machine Learning</div>
        <div>→</div>
        <div>Dashboard</div>

      </div>

    </section>

  </div>
</div>

);
}

export default About;