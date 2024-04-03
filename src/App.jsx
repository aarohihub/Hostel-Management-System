import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home, About, Facilities, Rooms, Gallery, Contacts, Login, Signup } from "./Components/pages";
import Footer from "./Components/pages/Footer";


function App(){
  return <div className="App">
    
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/facilities" element={<Facilities />}/>
      <Route path="/rooms" element={<Rooms />}/>
      <Route path="/gallery" element={<Gallery />}/>
      <Route path="/contacts" element={<Contacts />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
    {/* <Footer /> */}
  </div>;
}

export default App;