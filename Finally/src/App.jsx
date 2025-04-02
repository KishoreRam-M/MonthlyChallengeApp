import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import ChallengeLists from './Components/ChallengeLists';
import AddChallenge from './Components/AddChallenge';
import LandingPage from './Components/LandingPage';
import NavBar from './Components/Navbar';
function App() {
  const [challenges, setChallenges] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get('http://localhost:8080/challenges');
        setChallenges(response.data);
      } catch (err) {
        setError("⚠️ Failed to fetch challenges. Please try again later.");
        console.error("❌ Error fetching challenges:", err);
      }
    };
    fetchChallenges();
  }, []);

  return (
    <Router>
      <NavBar /> {/* ✅ Fixed case here */}
      <div className="container-fluid mt-3">
        {/* Show error message if the API call fails */}
        {error && <div className="alert alert-danger text-center">{error}</div>}

        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Landing Page */}
          <Route path="/challenges" element={<ChallengeLists challenge={challenges} />} /> {/* Challenge List */}
          <Route path="/add-challenge" element={<AddChallenge />} /> {/* Add Challenge */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
