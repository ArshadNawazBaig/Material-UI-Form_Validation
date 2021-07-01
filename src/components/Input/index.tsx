import { Box, TextField } from '@material-ui/core'
import { Error } from '@material-ui/icons';
import useStyles from './styles';

function Input(props: any) {
    const classes = useStyles();
    const { name, label, value, onChange, error = null, placeholder } = props;
    return (
        <Box className={classes.root}>
            {label &&
                <label className={classes.label}>{label}</label>
            }
            <TextField
                name={name}
                fullWidth
                variant="outlined"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onChange}
                {...(error && { error: true })}
                className={classes.input}
            />
            {error &&
                <Box className={classes.errorLabel}><Error /> {error}</Box>
            }
        </Box>
    )
}

export default Input
