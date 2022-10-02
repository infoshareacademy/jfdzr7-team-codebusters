import styled from "styled-components";
import background from "./img/background.jpg";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
</style>;

export const StyledCart = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  margin-top: 0;
  padding-top: 0;
`;
export const StyledTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #ff902b;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 0;
  padding-top: 50px;
`;
export const StyledCartItem = styled.li`
  list-style-type: none;
  border: 1px solid black;
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-right: 100px;
  padding: 15px;
  justify-content: space-around;
  background-color: rgba(255, 242, 224, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 15px;
`;
export const StyledButton = styled.button`
  background: #ff902b;
  border: px solid #220901;
  font-family: "Inter", sans-serif;
  margin: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const StyledDeliveryButton = styled.button`
  background: #ff902b;
  border: px solid #220901;
  font-family: "Inter", sans-serif;
  margin: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 40px;
  margin-bottom: 50px;
`;
export const StyledCounterButton = styled.button`
  background: #ff902b;
  border: px solid #220901;
  border-radius: 50%;
  font-family: "Inter", sans-serif;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 25px;
  height: 25px;
`;
export const StyledInput = styled.input`
  background: rgba(255, 242, 224, 0.9);
  border: 1px solid #220901;
  margin: 3px;
`;

export const StyledForm = styled.form`
  background-color: rgba(255, 242, 224, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #220901;
  width: 90%;
  margin-left: 40px;
  padding: 40px;
`;
export const StyledCartContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
`;
export const StyledSummary = styled.p`
  border: 1px solid black;
  margin-right: 100px;
  padding: 15px;
  background-color: rgba(255, 242, 224, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 40px;
`;

export const StyledCartList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledEmptyCartDiv = styled.div`
  background-color: rgba(255, 242, 224, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #220901;
  width: 90%;
  margin-left: 40px;
  padding: 40px;
  height: 100vw;
  text-align: center;
  font-size: 30px;
`;

export const StyledBookCover = styled.img`
   width: 50px;
`