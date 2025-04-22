import React, { useState } from "react";

const Report = () => {
  const [showModal, setShowModal] = useState(false);
  const [reportText, setReportText] = useState("");

  const handleSubmit = () => {
    if (reportText.trim() === "") {
      alert("Please enter a description before submitting.");
      return;
    }
    alert("Report submitted successfully!");
    setReportText("");
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Report an Issue</h1>
      <p className="mb-4 text-white-700">
        If you encounter any issues, please describe them below.
      </p>

      <button className="btn btn-warning" onClick={() => setShowModal(true)}>
        Open Report Form
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-black w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-2">Report an Issue</h2>
            <textarea
              className="w-full border p-2 mt-2 rounded"
              rows="4"
              placeholder="Describe the issue..."
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Report;
