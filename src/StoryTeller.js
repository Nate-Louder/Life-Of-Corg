import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import "./StoryTeller.css";

const StoryTeller = ({ story, name, onStoryEnd }) => {
    const [currentPage, setCurrentPage] = useState(0);
    
    useEffect(() => {
        if (story && story.length > 0) {
            setCurrentPage(0);
        }
    }, [story]);

    const handleNext = () => {
        if (story && currentPage < story.length - 2) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(currentPage + 1);
            onStoryEnd();
        }
    };

    const parseStory = (storyText) => {
        if (!storyText) return '';
        const boldRegex = /\[(.*?)\]/g;
        const parsedStory = storyText.replace(/<name>/g, name).replace(boldRegex, "<strong>$1</strong>");
        return <Typography className="story-text" dangerouslySetInnerHTML={{ __html: parsedStory }} />;
    };

    if (!story || story.length === 0) {
        return <Typography className="story-text">No story available.</Typography>;
    }

    return (
        <div className="story-teller">
            {parseStory(story[currentPage])}

            {currentPage < story.length - 1 ? (
                <Button variant="contained" color="primary" onClick={handleNext} className="next-button">
                    Next
                </Button>
            ) : null}
        </div>
    );
};

export default StoryTeller;
