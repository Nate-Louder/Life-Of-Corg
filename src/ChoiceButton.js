
import { Button } from '@mui/material';
import React from 'react';

const ChoiceButton = ({ choice, onClick }) => {
    return (
        <Button size="small" color="primary" onClick={onClick}>
            {choice.text}
        </Button>
    );
}