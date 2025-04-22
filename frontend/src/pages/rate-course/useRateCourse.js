import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthInfo } from "@propelauth/react";

export const useRateCourse = (code) => {
  const [reviews, setReviews] = useState([]);
  const { accessToken } = useAuthInfo();

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/courses/${code}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setReviews(res.data);
  };

  const postComment = async (comment, rating) => {
    await axios.post(
      `http://localhost:5000/api/courses/${code}/reviews`,
      {
        rating: rating,
        review: comment,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    await fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    postComment,
    reviews,
  };
};
