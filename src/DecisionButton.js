import { Button, Typography } from '@mui/material';


const DecisionButton = ({ option, stats, onClick }) => {

    const determineIfClickable = () => {
        if (!option.requirements) {
            return false;
        }
        console.log(option.requirements);
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
        onClick();
    };

    return (
    <Button size="small" color="primary" disabled={determineIfClickable()} onClick={handleClick}>
        <Typography>{option.text}{getRequirements()}</Typography>
    </Button>
    )
}

export default DecisionButton;