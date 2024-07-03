import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./views/header";
import About from "./components/about";
import LandingPage from "./views/landingPage";
function App() {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/header" element={<Header />} />
        <Route path="/about" element={<About />} />
        </Routes>
      </Router>
  );
}

export default App;
