import './App.css';
import Login from './Components/Forms/Login';
import Navigation from './Components/Header/Navigation';
import HomeSectionCards from './Components/Home/HomeSectionCards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct imports

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeSectionCards />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
