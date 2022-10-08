import {
  StyledOrderSummary,
  StyledSummaryHeader,
  StyledSummaryInfo,
  StyledSummaryWrapper,
  StyledOrangeLink,
} from "./Cart.styled";

export const OrderSummary = () => {
  return (
    <StyledSummaryWrapper>
      <StyledOrderSummary>
        <StyledSummaryHeader>Thank you for your order!</StyledSummaryHeader>
        <StyledSummaryInfo>
          Your order will be send within two working days. You can follow stages
          of your order on your account page.{" "}
        </StyledSummaryInfo>
        <StyledOrangeLink to="/account">Your account</StyledOrangeLink>
        <StyledSummaryInfo>
          We hope you will see our store again soon!
        </StyledSummaryInfo>
        <StyledOrangeLink to="/books"> Book store</StyledOrangeLink>
      </StyledOrderSummary>
    </StyledSummaryWrapper>
  );
};
