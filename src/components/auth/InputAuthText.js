import { StyledAuthInput } from "./StyledAuth";

export const InputAuthText = ({ value, id }) => {
  return (
    <StyledAuthInput placeholder={value} type={id} name={id} id={id} />
  );
};
