import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "./img/login.jpg";

export const StyledAuthWrapper = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin-top: 0;
  padding-top: 1%;
  padding-bottom: 30px;
`;
export const StyledAuthPanel = styled.div`
  background-color: rgba(255, 242, 224, 0.7);
  border: 1px solid black;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  width: 30vw;
  padding: 30px;
  padding-top: 3%;
  padding-bottom: 5%;
  text-align: center;
  font-family: "Inter", sans-serif;
  margin-left: 10%;
  margin-top: 6%;
  margin-bottom: 6%;
  row-gap: 20px;
`;
export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 10px;
`;
export const StyledAuthButton = styled.button`
  width: 150px;
  background-color: #ffce87;
  color: rgba(34, 9, 1, 0.9);
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
  @media (max-width: 600px) {
    width: 100px;
  }
`;
export const StyledAuthHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 20px;
  } ;
`;
export const StyledAuthInput = styled.input`
  width: 230px;
  @media (max-width: 600px) {
    width: 100px;
  }
  padding: 5px;
`;
export const StyledLink = styled(Link)`
  font-size: 13px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
