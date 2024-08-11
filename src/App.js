import React, { useEffect, useRef, useState } from 'react';
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
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const audioRef = useRef(null);

  const songs = [
    `${process.env.PUBLIC_URL}/angel-of-morn.mp3`,
    `${process.env.PUBLIC_URL}/like-prayer.mp3`
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set volume to 50%
      audioRef.current.addEventListener('ended', handleSongEnd);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleSongEnd);
      }
    };
  }, []);

  const handleSongEnd = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    } else {
      setCurrentSongIndex(0); // Loop back to the first song or handle end of playlist
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[currentSongIndex];
    }
  }, [currentSongIndex]);

  const handleNext = (name) => {
    setStats(startingStats);
    setName(name);
    if (audioRef.current) {
      audioRef.current.src = songs[currentSongIndex]; // Set the source when starting the game
      audioRef.current.play(); // Ensure the audio starts playing when starting the game
    }
  };

  const handleStatChange = (strength, agility, intelligence, happiness) => {
    setStats({
      strength: stats.strength + strength,
      agility: stats.agility + agility,
      intelligence: stats.intelligence + intelligence,
      happiness: stats.happiness + happiness,
    });
  };

  return (
    <Router>
      <div className="App">
        <audio ref={audioRef} loop={false} />
        <Routes>
          <Route path="/Life-Of-Corg" element={<Home onNext={(name) => handleNext(name)} />} />
          <Route path="/Life-Of-Corg/game" element={<Game name={name} stats={stats} progress={progress} setStats={handleStatChange} setProgress={setProgress} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
