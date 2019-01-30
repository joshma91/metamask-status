import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: ${props => props.theme.backgroundColor};
  border: none;
  font-size: 1em;
  font-weight: 300;
  font-family: ${props => props.theme.fontFamily}
  color: ${props => props.theme.primaryColor};
  outline: none;

  ${props =>
    props.primary &&
    css`
      background: blue;
    `}
`;

export default Button;
