import { useState } from "react";
import { useRateCourse } from "./useRateCourse.js";
import { useParams } from "react-router-dom";

export const RateCourse = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1); // Default to 0 stars
  const { code } = useParams();
  const { postComment, reviews, upvoteReview, downvoteReview } = useRateCourse(code);

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
    <div className="flex flex-col items-center gap-5 w-full pt-12">
      <div className="text-4xl font-extrabold bg-blue-100 px-6 py-3 rounded-lg shadow-lg tracking-wide"
        style={{color: "#004aad"}}
      >
        {code}
      </div>
      <textarea
        className="textarea textarea-bordered w-full max-w-2xl p-4 text-lg"
        placeholder="Write your review..."
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

      <div className="w-full max-w-4xl space-y-6 pt-6">
        {Array.isArray(reviews) && reviews.map((review) => (
          review && (
            <div
              key={review._id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
            >
              <p className="text-gray-800 text-lg mb-3">{review.review}</p>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) =>
                  <span key={i} className="mr-1 text-xl">
                    {i < review.rating ? "⭐" : "☆"}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 mt-4">
                <button 
                  className="btn btn-sm btn-outline" 
                  onClick={() => upvoteReview(review._id)}
                >
                  🔼
                </button>

                <span className="font-medium text-gray-700"> 
                  {review.vote ?? 0} votes
                </span>

                <button 
                  className="btn btn-sm btn-outline" 
                  onClick={() => downvoteReview(review._id)}
                >
                  🔽
                </button>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};
