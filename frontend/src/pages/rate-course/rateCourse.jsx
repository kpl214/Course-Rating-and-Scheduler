import { useState } from "react";
import { useRateCourse } from "./useRateCourse.js";

const RateCourse = () => {
  const [comment, setComment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { postComment } = useRateCourse();
  const onCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handlePostClick = () => {
    postComment(comment);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <fieldset className="fieldset w-full max-w-3xl">
        <legend className="fieldset-legend text-lg font-semibold mb-2">Type your course code here:</legend>
          <input type="text" className="input input-bordered input-lg w-full" placeholder="Type here" />
            <p className="fieldset-label text-lg font-semibold mb-2">Ex: COP3503</p>
      </fieldset>
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
