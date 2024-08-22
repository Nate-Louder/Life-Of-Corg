import React from 'react';
import './ResetPage.css';

const StoryDescriptionImage = ({ image, title }) => {
    const [hovered, setHovered] = React.useState(false);

    const handleHover = () => {
        setHovered(true);
    }

    return (
        <div className='chapter-rapper' onMouseEnter={handleHover}>
            <div
                className="chapter"
            >
                <span className="chapter-title">{title}</span>
                <img src={image} alt={title} className={`story-image ${hovered ? "story-image-hovered" : ""}`} ></img>
            </div>
        </div>
    );
}

export default StoryDescriptionImage