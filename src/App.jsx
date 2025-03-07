import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import Layout from "./components/Layout";
import ChatBot from "./pages/ChatBot";

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/chat" element={<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
