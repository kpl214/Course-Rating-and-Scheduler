import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./components/pages/home";
import About from "./components/pages/about";
import RateCourse from './components/pages/rateCourse';
import { Navbar } from './components/navbar';
import Contact from './components/pages/contact';

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
            <Route path="/rateCourse" element={<RateCourse />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}