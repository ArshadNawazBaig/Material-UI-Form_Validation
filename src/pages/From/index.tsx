import { Button } from "@material-ui/core";
import Input from "../../components/Input";
import { useForm, Form } from './../../components/useForm';

export const FormExample = () => {
    const initialValues = {
        firstName: '',
        lastName: ''
    }
    const validate = (fieldValues = values) => {
        let temp: any = { ...errors };
        if ('firstName' in fieldValues) {
            temp.firstName = fieldValues.firstName ? "" : "First name field is required";
        }
        if ('lastName' in fieldValues) {
            temp.lastName = fieldValues.lastName ? "" : "Last name field is required";
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
            alert(1)
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
            <Button variant="contained" type="submit" color="primary">Submit</Button>
        </Form>
    );
};
