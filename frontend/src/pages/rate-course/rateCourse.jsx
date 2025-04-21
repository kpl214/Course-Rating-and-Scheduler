import { useState } from "react";
import { useRateCourse } from "./useRateCourse.js";
import { useParams } from "react-router-dom";

export const RateCourse = () => {
  const [comment, setComment] = useState("");
  const { code } = useParams();
  const { postComment, reviews } = useRateCourse(code);
  const onCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handlePostClick = () => {
    postComment(comment);
    setComment("");
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <textarea
        className="textarea"
        placeholder="Post"
        value={comment}
        onChange={onCommentChange}
      ></textarea>
      <button className="btn btn-xl" onClick={handlePostClick}>
        Post
      </button>
      <table className="table">
      <thead>
        <tr>
          <th>Review</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
      {reviews.map((review) => {
        return (
          <tr key={review._id}>
            <td>{review.review}</td>
            <td>{review.rating}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
    </div>
  );
};
