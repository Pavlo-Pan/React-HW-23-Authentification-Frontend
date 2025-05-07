

import styles from "./Button.module.css"

const Button = ({ type = "button", onClick, children }) => {
    return (
        <button type={type} onClick={onClick} className={styles.btn}>
            {children}
        </button>
    );
};

export default Button;