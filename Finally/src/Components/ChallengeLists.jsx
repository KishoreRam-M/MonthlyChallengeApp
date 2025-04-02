import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";

const ChallengeLists = ({ challenge = [] }) => {
  const [modal, setModal] = useState({ show: false, title: "", message: "" });
  const [loading, setLoading] = useState(null);

  // If no challenges available
  if (!Array.isArray(challenge) || challenge.length === 0) {
    return <p className="text-center text-white fs-4">🚀 No challenges available</p>;
  }

  // ✅ Mark Challenge as Complete
  const complete = async (id) => {
    setLoading(id);
    try {
      const response = await axios.put(`http://localhost:8080/challenges/${id}/complete`);

      console.log("✅ API Response:", response.data);

      if (response.status === 200) {
        showModal("✅ Success", "Challenge marked as completed!");
        setTimeout(() => window.location.reload(), 1000);
      } else {
        showModal("⚠️ Warning", "Challenge could not be completed.");
      }
    } catch (error) {
      console.error("❌ API Error:", error);
      showModal("❌ Error", error.response?.data?.message || "Failed to complete challenge.");
    }
    setLoading(null);
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

  // ✅ Delete Challenge
  const deleteChallenge = async (id) => {
    if (!window.confirm("Are you sure you want to delete this challenge?")) return;

    try {
      await axios.delete(`http://localhost:8080/challenges/${id}`);
      showModal("🗑️ Deleted", "Challenge has been removed!");
      setTimeout(() => window.location.reload(), 1000);
    } catch (error) {
      console.error("❌ API Error:", error);
      showModal("❌ Error", error.response?.data?.message || "Failed to delete challenge.");
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
            <div className="card bg-dark text-white border border-warning shadow-lg p-3 rounded h-100">
              <h3 className="text-warning fw-bold">{item.month}</h3>
              <p className="fs-5"><strong>Description:</strong> {item.description}</p>
              <p className="fs-5"><strong>About:</strong> {item.about}</p>
              <p className="fs-5"><strong>Created At:</strong> {item.createdDate || "N/A"}</p>
              <p className="fs-5"><strong>Finished At:</strong> {item.finishedDate || "N/A"}</p>
              <p className="fs-5"><strong>Deadline:</strong> {item.deadline || "N/A"}</p>

              {/* Buttons Section */}
              <div className="text-center mt-3">
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  <button className="btn btn-outline-secondary fw-bold px-4 py-2" onClick={() => status(item.id)}>
                    ⏳ Check Status
                  </button>
                  <button
                    className="btn btn-outline-info fw-bold px-4 py-2"
                    onClick={() => complete(item.id)}
                    disabled={loading === item.id}
                  >
                    {loading === item.id ? <Spinner animation="border" size="sm" /> : "✅ Complete"}
                  </button>
                  <button
                    className="btn btn-outline-danger fw-bold px-4 py-2"
                    onClick={() => deleteChallenge(item.id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
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
