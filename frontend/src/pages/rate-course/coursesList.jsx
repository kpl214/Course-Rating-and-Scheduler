import { useGetCourses } from "./useGetCourses";
import { Link } from "react-router-dom";

//need to fix the course name at the top of the respective rating page

export const CoursesList = () => {
  const { courses } = useGetCourses();
  
  return (
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((c) => (
          <Link
            to={`/rateCourse/&{c.code}`}
            key={c.code}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-[#004aad]">{c.name}</h2>
            <p className="text-gray-600 mt-1">Course ID: {c.code}</p>
          </Link>
        ))}
      </div>
    // <table className="table">
    //   <thead>
    //     <tr>
    //       <th>Course ID</th>
    //       <th>Course Name</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //   {courses.map((c) => {
    //     return (
    //       <tr key={c.code}>
    //         <td><a href={`/rateCourse/${c.code}`} className="link">{c.code}</a></td>
    //         <td>{c.name}</td>
    //       </tr>
    //     );
    //   })}
    //   </tbody>
    // </table>
  );
};
