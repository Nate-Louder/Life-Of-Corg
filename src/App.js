import React, { useEffect, useRef, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Game from './Game';
import Home from './Home';
import ResetPage from './ResetPage';

function App() {
  const startingStats = {
    strength: 0,
    agility: 0,
    intelligence: 0,
    happiness: 0,
  };

  const [name, setName] = useState("");
  const [stats, setStats] = useState(startingStats);
  const [progress, setProgress] = useState("start");
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [storyList, setStoryList] = useState([]);

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
      audioRef.current.pause(); // Pause the audio before changing the source
      audioRef.current.src = songs[currentSongIndex];
      audioRef.current.load(); // Load the new audio source
      audioRef.current.play().catch((error) => {
        // Handle the error if playback fails
        console.error("Playback failed:", error);
      });
    }
  }, [currentSongIndex]);

  const handleNext = (name) => {
    setStats(startingStats);
    setStoryList([])
    setName(name);
  };

  const handledStart = () => {
    if (audioRef.current) {
      audioRef.current.src = songs[currentSongIndex];
      audioRef.current.load();
      audioRef.current.play().catch((error) => {
        console.error("Playback failed:", error);
      });
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

  const addToStoryList = (storyItem) => {
    setStoryList([...storyList, storyItem]);
    console.log(storyList);
  };

  return (
    <Router>
      <div className="App">
        <audio ref={audioRef} loop={false} />
        <Routes>
          <Route path="/Life-of-Corg" element={<Home onNext={(name) => handleNext(name) } onStartClicked={handledStart} />} />
          <Route path="/Life-of-Corg/game" element={<Game name={name} stats={stats} progress={progress} setStats={handleStatChange} setProgress={setProgress} setStoryList={addToStoryList}/>} />
          <Route path="/Life-of-Corg/overview" element={<ResetPage storyList={storyList} stats={stats}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
