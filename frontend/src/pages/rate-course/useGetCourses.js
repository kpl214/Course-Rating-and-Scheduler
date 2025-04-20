import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthInfo } from "@propelauth/react";


export const useGetCourses = () => {
  const [courses, setCourses] = useState([]);
  const { accessToken } = useAuthInfo();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/courses/all",{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setCourses(res.data);
    };

    fetchData();
  }, []);

  return {
    courses,
  };
};
