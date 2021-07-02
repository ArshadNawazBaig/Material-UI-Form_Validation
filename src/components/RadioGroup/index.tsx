import Radio from '@material-ui/core/Radio';
import { RadioGroup as MuiRadioGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioGroup(props: any) {
    const { name, label, value, onChange, error = null, items } = props;

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <MuiRadioGroup row aria-label={label} name={name} value={value} onChange={onChange}>
                {items.map((item: any, index: number) => (
                    <FormControlLabel key={index} value={item.id} control={<Radio />} label={item.title} />
                ))}
            </MuiRadioGroup>
        </FormControl>
    );
}