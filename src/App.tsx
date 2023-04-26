import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from './components/NavBar/TopBar';
import Home from './views/Home/Home';

function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
