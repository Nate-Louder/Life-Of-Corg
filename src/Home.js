import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({onNext}) => {

    const [inputName, setInputName] = useState("");
    const navigate = useNavigate();
    const handleStartGame = () => {
        onNext(inputName);
        if (inputName === "") {
            alert("Please enter your name");
            return;
        }
        navigate('/Life-Of-Corg/game');
    };

    return (
        <div className="Home">
            <Typography variant='h1' >Welcome to Life of Corg</Typography>
            <div className="begin-game">
                <Typography variant='h5'>Please Enter the Name You would like to be given</Typography>
                <TextField label="Name" onChange={(e) => setInputName(e.target.value)}
                ></TextField>
                <Button variant="contained" onClick={handleStartGame}>Begin The Game</Button>
            </div>
        </div>
    );
}

export default Home;
