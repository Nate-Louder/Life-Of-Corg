
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SchoolIcon from '@mui/icons-material/School';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Card, CardContent, Icon, Typography } from '@mui/material';
import React from 'react';
import './StatTracker.css';


const StatTracker = (stats) => {
    console.log(stats);
    return (
        <Card sx={{width: 200, position: 'fixed', right: 100, top: "50%"}}>
            <CardContent>
                        <Typography variant="h6">Stats:</Typography>
                        <div class="stat"><Icon><FitnessCenterIcon></FitnessCenterIcon></Icon><Typography>: {stats.stats.strength}</Typography></div>
                        <div class="stat">
                        <Icon><DirectionsRunIcon></DirectionsRunIcon></Icon><Typography>: {stats.stats.agility}</Typography>
                        </div>
                        <div class="stat">
                        <Icon><SchoolIcon></SchoolIcon></Icon><Typography>: {stats.stats.intelligence}</Typography>
                        </div>
                        <div class="stat">
                        <Icon><SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon></Icon><Typography>: {stats.stats.happiness}</Typography>
                        </div>
            </CardContent>
            </Card>
    );
}

export default StatTracker;