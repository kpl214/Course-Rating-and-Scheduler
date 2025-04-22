import { useGetCourses } from "./useGetCourses";
import { useState } from "react";
import { Link } from "react-router-dom";


export const CoursesList = () => {
  const { courses } = useGetCourses();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="p-10">
      <input
        type="text"
        placeholder="Search for a course..."
        className="input input-bordered w-full mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCourses.map((c) => (
          <Link
            to={`/rateCourse/${c.code}`}
            key={c.code}
            className="bg-white rounded-xl shadow-md p-6 hover:bg-gray-200 hover:text-black transition duration-300"
          >
            <h2 className="text-xl font-semibold text-[#004aad] group-hover:text-[#003080]">{c.name}</h2>
            <p className="text-gray-600 mt-1">Course ID: {c.code}</p>
          </Link>
        ))}
      </div>
    </div>
    );
};
