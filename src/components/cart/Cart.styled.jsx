import styled from "styled-components";
import background from "./img/background.jpg";
import packageBackground from "./img/package-backgroung.jpg";
import { Link } from "react-router-dom";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
</style>;

export const StyledCart = styled.div`
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
  padding-top: 0;
  padding-bottom: 50px;
`;
export const StyledTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: rgba(255, 242, 224, 0.9);
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
  padding: 15px;
  justify-content: space-around;
  background-color: rgba(255, 242, 224, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 15px;
  margin: auto;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
`;
export const StyledButton = styled.button`
  background-color: #ffce87;
  border: 1px solid #220901;
  font-family: "Inter", sans-serif;
  margin: 3px;
  height: 30px;
  width: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
export const StyledDeliveryButton = styled.button`
  background-color: #ffce87;
  border: 1px solid #220901;
  font-family: "Inter", sans-serif;
  margin: 3px;
  height: 30px;
  width: 170px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
export const StyledCounterButton = styled.button`
  background: #ffce87;
  border: 1px solid #220901;
  /* border-radius: 50%; */
  font-family: "Inter", sans-serif;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
export const StyledInput = styled.input`
  background: rgba(255, 242, 224, 0.9);
  border: 1px solid #220901;
  margin: 3px;
  cursor: pointer;
`;

export const StyledCounterIput = styled.input`
  background-color: transparent;
  border: none;
  width: 40px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`;

export const StyledCartContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  width: 90vw;
  margin: auto;
`;
export const StyledSummary = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  margin-right: 100px;
  padding: 15px;
  background-color: rgba(255, 242, 224, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: auto;
`;

export const StyledCartList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  row-gap: 15px;
`;

export const StyledEmptyCartDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  background-color: rgba(255, 242, 224, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #220901;
  width: 30%;
  margin-left: 40px;
  padding: 40px;
  height: 15%;
  margin: auto;
  text-align: center;
  font-size: 25px;
`;

export const StyledBookCover = styled.img`
  width: 50px;
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledBookTitle = styled.div`
  font-size: 19px;
`;
export const StyledBookAuthor = styled.div`
  font-weight: normal;
  font-size: 15px;
`;
export const StyledPrices = styled.div`
  font-size: 19px;
  font-weight: normal;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const StyledFormWrapper = styled.div`
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
  padding-top: 0;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const StyledDeliveryContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 242, 224, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #220901;
  width: 80vw;
  margin: auto;
  padding: 40px;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
`;

export const StyledOrderTotal = styled.div`
  margin-left: 10%;
  padding: 10px;
  background-color: rgba(255, 242, 224, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #220901;
  height: 20%;
  width: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-right: 20%;
`;

export const StyledTotalCost = styled.h3`
  background-color: #ffce87;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 50%;
  padding: 5px;
`;

export const StyledDeliveryHeader = styled.h2`
  font-size: 30px;
`;
export const StyledDeliveryInfo = styled.p`
  font-size: 20px;
  font-weight: normal;
`;
export const StyledSubmitButton = styled.button`
  background-color: #ffce87;
  border: 1px solid #220901;
  font-family: "Inter", sans-serif;
  margin: 3px;
  height: 30px;
  width: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-top: 30px;
`;

export const StyledOrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8%;
  row-gap: 10px;
  width: 50%;
`;

export const StyledSummaryWrapper = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  background-image: url(${packageBackground});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin-top: 0;
  padding-top: 50px;
  padding-bottom: 20%;
`;
export const StyledSummaryHeader = styled.h1`
  font-size: 40px;
`;
export const StyledSummaryInfo = styled.p`
  font-size: 20px;
  /* font-weight: normal; */
`;

export const StyledOrangeLink = styled(Link)`
  font-size: 20px;
  color: #ff902b;
`;
