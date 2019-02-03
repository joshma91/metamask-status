import React from "react";
import styled, { css } from "styled-components";

const ModalContainer = styled.div`
display: ${props => props.visible ? 'block': 'none'};
position: fixed;
z-index: 1;
left: 0;
top: 0;
height: 100%;
width: 100%;
overflow: auto;
background-color: rgba(0, 0, 0, 0.5);
`;

export default ModalContainer;
