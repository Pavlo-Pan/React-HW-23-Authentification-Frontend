import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectIsLogin } from "../../../redux/auth/auth-selector";

const PublicRoute =()=>{

    const isLogin = useSelector(selectIsLogin);

    if (isLogin) return <Navigate to="/profile" />

    return <Outlet />

};

export default PublicRoute;