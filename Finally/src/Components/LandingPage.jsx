import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './LandingPage.css'; // External CSS for animations

const LandingPage = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <div className="container-fluid text-white p-5 bg-dark fade-in">
      {/* Header Section with Batman Theme */}
      <header className="text-center mb-5">
        <h1 className="text-warning fw-bold display-3 batman-title">
          <i className="bi bi-batman"></i> Monthly Challenge App
        </h1>
        <p className="fs-5 text-info glow-text">
          Stay Motivated. Achieve More. Track Your Progress. Unleash your inner hero!
        </p>
        {/* ✅ Corrected Navigation */}
        <button 
          className="btn btn-warning btn-lg mt-3 shadow-lg fw-bold pulse-btn" 
          onClick={() => navigate("/add-challenge")}
        >
          Join the Challenge
        </button>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="text-center text-warning mb-4 display-4 fade-in">
            Features
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card bg-dark text-white border-warning shadow-lg p-3 rounded hover-glow">
                <h3 className="text-warning">Track Your Gotham Missions</h3>
                <p>
                  Keep a log of all your monthly challenges and stay focused, just like Batman tracking criminals in Gotham.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-dark text-white border-warning shadow-lg p-3 rounded hover-glow">
                <h3 className="text-warning">Set Deadlines Like a Vigilante</h3>
                <p>
                  Batman always has a plan. Set your deadlines, stay on track, and complete challenges like a true strategist.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-dark text-white border-warning shadow-lg p-3 rounded hover-glow">
                <h3 className="text-warning">Complete & Conquer Gotham</h3>
                <p>
                  Mark challenges as completed and celebrate like you’ve just saved the city from chaos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section with Batman Reference */}
      <footer className="footer text-center mt-5">
        <div className="container">
          <p className="fs-5">&copy; 2025 Monthly Challenge App. All rights reserved.</p>
          <p>
            <span className="text-warning fw-bold">Follow us:</span>
            <span className="ms-2"><a href="https://github.com/KishoreRam-M" className="text-info text-decoration-none">GitHub</a></span>
            <span className="ms-2"><a href="https://www.linkedin.com/in/kishoreramm6/" className="text-info text-decoration-none">LinkedIn</a></span>
          </p>
          <p className="fs-4 fst-italic text-warning glow-text">
             A hero can be anyone
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
