import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";
import Button from "../../shared/components/Button/Button";
import { logoutUser } from "../../redux/auth/auth-thunks";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await dispatch(logoutUser()).unwrap();
        navigate("/login");
    };
    return (
        <Container>
            <PageTitle>Profile</PageTitle>
            <Button onClick={handleLogout}>Logout</Button>
        </Container>
    )
}

export default ProfilePage;