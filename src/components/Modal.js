import React from "react";
import metamask from "../static/metamask.png";
import Button from "./Button";
import ModalContainer from "./ModalContainer";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import Checkbox from "./Checkbox";
import StyledH2 from "./StyledH2"

export default class Modal extends React.Component {
  state = {
    visible: false
  };

  componentDidMount = () => {
    window.addEventListener("click", this.handleOutsideClick);
  };

  onButtonClick = () => {
    this.setState({ visible: true });
  };

  handleOutsideClick = e => {
    const { visible } = this.state;
    if (
      visible &&
      this.wrapperRef &&
      !this.wrapperRef.contains(e.target) &&
      !this.buttonRef.contains(e.target)
    ) {
      this.setState({ visible: false });
    }
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };
  setButtonRef = node => {
    this.buttonRef = node;
  };

  render() {
    const { theme } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <div
          style={{
            paddingBottom: "8px",
            fontWeight: "bold",
            paddingLeft: "20px"
          }}
        >
          Running on Ropsten Testnet
        </div>
        <Button
          ref={this.setButtonRef}
          theme={theme}
          onClick={() => this.onButtonClick()}
        >
          Get Metamask{" "}
          <img style={{ display: "inline-block" }} src={metamask} />
        </Button>

        <ModalContainer visible={visible}>
          <ModalContent ref={this.setWrapperRef} class="modal-content">
            <ModalHeader theme={theme}>
              Welcome! Let's get you set up with MetaMask
            </ModalHeader>

            <ModalBody theme={theme}>
              <div style={{paddingBottom:"30px"}}>
              <Checkbox>
                <img style={{ padding: "2px", height:"20px", display: "inline-block" }} src={metamask} />
              </Checkbox>
              <StyledH2>Install and Setup MetaMask</StyledH2></div>
              <div style={{paddingBottom:"30px"}}><Checkbox/><StyledH2>Unlock your MetaMask</StyledH2></div>
              <div style={{paddingBottom:"30px"}}><Checkbox/><StyledH2>Connect to the Ropsten Ethereum network</StyledH2></div>
            </ModalBody>
          </ModalContent>
        </ModalContainer>
        <div />
      </div>
    );
  }
}
