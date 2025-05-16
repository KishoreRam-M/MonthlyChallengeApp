import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddChallenge = () => {
  const [month, setMonth] = useState('');
  const [description, setDescription] = useState('');
  const [about, setAbout] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate(); // ✅ Initialize useNavigate() at the top

  // Validate input before sending
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!month) {
      setError("Error: Month is required");
      return;
    }
    if (!description) {
      setError("Error: Description is required");
      return;
    }

    const challengeData = {
      month,
      description,
      about,
    };

    console.log("Sending data:", challengeData); // Debugging output

    try {
      const response = await axios.post('http://localhost:8080/challenges', challengeData);
      console.log("Challenge added:", response.data);

      setSuccess("Challenge added successfully!");
      setError(null);

      // Reset form fields after successful submission
      setMonth('');
      setDescription('');
      setAbout('');

      // ✅ Navigate to "/challenges" after 1 second
      setTimeout(() => navigate("/challenges"), 1000);
      
    } catch (error) {
      console.error("Error adding challenge:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Failed to add challenge. Please try again.");
    }
  };

  return (
    <div className="container-fluid text-white p-4">
      <h2 className="text-center text-warning">Add New Challenge</h2>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form className="bg-dark p-4 rounded" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="month" className="form-label">Month</label>
          <input
            type="month"
            id="month"
            className="form-control"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="about" className="form-label">About</label>
          <input
            type="text"
            id="about"
            className="form-control"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-warning w-100">Add Challenge</button>
      </form>
    </div>
  );
};

export default AddChallenge;
