import { useId } from "react";

import styles from "./TextField.module.css";

const TextField = ({ register, error, label, name, rules = {}, ...props }) => {
    const id = useId();

    return (
        <div className={styles.wrapper}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}
            <input {...register(name, rules)} {...props} id={id} />
            {error && <p className={styles.error}>{error.message}</p>}
        </div>
    );
};

export default TextField;