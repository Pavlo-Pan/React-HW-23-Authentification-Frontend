import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

import { fields, defaultValues } from "./fields";

const RegisterForm = ({ submitForm }) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues,
    });

    const onSubmit = values => {
        submitForm(values);
        // console.log(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField register={register} error={errors.email} {...fields.email} />
            <TextField
                register={register}
                error={errors.password}
                {...fields.password}
            />
            <TextField
                register={register}
                error={errors.confirmPassword}
                {...fields.confirmPassword}
            />
            <Button type="submit">Register</Button>
        </form>
    )
};

export default RegisterForm;