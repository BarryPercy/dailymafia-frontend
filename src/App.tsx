import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './views/Auth/Register';
import Login from './views/Auth/Login';
import TopBar from './components/NavBar/TopBar';
import Home from './views/Home/Home';

function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
