import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Navbar } from "./Components/Navbar";
import {
  Home,
  About,
  Facilities,
  Rooms,
  Gallery,
  Contacts,
  Login,
  Signup,
} from "./pages";

import Footer from "./pages/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer position="top-center" />
      <Footer />
    </Router>
  );
}

export default App;
