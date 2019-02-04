import styled, { css } from "styled-components";

const ModalContent = styled.div`
  @media (max-width: 767px){
    margin: 50% auto;
  }
  @media (min-width: 768px){
    margin: 20% auto;
  }
  padding:40px;
  width: 600px;
  animation-name: modalopen;
  animation-duration: var(--modal-duration);
`;

export default ModalContent;
