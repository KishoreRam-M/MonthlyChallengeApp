import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';

const ChallengeLists = ({ challenge }) => {
  const [modal, setModal] = useState({ show: false, title: "", message: "" });
  const [loading, setLoading] = useState(null);

  if (!challenge || !Array.isArray(challenge) || challenge.length === 0) {
    return <p className="text-center text-white fs-4">🚀 No challenges available</p>;
  }

  // ✅ Mark Challenge as Complete
  const complete = async (id) => {
    setLoading(id); // Show loading spinner
    try {
      const response = await axios.put(`http://localhost:8080/challenges/${id}/complete`);

      console.log("✅ API Response:", response); // Debugging API response

      if (response.status === 200) {
        showModal("✅ Success", "Challenge marked as completed!");

        // ⏳ Refresh Challenge List (if a reload function exists)
        setTimeout(() => window.location.reload(), 1000);
      } else {
        showModal("⚠️ Warning", "Challenge could not be completed.");
      }
    } catch (error) {
      console.error("❌ API Error:", error);
      showModal("❌ Error", error.response?.data || "Failed to complete challenge.");
    }
    setLoading(null); // Hide loading
  };

  // ✅ Get Challenge Status
  const status = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/challenges/${id}/status`);
      showModal("⏳ Challenge Status", `Current Status: ${response.data}`);
    } catch (error) {
      console.error("❌ API Error:", error);
      showModal("❌ Error", "Failed to fetch challenge status.");
    }
  };

  // ✅ Show Bootstrap Modal
  const showModal = (title, message) => {
    setModal({ show: true, title, message });
  };

  return (
    <div className="container my-4">
      <h2 className="text-center text-warning fw-bold mb-4">⚡ Challenge List</h2>
      <div className="row">
        {challenge.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card bg-dark text-white border border-warning shadow-lg p-3 rounded">
              <h3 className="text-warning fw-bold">{item.month}</h3>
              <p className="fs-5"><strong>Description:</strong> {item.description}</p>
              <p className="fs-5"><strong>About:</strong> {item.about}</p>
              <p className="fs-5"><strong>Created At:</strong> {item.createdDate || "N/A"}</p>
              <p className="fs-5"><strong>Finished At:</strong> {item.finishedDate || "N/A"}</p>
              <p className="fs-5"><strong>Deadline:</strong> {item.deadline || "N/A"}</p>

              <div className="d-flex justify-content-around mt-3">
                <button className="btn btn-outline-danger fw-bold px-4 py-2" onClick={() => status(item.id)}>
                  ⏳ Check Status
                </button>
                <button
                  className="btn btn-outline-info fw-bold px-4 py-2"
                  onClick={() => complete(item.id)}
                  disabled={loading === item.id}
                >
                  {loading === item.id ? <Spinner animation="border" size="sm" /> : "✅ Complete"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal */}
      <Modal show={modal.show} onHide={() => setModal({ ...modal, show: false })} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modal.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => setModal({ ...modal, show: false })}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChallengeLists;
