import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid text-white p-5 bg-dark fade-in" style={{marginTop: "70px"}}>
      {/* Hero Section with Enhanced Batman Theme */}
      <header className="text-center mb-5 py-5">
        <div className="position-relative">
          <div className="position-absolute top-0 start-50 translate-middle-x">
            <div className="batman-signal"></div>
          </div>
          <h1 className="text-warning fw-bold display-3 batman-title mb-4 animate__animated animate__fadeInDown">
            <i className="bi bi-lightning-charge-fill me-2"></i>
            Monthly Challenge App
          </h1>
          <div className="progress-bar-animated w-50 mx-auto mb-4"></div>
          <p className="fs-5 text-info glow-text mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Stay Motivated. Achieve More. Track Your Progress. Unleash your inner hero!
          </p>
          <button 
            className="btn btn-warning btn-lg mt-3 shadow-lg fw-bold pulse-btn animate__animated animate__fadeInUp animate__delay-1s"
            onClick={() => navigate("/add-challenge")}
          >
            <i className="bi bi-rocket-takeoff me-2"></i> Join the Challenge
          </button>
        </div>
      </header>

      {/* Features Section with Animation */}
      <section className="features py-5">
        <div className="container">
          <h2 className="text-center text-warning mb-5 display-4 fade-in">
            <i className="bi bi-stars me-2"></i> Features
          </h2>
          <div className="row g-4">
            <div className="col-md-4 slide-in-left" style={{animationDelay: "0.2s"}}>
              <div className="card gradient-card-1 shadow-lg p-4 rounded-lg hover-glow h-100">
                <div className="card-icon-wrapper mb-3">
                  <i className="bi bi-calendar-check fs-1 text-warning"></i>
                </div>
                <h3 className="text-warning fw-bold">Track Your Gotham Missions</h3>
                <div className="mt-2 mb-3 border-bottom border-warning w-25"></div>
                <p className="text-light">
                  Keep a log of all your monthly challenges and stay focused, just like Batman tracking criminals in Gotham.
                </p>
              </div>
            </div>
            <div className="col-md-4 fade-in" style={{animationDelay: "0.4s"}}>
              <div className="card gradient-card-2 shadow-lg p-4 rounded-lg hover-glow h-100">
                <div className="card-icon-wrapper mb-3">
                  <i className="bi bi-alarm fs-1 text-info"></i>
                </div>
                <h3 className="text-info fw-bold">Set Deadlines Like a Vigilante</h3>
                <div className="mt-2 mb-3 border-bottom border-info w-25"></div>
                <p className="text-light">
                  Batman always has a plan. Set your deadlines, stay on track, and complete challenges like a true strategist.
                </p>
              </div>
            </div>
            <div className="col-md-4 slide-in-right" style={{animationDelay: "0.6s"}}>
              <div className="card gradient-card-3 shadow-lg p-4 rounded-lg hover-glow h-100">
                <div className="card-icon-wrapper mb-3">
                  <i className="bi bi-trophy fs-1 text-danger"></i>
                </div>
                <h3 className="text-danger fw-bold">Complete & Conquer Gotham</h3>
                <div className="mt-2 mb-3 border-bottom border-danger w-25"></div>
                <p className="text-light">
                  Mark challenges as completed and celebrate like you've just saved the city from chaos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: How It Works Section */}
      <section className="how-it-works py-5 fade-in">
        <div className="container">
          <h2 className="text-center text-warning mb-5 display-4">
            <i className="bi bi-lightbulb me-2"></i> How It Works
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative">
                <div className="card bg-dark text-white border-0 shadow-lg p-4 rotate-card">
                  <div className="d-flex align-items-center mb-4">
                    <span className="badge bg-warning text-dark fs-4 me-2">1</span>
                    <h3 className="text-warning m-0">Create a Challenge</h3>
                  </div>
                  <p className="mb-0">Set your monthly goals and define what you want to achieve.</p>
                </div>
                <div className="card bg-dark text-white border-0 shadow-lg p-4 rotate-card" style={{top: "100px", left: "30px", zIndex: "2"}}>
                  <div className="d-flex align-items-center mb-4">
                    <span className="badge bg-info text-dark fs-4 me-2">2</span>
                    <h3 className="text-info m-0">Track Progress</h3>
                  </div>
                  <p className="mb-0">Follow your journey and stay on top of your deadlines.</p>
                </div>
                <div className="card bg-dark text-white border-0 shadow-lg p-4 rotate-card" style={{top: "200px", left: "60px", zIndex: "3"}}>
                  <div className="d-flex align-items-center mb-4">
                    <span className="badge bg-danger text-white fs-4 me-2">3</span>
                    <h3 className="text-danger m-0">Complete & Celebrate</h3>
                  </div>
                  <p className="mb-0">Mark challenges as completed and celebrate your victories!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card bg-dark bg-opacity-50 border-0 shadow-lg p-4">
                <h3 className="text-warning mb-4">Why Monthly Challenges?</h3>
                <div className="feature-item d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-warning fs-4 me-3"></i>
                  <p className="mb-0">Builds consistency and discipline</p>
                </div>
                <div className="feature-item d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-warning fs-4 me-3"></i>
                  <p className="mb-0">Creates measurable progress</p>
                </div>
                <div className="feature-item d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-warning fs-4 me-3"></i>
                  <p className="mb-0">Turns big goals into manageable steps</p>
                </div>
                <div className="feature-item d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-warning fs-4 me-3"></i>
                  <p className="mb-0">Increases motivation and accountability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Animation */}
      <footer className="footer text-center mt-5 py-4 animate__animated animate__fadeIn">
        <div className="container">
          <div className="footer-logo mb-4">
            <i className="bi bi-lightning-charge-fill text-warning display-4"></i>
          </div>
          <p className="fs-5 mb-3">&copy; 2025 Monthly Challenge App. All rights reserved.</p>
          <div className="social-links mb-4">
            <a href="https://github.com/KishoreRam-M" className="text-decoration-none mx-2">
              <i className="bi bi-github fs-4 text-warning"></i>
            </a>
            <a href="https://www.linkedin.com/in/kishoreramm6/" className="text-decoration-none mx-2">
              <i className="bi bi-linkedin fs-4 text-warning"></i>
            </a>
            <a href="#" className="text-decoration-none mx-2">
              <i className="bi bi-twitter-x fs-4 text-warning"></i>
            </a>
          </div>
          <p className="fs-4 fst-italic text-warning glow-text">
            A hero can be anyone
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;