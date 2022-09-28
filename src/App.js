import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
