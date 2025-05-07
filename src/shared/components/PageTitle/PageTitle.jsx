
import styles from "./PageTitle.module.css";

const PageTitle = ({ children }) => {
    return (
        <h1 className={styles.heading}>{children}</h1>
    )
};

export default PageTitle;