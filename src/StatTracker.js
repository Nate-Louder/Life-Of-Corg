import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SchoolIcon from '@mui/icons-material/School';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Card, CardContent, Icon, Typography } from '@mui/material';
import React from 'react';
import './StatTracker.css';

const StatTracker = ({ stats }) => {
    return (
        <Card className="stat-tracker-card" sx={{background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", color: "white", borderRadius: "20px"}}>
            <CardContent sx={ {display: "flex", flexDirection: "column", gap: "16px"}}>
                <Typography variant="h5" className="stats-title">Stats</Typography>
                <div className='stats'>
                    <div className="stat">
                        <Icon><FitnessCenterIcon /></Icon>
                        <Typography fontWeight={600} className="stat-value"> {stats.strength}</Typography>
                    </div>
                    <div className="stat">
                        <Icon><DirectionsRunIcon /></Icon>
                        <Typography fontWeight={600} className="stat-value"> {stats.agility}</Typography>
                    </div>
                    <div className="stat">
                        <Icon><SchoolIcon /></Icon>
                        <Typography fontWeight={600} className="stat-value"> {stats.intelligence}</Typography>
                    </div>
                    <div className="stat">
                        <Icon><SentimentSatisfiedAltIcon /></Icon>
                        <Typography fontWeight={600} className="stat-value"> {stats.happiness}</Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default StatTracker;
