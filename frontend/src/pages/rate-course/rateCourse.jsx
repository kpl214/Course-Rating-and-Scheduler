import { useState } from "react";
import { useRateCourse } from "./useRateCourse.js";
import { useParams } from "react-router-dom";

export const RateCourse = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1); // Default to 0 stars
  const { code } = useParams();
  const { postComment, reviews } = useRateCourse(code);

  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  const onRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handlePostClick = () => {
    postComment(comment, rating);
    setComment("");
    setRating();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="text-xl badge badge-soft badge-info">{code}</div>
      <textarea
        className="textarea"
        placeholder="Post"
        value={comment}
        onChange={onCommentChange}
      ></textarea>
      {/* ⭐ Star Rating Input */}
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <input
            key={star}
            type="radio"
            name="rating-2"
            value={star}
            className="mask mask-star-2 bg-orange-400"
            aria-label={`${star} star`}
            checked={rating === star}
            onChange={onRatingChange}
          />
        ))}
      </div>

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
          {reviews.map((review) => (
            <tr key={review._id}>
              <td>{review.review}</td>
              <td>{"⭐".repeat(review.rating)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
