import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        marginBottom: 30,
    },
    errorLabel: {
        position: 'absolute',
        color: "#f44336",
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        marginTop: 5,
        marginBottom: 5,
        '& svg': {
            fontSize: 18,
            marginRight: 5
        }
    },
}));

export default useStyles;