import './App.css';
import Navbar from './pages/shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Appoinment from './pages/Appoinment/Appoinment';
import About from './pages/About/About';
import Review from './pages/Review/Review';
import Contactus from './pages/ContactUs/Contactus';
import Login from './pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appoinment" element={<Appoinment />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
