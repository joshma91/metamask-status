import React from "react";
import metamask from "../static/metamask.png";
import Button from "./Button";
import ModalContainer from "./ModalContainer";

export default class Modal extends React.Component {
  state = {
    visible: false
  };

  onButtonClick = () => {
    this.setState({ visible: true });
  };

  render() {
    const { theme } = this.props;
    const { visible } = this.state;
    console.log("visibility", visible)
    return (
      <div>
        {console.log(this.props.theme)}
        <div
          style={{
            paddingBottom: "8px",
            fontWeight: "bold",
            paddingLeft: "20px"
          }}
        >
          Running on Ropsten Testnet
        </div>
        <Button theme={theme} onClick={() => this.onButtonClick()}>
          Get Metamask{" "}
          <img style={{ display: "inline-block" }} src={metamask} />
        </Button>

        <ModalContainer visible={visible}>
          <div class="modal-content">
            <div class="modal-header">
              <span class="close">&times;</span>
              <h2>Welcome! Let's get you set up with MetaMask</h2>
            </div>
            <div class="modal-body">
              <p>Install and Setup MetaMask</p>
              <p>Unlock your MetaMask</p>
              <p>Connect to the Ropsten Ethereum network</p>
            </div>
          </div>
        </ModalContainer>
        <div />
      </div>
    );
  }
}
