import { useState } from "react";

export function useForm(initialValues: any, validateOnChange = false, validate: any) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange) {
            validate({
                [name]: value
            })
        }
    }
    return {
        values,
        handleInputChange,
        errors,
        setErrors
    }
};

export function Form(props: any) {
    const { children, ...other } = props;
    return (
        <form {...other}>
            {children}
        </form>
    )
}
