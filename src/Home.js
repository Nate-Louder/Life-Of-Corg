import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Text from '@mui/material/Typography';
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
        navigate('/game');
    };

    return (
        <div className="Home">
            <h1>Welcome to Life of Corg</h1>
            <div className="begin-game">
                <Text>Please Enter the Name You woul like to be given</Text>
                <TextField label="Name" onChange={(e) => setInputName(e.target.value)}
                ></TextField>
                <Button variant="contained" onClick={handleStartGame}>Begin The Game</Button>
            </div>
        </div>
    );
}

export default Home;
