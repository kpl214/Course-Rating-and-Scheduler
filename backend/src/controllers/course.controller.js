import Review from "../models/review.model.js";
import Course from "../models/course.model.js"

export const createReview = async (req, res) => {
  try {
    const { review, rating } = req.body;
    const { id: courseId } = req.params;

    const course = await Course.findById(courseId);
    const newReview = new Review({
      review,
      rating,
      courseId: course._id,
    });

    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.log("Error in course controller: ", error.message);
    res.status(500).json({ error: error.message });
  }
};
