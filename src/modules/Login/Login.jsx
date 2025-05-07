import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import LoginForm from "./LoginForm/LoginForm";

import { loginUser } from "../../redux/auth/auth-thunks";

// import { selectIsLogin } from "../../redux/auth/auth-selector";

const Login = () => {
    // const isLogin = useSelector(selectIsLogin);

    const dispatch = useDispatch();

    const onRegiserUser = data => {
        dispatch(loginUser(data));
    }

    // if (isLogin) return <Navigate to="/profile" />

    return (
        <div>
            <LoginForm submitForm={onRegiserUser} />
        </div>
    )
}

export default Login;