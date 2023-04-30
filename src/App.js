import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import About from "./pages/About.js";
import Admin from "./pages/Admin.js";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import ContactInfo from "./pages/ContactInfo";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Dashboard /> */}
        <Routes>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="admin" element={<Admin />} />
          <Route path="contact-info" element={<ContactInfo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
