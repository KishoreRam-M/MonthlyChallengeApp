import { useEffect, useState } from 'react';
import './App.css';
import ChallengeLists from './Components/ChallengeLists';
import axios from 'axios';
import AddChallenge from './Components/AddChallenge';

function App() {
  const [challenges, setChallenges] = useState([
    { 
      id: 1, 
      month: 'June', 
      description: 'First Challenge', 
      status: 'complete', 
      about: 'this is special', 
      createdDate: '1/4/2025', 
      finishedDate: '1/4/2005', 
      deadline: '1/4/2005' 
    }
  ]);
  const [error, setError] = useState(null);  // To handle any errors

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get('http://localhost:8080/challenges');
        setChallenges(response.data);
      } catch (err) {
        setError("Failed to fetch challenges.");
        console.error("Error fetching challenges:", err);
      }
    };
    fetchChallenges();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="display-1 text-center p-1 mt-3 text-white">Monthly Challenge</h1>
      
      {/* Show error message if the API call fails */}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      <AddChallenge />
      <ChallengeLists challenge={challenges} />
    </div>
  );
}

export default App;
