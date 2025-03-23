import axios from "axios";

export const useRateCourse = () => {
  const postComment = async (comment) => {
    await axios.post(
      "http://localhost:5000/api/courses/67df706603048d995b046fe3/reviews",
      { rating: 5, review: comment }
    );
  };

  return {
    postComment,
  };
};
