import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import NoAccess from "./components/NoAccess";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/no-access" element={<NoAccess />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
