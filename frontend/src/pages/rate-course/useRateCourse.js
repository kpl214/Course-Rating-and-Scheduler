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

  const upvoteReview = async (reviewId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/courses/reviews/${reviewId}/upvote`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      await fetchData();
    } catch (error) {
      console.error("Upvote failed:", error);
    }
  };

  const downvoteReview = async (reviewId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/courses/reviews/${reviewId}/downvote`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      await fetchData();

    } catch (error) {
      console.error("Downvote failed:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    postComment,
    reviews,
    upvoteReview,
    downvoteReview,
  };
};
