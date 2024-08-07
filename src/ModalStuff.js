import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SchoolIcon from '@mui/icons-material/School';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Button, Icon } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalStuff({ open, choice, onClose }) {
  const [updatedStats, setUpdatedStats] = useState({
    strength: 0,
    agility: 0,
    intelligence: 0,
    happiness: 0,
  });

  const handleClose = () => {
    const newStats = { ...updatedStats };

    for (const stat of choice.stats) {
      switch (stat.stat) {
        case 'strength':
          newStats.strength += stat.value;
          break;
        case 'agility':
          newStats.agility += stat.value;
          break;
        case 'intelligence':
          newStats.intelligence += stat.value;
          break;
        case 'happiness':
          newStats.happiness += stat.value;
          break;
        default:
          break;
      }
    }

    setUpdatedStats(newStats);
    console.log(newStats);

    onClose(newStats);
    setUpdatedStats({ strength: 0, agility: 0, intelligence: 0, happiness: 0 });
  };

  const getIcon = (stat) => {
    switch (stat) {
        case 'strength':
        return <FitnessCenterIcon />;
        case 'agility':
        return <DirectionsRunIcon />;
        case 'intelligence':
        return <SchoolIcon />;
        case 'happiness':
        return <SentimentSatisfiedAltIcon />;
        default:
        return null;
    }
}

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Stats Changed!
          </Typography>
          {choice.stats.map((stat, index) => (
            <div key={index}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Icon>{getIcon(stat.stat)}</Icon>: {stat.value > 0 ? '+' : ''}
                {stat.value}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {stat.reasoning}
              </Typography>
            </div>
          ))}
          <Button onClick={handleClose}>Continue</Button>
        </Box>
      </Modal>
    </div>
  );
}
