import { CardMedia, Typography } from '@mui/material';
import React from 'react';
import './ResetPage.css';

const StoryDescriptionImage = ({ image, title }) => {

    const [hovered, setHovered] = React.useState(false);

    return (
        <div 
            className="chapter"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
            <Typography>{title}</Typography>
            <CardMedia  
                component="img"
                height={hovered ? "450" : "0"}
                sx={{transition: "height 0.5s"}}
                image={image}
                className="story-image"></CardMedia>
            </div>                    
    );
}

export default StoryDescriptionImage