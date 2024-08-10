import { Button, Typography } from '@mui/material';
import './Game.css';

const DecisionButton = ({ option, stats, onClick }) => {

    const determineIfClickable = () => {
        if (!option.requirements) {
            return false;
        }
        for (const requirement of option.requirements) {
            if (stats[requirement.stat] < requirement.value) {
                return true;
            }
        }
        return false;
    }

    const getRequirements = () => {
        if (!option.requirements) {
            return '';
        }
        const requirementList = option.requirements.map((requirement, index) => (
            `(${requirement.stat}: ${requirement.value})`
        ));
        return `: Requires ${requirementList.join(', ')}`;
    }
    const handleClick = () => {
        if (determineIfClickable()) {
            return;
        }
        onClick();
    };

    return (
    <Button variant="contained" color="primary" disabled={determineIfClickable()} onClick={handleClick} className='decision-button'>
        <Typography>{option.text}{getRequirements()}</Typography>
    </Button>
    )
}

export default DecisionButton;