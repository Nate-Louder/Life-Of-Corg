import { Card, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPage.css';
import StatTracker from './StatTracker';
import StoryDescriptionImage from './StoryDescriptionImage';

const ResetPage = ({ storyList, stats }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Life-Of-Corg');
    }



    return (
        <div className="ResetPage">
            <Card className='overview' sx={{ position: 'relative', overflow: 'visible' }}>
                <StatTracker final={true} stats={stats} />
                <CardContent>
                    <Typography variant='h3' sx={{ color: "#FE6B8B" }}>Game Over</Typography>
                    <Typography variant='h5' sx={{}}>Here is a summary of your journey:</Typography>
                    <div className="chapter-wrapper">
                        <div className="chapters">
                            {storyList.map((chapter, index) =>
                                <StoryDescriptionImage image={chapter.image} title={chapter.title} />)}
                        </div>
                    </div>
                </CardContent>
                <Button className="restart-button" variant="outlined" onClick={handleClick}>Go Back to Start</Button>
            </Card>

        </div>
    );
}

export default ResetPage;
