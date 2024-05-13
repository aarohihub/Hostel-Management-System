// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './Components/Sidebar';
// import Home from './Components/Home';
// import Tasks from './Components/Tasks';
// import Salary from './Components/Salary';
// // import Logout from './Logout';
// import './App.css'

// const App = () => {
//   return (
//     <Router>
//     <div className="app-container"> {/* Wrapper div for the entire layout */}
//       <Sidebar /> {/* Sidebar on the left */}
//       <div className="content-container"> {/* Container for the content */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/tasks" element={<Tasks />} />
//           <Route path="/salary" element={<Salary />} />
//           <Route path="/logout" element={<Logout />} />
//         </Routes>
//       </div>
//     </div>
//   </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Tasks from './Components/Tasks';
import Salary from './Components/Salary';
// import Logout from './Logout';
import './App.css'

const App = () => (
  <Router>
    <div className="app">
      <Sidebar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
//        <Route path="/tasks" element={<Tasks />} />
//        <Route path="/salary" element={<Salary />} />
          {/* <Route path="/logout" element={<LogOut />} /> */}
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;

