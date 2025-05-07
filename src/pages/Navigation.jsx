import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import RegisterPage from "./RegisterPage/RegisterPage";
import LoginPage from "./LoginPage/LoginPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

import ProtectedRoute from "../shared/components/ProtectedRoute/ProtectedRoute";
import PublicRoute from "../shared/components/PublicRoute/PublicRoute";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route element={<PublicRoute />}>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
};

export default Navigation;