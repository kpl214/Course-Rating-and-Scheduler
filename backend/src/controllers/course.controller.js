import Review from "../models/review.model.js";
import Course from "../models/course.model.js"

export const createReview = async (req, res) => {
  try {
    const { review, rating } = req.body;
    const { code: courseCode } = req.params;

    const course = await Course.findOne({code: courseCode});
    const newReview = new Review({
      review,
      rating,
      courseId: course._id,
      vote: 0,
    });

    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.log("Error in course controller: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getCourses = async (req, res) => {
  try {

    const courses = await Course.find();
    res.status(200).json(courses);

  } catch (error) {
    console.log("Error in course controller: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getReviews = async (req, res) => {
  try {
    const { code: courseCode } = req.params;

    const course = await Course.findOne({code: courseCode});
    const reviews = await Review.find({courseId: course._id});
    res.status(200).json(reviews);

  } catch (error) {
    console.log("Error in course controller: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const upvoteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { $inc: { vote: 1 } },
      { new: true }
    );
    console.log(review);
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const downvoteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { $inc: { vote: -1 } },
      { new: true }
    );
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};