import { MainWindow, StyledButton, TextAndButtons, FlexColumns } from "./EnjoyContainer.styled";
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'

export const EnjoyContainer = () => {
    return (
        <MainWindow>
            <TextAndButtons>
                <h1>Enjoy your <span>book</span> everyday with us</h1>
                <FlexColumns>
                    <NavLink to="register"> <StyledButton>Register</StyledButton></NavLink>
                    <NavLink to="login"> <StyledButton bg='#FFF2E0' color='#220901' brd='#220901'>Login</StyledButton></NavLink>
                </FlexColumns>
            </TextAndButtons>
        </MainWindow>
    );
}