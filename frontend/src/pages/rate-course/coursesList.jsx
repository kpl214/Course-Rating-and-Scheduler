import { useGetCourses } from "./useGetCourses";

export const CoursesList = () => {

  const { courses } = useGetCourses();
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Course ID</th>
          <th>Course Name</th>
        </tr>
      </thead>
      <tbody>
      {courses.map((c) => {
        return (
          <tr key={c.code}>
            <td><a href={`/rateCourse/${c.code}`} className="link">{c.code}</a></td>
            <td>{c.name}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};
