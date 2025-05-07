import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

import { fields, defaultValues } from "./fields";

const LoginForm = ({ submitForm }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues,
    });

    const onSubmit = (values) => {
        submitForm(values);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField register={register} error={errors.email} {...fields.email} />
            <TextField
                register={register}
                error={errors.password}
                {...fields.password}
            />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default LoginForm;