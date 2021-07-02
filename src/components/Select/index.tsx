import { Select as MuiSelect, MenuItem, Box } from '@material-ui/core';
import { Error } from '@material-ui/icons';
import useStyles from './styles';

export default function Select(props: any) {
    const classes = useStyles();
    const { name, value, onChange, error = null, options } = props;

    return (
        <Box className={classes.root}>
            <MuiSelect fullWidth variant="outlined" name={name} value={value} onChange={onChange} {...(error && { error: true })}>
                <MenuItem value="" disabled>None</MenuItem>
                {options.map((option: any, index: any) => (
                    <MenuItem key={index} value={option.value}>{option.title}</MenuItem>
                ))}
            </MuiSelect>
            {error &&
                <Box className={classes.errorLabel}><Error /> {error}</Box>
            }
        </Box>
    );
}