
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
    const [currentTitle, setCurrentTitle] = useState(story.chapters[0].title);
    const [currentImage, setCurrentImage] = useState(story.chapters[0].image);
    const [currentStory, setCurrentStory] = useState(story.chapters[0].story);
    const [currentChoices, setCurrentChoices] = useState(story.chapters[0].options);
    const [choiceMade, setChoiceMade] = useState({stats: []});
    const [optionsAreAvailable, setOptionsAreAvailable] = useState(false);

    // Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const handleNext = (newStats) => {
        setStats(newStats.strength, newStats.agility, newStats.intelligence, newStats.happiness);
        setOpen(false);
        setOptionsAreAvailable(false);
        const nextChapter = story.chapters[nextChaptered];
        console.log(nextChaptered);
        setCurrentChapter(nextChapter.chapter);
        setCurrentTitle(nextChapter.title);
        setCurrentImage(nextChapter.image);
        setCurrentStory(nextChapter.story);
        setCurrentChoices(nextChapter.options);
    }

    const getBgImage = () => {
        switch (currentChapter) {
            case 1:
                return 'adoption-home';
            default: 
                return 'city';
        }
    }

    return (
        <div className={`Game ${getBgImage()}`}>
            <StatTracker stats={stats}/>
            <Card>
                <CardContent><Typography>
                You Are: {name}
                    </Typography></CardContent>
            </Card>
            <Card sx={{width: 900}}>
                    <CardContent>
                        {optionsAreAvailable}
                        {currentTitle}
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="500px"
                        image={currentImage}

                    />
                    <CardContent>
                        <StoryTeller story={currentStory} onStoryEnd={() => {setOptionsAreAvailable(true)}}/>
                    </CardContent>
                {optionsAreAvailable ? <CardActions>
                    <div className='choices'>
                        <Typography variant="h6">Choose Your Path:</Typography>
                        {currentChoices.map((choice, index) => (
                            <DecisionButton option={choice} stats={stats} onClick={() => {
                                setChoiceMade(choice);
                                setNextChaptered(choice.nextChapter - 1);
                                handleOpen();
                            }}>
                                {choice.text}
                            </DecisionButton>
                        ))}
                    </div>
                </CardActions>: null}
            </Card>
            <ModalStuff open={open} choice={choiceMade} onClose={handleNext}/>
        </div>
    );
}

export default Game;
