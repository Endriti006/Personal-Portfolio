import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './data/Pages/Home/Homescreen';
import Navbar from './data/Pages/Home/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
