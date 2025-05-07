import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectIsLogin } from "../../../redux/auth/auth-selector";

const ProtectedRoute =()=>{

    const isLogin = useSelector(selectIsLogin);

    if (!isLogin) return <Navigate to="/login" />

    return <Outlet />
    
};

export default ProtectedRoute;