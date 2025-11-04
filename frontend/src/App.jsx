import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import NoAccess from "./components/NoAccess";
import PdfPage from "./components/pdf";
import LinkPage from "./components/link";
import VideoPage from "./components/video";
import ImagePage from "./components/image";
import ApiPage from "./components/api";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/no-access" element={<NoAccess />} />
        <Route path="/pdf" element={<PdfPage />} />
        <Route path="/link" element={<LinkPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/image" element={<ImagePage />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </Router>
  );
}
