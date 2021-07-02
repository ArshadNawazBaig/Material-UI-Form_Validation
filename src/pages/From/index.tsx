import { Button } from "@material-ui/core";
import Input from "../../components/Input";
import RadioGroup from "../../components/RadioGroup";
import CheckBox from "../../components/CheckBox";
import Select from "../../components/Select";
import { useForm, Form } from './../../components/useForm';

const items = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'others', title: 'Others' },
]

const options = [
    { value: 'cricket', title: 'Cricket' },
    { value: 'football', title: 'Football' },
    { value: 'others', title: 'Others' },
]
export const FormExample = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        gender: 'male',
        hobbies: '',
        isProgrammer: false
    }
    const validate = (fieldValues = values) => {
        let temp: any = { ...errors };
        if ('firstName' in fieldValues) {
            temp.firstName = fieldValues.firstName ? "" : "First name field is required";
        }
        if ('lastName' in fieldValues) {
            temp.lastName = fieldValues.lastName ? "" : "Last name field is required";
        }
        if ('hobbies' in fieldValues) {
            temp.hobbies = fieldValues.hobbies ? "" : "Select field is required";
        }
        setErrors({ ...temp });

        if (fieldValues == values) {
            return Object.values(temp).every(x => x == "")
        }
    }
    const { values, errors, setErrors, handleInputChange }: any = useForm(initialValues, true, validate);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validate()) {
            // alert(1)
            console.log(values)
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Input
                name="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
                placeholder="First Name"
            />
            <Input
                name="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
                placeholder="Last Name"
            />
            <RadioGroup name="gender" label="Gender" value={values.gender} onChange={handleInputChange} items={items} />

            <Select name="hobbies" label="Hobbies" value={values.hobbies} onChange={handleInputChange} options={options} error={errors.hobbies} />
            <CheckBox name="isProgrammer" label="Programmer" value={values.isProgrammer} onChange={handleInputChange} />
            <Button variant="contained" type="submit" color="primary">Submit</Button>
        </Form>
    );
};
