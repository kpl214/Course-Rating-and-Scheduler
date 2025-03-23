import { useState } from "react";
import { useRateCourse } from "./useRateCourse.js";

const RateCourse = () => {
  const [comment, setComment] = useState();
  const { postComment } = useRateCourse();
  const onCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handlePostClick = () => {
    postComment(comment);
  };

  return (
    <div>
      <textarea
        className="textarea"
        placeholder="Post"
        onChange={onCommentChange}
      ></textarea>
      <button className="btn btn-xl" onClick={handlePostClick}>
        Post
      </button>
    </div>
  );
};

export default RateCourse;
