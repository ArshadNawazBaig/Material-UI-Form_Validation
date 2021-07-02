import { Checkbox as MuiCheckbox, FormControlLabel } from '@material-ui/core';

export default function Checkbox(props: any) {
    const { name, label, value, onChange, error = null, } = props;
    const convertDefaultEventPara = (name: any, value: any) => ({
        target: {
            name,
            value
        }
    })

    return (
        <FormControlLabel control={<MuiCheckbox name={name} checked={value} onChange={e => onChange(convertDefaultEventPara(name, e.target.checked))} color="primary" />} label={label} />
    );
}