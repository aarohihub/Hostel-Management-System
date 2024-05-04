import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Messages from './Component/Message';
import Bills from './Component/Bills';
import Room from './Component/Room';
import Setting from './Component/Settings';
import Request from'./Component/Request';
import Sidebar from './Component/Sidebar';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Sidebar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/room" element={<Room />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/request" element={<Request />} />
          {/* <Route path="/logout" element={<LogOut />} /> */}
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
