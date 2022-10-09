import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvider";
import { MainWindow, TextAndButtons, FlexColumns, StyledButton, StyledH2 } from "./Home.styled";

export const LoginOrRegister = () => {
    const { isAuth } = useContext(AuthContext)
    return (
        <MainWindow>
            <TextAndButtons>
                <StyledH2>Enjoy your <span>book</span> everyday with us</StyledH2>
                {!isAuth && <FlexColumns>
                    <Link to="register">
                        <StyledButton>Register</StyledButton>
                    </Link>
                    <Link to="login">
                        <StyledButton bg='#FFF2E0' color='#220901' brd='#220901'>Login</StyledButton>
                    </Link>
                </FlexColumns>}
            </TextAndButtons>
        </MainWindow>
    );
}