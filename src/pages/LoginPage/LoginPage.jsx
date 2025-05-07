
import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";

import Login from "../../modules/Login/Login";

const LoginPage = () => {
    return (
        <Container>
            <PageTitle>Login</PageTitle>
            <Login />
        </Container>
    )
}

export default LoginPage;