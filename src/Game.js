import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react';
import DecisionButton from './DecisionButton.js';
import './Game.css';
import ModalStuff from './ModalStuff.js';
import StatTracker from './StatTracker.js';
import { story } from './story.js';
import StoryTeller from './StoryTeller.js';

const Game = ({name, stats, setStats, setProgress}) => {

    const [currentChapter, setCurrentChapter] = useState(1);
    const [nextChaptered, setNextChaptered] = useState(0);
    const [currentTitle, setCurrentTitle] = useState(story.chapters[0].title || '');
    const [currentImage, setCurrentImage] = useState(story.chapters[0].image || '');
    const [currentStory, setCurrentStory] = useState(story.chapters[0].story || []);
    const [currentChoices, setCurrentChoices] = useState(story.chapters[0].options || []);
    const [choiceMade, setChoiceMade] = useState({stats: []});
    const [optionsAreAvailable, setOptionsAreAvailable] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const handleNext = (newStats) => {
        let nextChapter;
        if (nextChaptered === -1) {
            setStats(-stats.strength, -stats.agility, -stats.intelligence, -stats.happiness);
            nextChapter = story.chapters[0];
        }
        else {
            setStats(newStats.strength, newStats.agility, newStats.intelligence, newStats.happiness);
            nextChapter = story.chapters[nextChaptered];
        }
        setOpen(false);
        setOptionsAreAvailable(false);
        setCurrentChapter(nextChapter.chapter);
        setCurrentTitle(nextChapter.title || '');
        setCurrentImage(nextChapter.image || '');
        setCurrentStory(nextChapter.story || []);
        setCurrentChoices(nextChapter.options || []);
    };

    const getBgImage = () => {
        switch (currentChapter) {
            case 1:
                return 'background1';
            default: 
                return 'background1';
        }
    };

    return (
        <div className={`Game ${getBgImage()}`}>
            <Card className="player-card" sx={{borderRadius: "20px"}}>
                <CardContent sx={{alignItems: "center", display: "flex", gap: ".5rem", justifyContent: "center"}}>
                    <Typography variant="h4" sx={{fontWeight: 600, textAlign: "center"}}>
                        The Adventures of
                    </Typography>
                    <Typography variant="h4" color={"#FE6B8B"} sx={{fontWeight: 600, textAlign: "center"}}>
                        {name}
                    </Typography>
                </CardContent>
            </Card>
            <Card className="story-card" sx={{overflow: "visible", borderRadius: "20px"}}>
                <StatTracker stats={stats}/>
                <CardContent>
                    <Typography variant="h4" fontWeight={700} className="story-title" color={'#FF8E53'}>
                        {currentTitle}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height="450"
                    image={currentImage}
                    className="story-image"
                />
                <CardContent>
                    <StoryTeller story={currentStory} name={name} onStoryEnd={() => {setOptionsAreAvailable(true)}}/>
                </CardContent>
                {optionsAreAvailable && (
                    <CardActions className="choices-container">
                        {currentChoices.map((choice, index) => (
                            <DecisionButton 
                                key={index}
                                option={choice} 
                                stats={stats} 
                                onClick={() => {
                                    setChoiceMade(choice);
                                    setNextChaptered(choice.nextChapter);
                                    handleOpen();
                                }}
                                className="decision-button"
                            >
                                {choice.text}
                            </DecisionButton>
                        ))}
                    </CardActions>
                )}
            </Card>
            <ModalStuff open={open} choice={choiceMade} onClose={handleNext}/>
        </div>
    );
};

export default Game;
