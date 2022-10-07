import { BrowserRouter as Router, Link } from 'react-router-dom'
import { MainWindow, TextAndButtons, FlexColumns, StyledButton } from './Home.styled';

export const LoginOrRegister = () => {
    return (
        <Router>
            <MainWindow>
                <TextAndButtons>
                    <h1>Enjoy your <span>book</span> everyday with us</h1>
                    <FlexColumns>
                        <Link to="register">
                            <StyledButton>Register</StyledButton>
                        </Link>
                        <Link to="login">
                            <StyledButton bg='#FFF2E0' color='#220901' brd='#220901'>Login</StyledButton>
                        </Link>
                    </FlexColumns>
                </TextAndButtons>
            </MainWindow>
        </Router>
    );
}