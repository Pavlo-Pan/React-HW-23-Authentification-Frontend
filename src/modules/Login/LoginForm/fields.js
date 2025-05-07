export const fields = {
    email: {
        label: "Email",
        name: "email",
        type: "text",
        placeholder: "Email",
        rules: {
            required: "Email required",
            pattern: {
                message: "Email must contain @",
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            },
        },
    },
    password: {
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "Password",
        rules: {
            required: "Password required",
        },
    },
};

export const defaultValues = {
    email: "",
    password: "",
};