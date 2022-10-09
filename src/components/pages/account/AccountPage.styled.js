import styled from "styled-components";

export const StyledH2 = styled.h2`
    color: #FF902B;
`

export const StyledButton = styled.button`
  background-color: #ffce87;
  border: 1px solid #220901;
  font-family: "Inter", sans-serif;
  margin: 3px;
  height: 30px;
  width: 130px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 80px 1fr;
align-items: center;
gap: 10px;
p, h4, label, input {
  margin: 5px;
}
`

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
row-gap: 5px;
margin-right: 20%;
`;

export const StyledInput = styled.input`
background: rgba(255, 242, 224, 0.9);
border: 1px solid #220901;
margin: 3px;
cursor: pointer;
font-size: 14px;
`;

export const StyledLabel = styled.label`
text-transform: capitalize;
font-weight: bold;
`

export const StyledAccountPage = styled.div`
margin: 30px auto;
padding: 30px;
max-width: 500px;
background-color: rgba(255, 242, 224, 0.9);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`