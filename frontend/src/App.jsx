import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import RateCourse from './pages/rateCourse';

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/rate-course">Rate a Course</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rate-course" element={<RateCourse />} />
      </Routes>
    </Router>
  );
}