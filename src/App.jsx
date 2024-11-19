
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Staff from "./pages/Staff";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Router>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <Sidebar sidebarToggle={sidebarToggle} />
      <div className=" ">
        <main className="ml-64 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
