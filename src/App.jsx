import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Badminton from "./components/Badminton"; 
import Game from "./components/Game"; 
import OnePiece from "./components/OnePiece"; 

const App = () => {
  return (
    <Router basename="/portofolio">
      <div 
        className="h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('/BgWPP.jpeg')" }} 
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/badminton" element={<Badminton />} />
          <Route path="/game" element={<Game />} />
          <Route path="/onepiece" element={<OnePiece />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
