import styled, { css } from "styled-components";

const ModalContainer = styled.div`
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: #000000d9;
`;

export default ModalContainer;
