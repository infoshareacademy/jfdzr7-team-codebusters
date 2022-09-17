import styled from "styled-components";
import { CategoryRadioButton } from "./CategoryRadioButton";

export const StyledCategoryRadioButton = styled(CategoryRadioButton)`
  opacity: 0;
  position: fixed;
  width: 0;
  + label {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #FFF2E0;
    border: 2px solid black;
    cursor: pointer;
  }
  :checked + label {
    background-color: rgba(34, 9, 1, 1);
    color: #FF902B;
  }
`