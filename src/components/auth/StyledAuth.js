import styled from "styled-components";

export const StyledAuthPanel = styled.div`
background-color: rgba(255, 242, 224, 0.9);
border: 1px solid black;
box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
display: flex;
flex-direction: column;
width: 40vw;
padding: 30px;
text-align: center;
font-family: "Inter", sans-serif;
margin-left: 25%;
margin-right: 25%;
margin-bottom: 50px;
margin-top: 50px;
`
export const StyledAuthForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
export const StyledAuthButton = styled.button`
width: 150px;
background-color: #FFCE87;
color: rgba(34, 9, 1, 0.9);
font-weight: bold;
margin-top: 10px;
margin-bottom: 10px;
box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
@media (max-width: 600px) {
    width: 100px;
    }
`
export const StyledAuthHeader = styled.header`
font-family: "Inter", sans-serif;
font-size: 25px;
font-weight: bold;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin-top: 10px;
margin-bottom: 10px;
@media (max-width: 600px) {
    font-size: 20px;
    }
`
export const StyledAuthInput = styled.input`
margin-left: 10px;
margin-top: 10px;
margin-bottom: 10px;
width: 180px;
@media (max-width: 600px) {
    width: 100px;
    }
`
export const StyledLink = styled.a`
font-size: 13px;
@media (max-width: 600px) {
    font-size: 10px;
    }
`