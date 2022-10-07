import { BrowserRouter as Router } from 'react-router-dom'
import { MainWindow, StyledEnjoy, StyledDiv, StyledPicture, StyledLink } from './LoginOrRegister.styled'
import picture from './photos/openbook.jpg'

export const LoginOrRegister = () => {
    return (
        <Router>
            <MainWindow >
                <StyledEnjoy>Enjoy your <span>book</span> everyday with us</StyledEnjoy>
                <StyledDiv>
                    <StyledLink to="register">Register</StyledLink>
                    <StyledLink to="login" bg='#FFF2E0' color='#220901' brd='#220901'>Login</StyledLink>
                </StyledDiv>
                <StyledPicture src={picture} />
            </MainWindow>
        </Router>
    )
}

