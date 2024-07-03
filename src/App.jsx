import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/views/header";

function App() {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        
        </Routes>
      </Router>
  );
}

export default App;
