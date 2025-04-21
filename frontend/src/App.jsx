import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import { CoursesList } from "./pages/rate-course/coursesList";
import { RateCourse } from "./pages/rate-course/rateCourse";
import { Navbar } from "./components/navbar";
import Contact from "./pages/contact";
import Report from "./pages/Report";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/coursesList" element={<CoursesList />} />
            <Route path="/report" element={<Report />} />
            <Route path="/rateCourse/:code" element={<RateCourse />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
