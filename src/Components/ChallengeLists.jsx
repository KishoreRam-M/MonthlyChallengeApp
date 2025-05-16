import axios from "axios";
import React, { useState } from "react";

const ChallengeLists = ({ challenge = [] }) => {
  const [modal, setModal] = useState({ show: false, title: "", message: "" });
  const [loading, setLoading] = useState(null);

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

  // ✅ Show Modal
  const showModal = (title, message) => {
    setModal({ show: true, title, message });
  };

  // Custom Modal Component instead of using React Bootstrap
  const CustomModal = () => {
    if (!modal.show) return null;
    
    return (
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modal.title}</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setModal({ ...modal, show: false })}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{modal.message}</p>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-dark" 
                onClick={() => setModal({ ...modal, show: false })}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Custom Spinner Component
  const LoadingSpinner = () => (
    <div className="spinner-border spinner-border-sm" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );

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
                  <button 
                    className="btn btn-outline-secondary fw-bold px-4 py-2" 
                    onClick={() => status(item.id)}
                  >
                    ⏳ Check Status
                  </button>
                  <button
                    className="btn btn-outline-info fw-bold px-4 py-2"
                    onClick={() => complete(item.id)}
                    disabled={loading === item.id}
                  >
                    {loading === item.id ? <LoadingSpinner /> : "✅ Complete"}
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

      {/* Custom Modal (replacing React Bootstrap Modal) */}
      <CustomModal />
      
      {/* Modal backdrop when showing */}
      {modal.show && <div className="modal-backdrop show"></div>}
    </div>
  );
};

export default ChallengeLists;