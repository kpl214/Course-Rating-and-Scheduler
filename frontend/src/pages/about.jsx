import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-100">
      <div className="card bg-transparent shadow-none">
        <div className="card-body">
          <h1 className="text-4xl font-bold mb-4 text-white">About This Project</h1>
          <p className="text-lg mb-4 leading-relaxed">
            Choosing college classes can be overwhelming — course descriptions are often vague, and you rarely know what you're really signing up for.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Our platform gives students a place to share first-hand experiences. Whether you want to plan your schedule more confidently or offer tips to future students, this tool helps you do just that.
          </p>

          <ul className="list-disc list-inside text-lg space-y-2 pl-4">
            <li>⭐ Leave honest star ratings based on your experience</li>
            <li>💬 Post comments about teaching style, workload, and tips</li>
            <li>📚 Help others prepare before they even register</li>
          </ul>

          <p className="text-lg mt-6 leading-relaxed">
            Built by students, for students — this app aims to bring real voices to class planning so everyone can succeed together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;