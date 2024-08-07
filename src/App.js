import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Game from './Game';
import Home from './Home';

function App() {
  const startingStats = {
    strength: 0,
    agility: 5,
    intelligence: 0,
    happiness: 0,
  };
  const [name, setName] = useState("");
  const [stats, setStats] = useState(startingStats);
  const [progress, setProgress] = useState("start");

  const handleNext = (name) => {
    setStats(startingStats);
    setName(name);
  }

  const handleStatChange = (strength, agility, intelligence, hapiness) => {
    setStats({
      strength: stats.strength + strength,
      agility: stats.agility + agility,
      intelligence: stats.intelligence + intelligence,
      happiness: stats.happiness + hapiness,
    });
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home onNext={(name) => handleNext(name)} />} />
          <Route path="/game" element={<Game name={name} stats={stats} progress={progress} setStats={handleStatChange} setProgress={setProgress} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;