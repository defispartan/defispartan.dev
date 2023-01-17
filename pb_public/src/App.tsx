import Home from './pages/home';
import Landing from './pages/index';
import About from './pages/about';
import Contact from './pages/contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App
