import React from "react";
import styled from "styled-components";

export type ButtonProps = {
  color: string;
  onClick: () => void;
};

const StyledButton = styled.button<ButtonProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
`;

const Button: React.FC<ButtonProps> = ({ color, onClick }) => {
  return <StyledButton color={color} onClick={onClick} />;
};

export default Button;
