import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLogin } from "../../redux/auth/auth-selector";

import styles from './MainMenu.module.css'

const MainMenu = () => {

    const isLogin = useSelector(selectIsLogin);

    return (
        <ul className={styles.menu}>
            <li>
                <NavLink to="/" className={styles.link}>Home page</NavLink>
            </li>
            {!isLogin && <li>
                <NavLink to="/login" className={styles.link}>Login</NavLink>
            </li>}
            {!isLogin && <li>
                <NavLink to="/register" className={styles.link}>Register</NavLink>
            </li>}
            {isLogin && <li>
                <NavLink to="/profile" className={styles.link}>Profile</NavLink>
            </li>}
            {/* <NavLink to="/login" className={styles.link}>Login</NavLink>
            <NavLink to="/register" className={styles.link}>Register</NavLink>
            <NavLink to="/profile" className={styles.link}>Profile</NavLink> */}
        </ul>
    )
};

export default MainMenu;