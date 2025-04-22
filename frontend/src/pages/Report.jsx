import React, { useState } from "react";

const Report = () => {
  const [showModal, setShowModal] = useState(false);
  const [reportText, setReportText] = useState("");

  const handleSubmit = async () => {
    if (reportText.trim() === "") {
      alert("Please enter a description before submitting.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: reportText }),
      });

      if (response.ok) {
        alert("Report submitted successfully!");
        setReportText("");
        setShowModal(false);
      } else {
        const data = await response.json();
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Report an Issue</h1>
      <p className="mb-4 text-white-700">
        If you encounter any issues, please describe them below.
      </p>

      {/* Open Report Modal Button */}
      <button
        className="btn bg-[#004aad] text-white hover:bg-[#f57c00]"
        onClick={() => setShowModal(true)}
      >
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
                className="btn bg-[#f57c00] text-white hover:bg-[#004aad]"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn bg-[#004aad] text-white hover:bg-[#f57c00]"
                onClick={handleSubmit}
              >
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
