import "./App.css";

//Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import Canvas from "./pages/Home/Canvas";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download/:name" element={<Canvas />} />
          <Route path="/profile/:name" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
