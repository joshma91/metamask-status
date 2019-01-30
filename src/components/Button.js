import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: ${props => props.theme.backgroundColor};
  border: none;
  font-size: 1em;
  font-weight: 700;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.primaryColor};
  outline: none;
  border-radius: 0.28rem;
  min-height: 1em;
  display: inline-block;
  margin: 0 .25em 0 0;
  padding: .78em 1.5em .78em;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.hoverColor};
  }


  ${props =>
    props.primary &&
    css`
      background: blue;
    `}
`;

export default Button;
