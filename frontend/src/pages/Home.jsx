    import { Link } from "react-router-dom";

    import stadium1 from "../assets/hero/stadium1.jpg";
    import stadium2 from "../assets/hero/stadium2.jpg";
    import stadium3 from "../assets/hero/stadium3.jpg";
    import stadium4 from "../assets/hero/stadium4.jpg";

    import dashboard1 from "../assets/Dashboards/dashboard1.png";
    import dashboard2 from "../assets/Dashboards/dashboard2.png";
    import dashboard3 from "../assets/Dashboards/dashboard3.png";

    import "../styles/Home.css";

    function Home() {
    return (
        <div>

        {/* NAVBAR */}

        <nav className="navbar">

            <h2 className="logo">
            NBA Draft Analytics
            </h2>

            <div className="nav-links">

            <Link to="/">Home</Link>

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/players">Players</Link>

            <Link to="/ml-insights">ML Insights</Link>

            <Link to="/about">About</Link>

            </div>

        </nav>

        {/* HERO */}

        <section
  className="hero-section"
  style={{
    backgroundImage: `url(${stadium1})`
  }}
>

  <div className="hero-overlay">

    <p className="hero-tag">
      NBA DRAFT ANALYTICS PLATFORM
    </p>

    <h1 className="hero-title">
      Discover The Hidden Story Behind Every NBA Draft Pick
    </h1>

    <p className="hero-description">
      Explore career outcomes of 1,922 NBA players using
      advanced analytics, interactive dashboards,
      machine learning predictions and draft intelligence.
    </p>

    <div className="hero-buttons">

      <Link to="/dashboard">
        <button className="primary-btn">
          Explore Dashboard
        </button>
      </Link>

      <Link to="/players">
        <button className="secondary-btn">
          View Players
        </button>
      </Link>

    </div>

    <div className="hero-stats">

      <div>
        <h3>1922+</h3>
        <p>Players Analyzed</p>
      </div>

      <div>
        <h3>238</h3>
        <p>Colleges</p>
      </div>

      <div>
        <h3>20+</h3>
        <p>Years of Data</p>
      </div>

    </div>

  </div>

</section>


        {/* KPI SECTION */}

        <section className="kpi-section">

            <div className="kpi-card">
            <h2>1,922</h2>
            <span>Players</span>
            </div>

            <div className="kpi-card">
            <h2>238</h2>
            <span>Colleges</span>
            </div>

            <div className="kpi-card">
            <h2>17.87</h2>
            <span>Avg Win Shares</span>
            </div>

            <div className="kpi-card">
            <h2>3.27</h2>
            <span>Draft Score</span>
            </div>

        </section>

        {/* DASHBOARD PREVIEW */}

        <section className="preview-section">

            <h2>
            Power BI Dashboard Showcase
            </h2>

            <div className="preview-grid">

            <Link to="/dashboard">
                <div className="dashboard-card">
                <img src={dashboard1} alt="" />
                <h3>Draft Overview Dashboard</h3>
                <p>Draft tiers, value scores and performance trends.</p>
                </div>
            </Link>

            <Link to="/dashboard">
                <div className="dashboard-card">
                <img src={dashboard2} alt="" />
                <h3>Player Analytics</h3>
                <p>Career points, rebounds and assists analysis.</p>
                </div>
            </Link>

            <Link to="/dashboard">
                <div className="dashboard-card">
                <img src={dashboard3} alt="" />
                <h3>Success Prediction</h3>
                <p>Machine learning based success categorization.</p>
                </div>
            </Link>

            </div>

        </section>

        {/* FEATURE CARDS */}

        <section className="feature-section">

            <h2>What You Can Explore</h2>

            <div className="feature-grid">

            <div className="feature-card">
                <h3>Draft Analysis</h3>
                <p>
                Discover draft steals and successful draft classes.
                </p>
            </div>

            <div className="feature-card">
                <h3>Player Performance</h3>
                <p>
                Compare career points, assists and rebounds.
                </p>
            </div>

            <div className="feature-card">
                <h3>Machine Learning</h3>
                <p>
                Predict NBA success using Random Forest models.
                </p>
            </div>

            </div>

        </section>

        </div>
    );
    }

    export default Home;