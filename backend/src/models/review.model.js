import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: false,
  },
  user_name: {
    type: String,
    required: false,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  }
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;