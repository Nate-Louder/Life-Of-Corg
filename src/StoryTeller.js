import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";

const StoryTeller = ({ story, onStoryEnd }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        if (currentPage < story.length - 2) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(currentPage + 1);
            onStoryEnd();
        }
    };

    return (
        <div className="StoryTeller">
            <Typography>{story[currentPage]}</Typography>

            {currentPage < story.length - 1 ? <Button onClick={handleNext}>Next</Button> : null}
        </div>
    );
};

export default StoryTeller;
