import React, { Component } from "react";
import { render } from "react-dom";
import web3 from "./getWeb3";
import MetamaskStatus from "../../src/MetamaskStatus";
import MetamaskModal from "./MetamaskModal"
import DefaultTheme from "../../src/defaultTheme"

class Demo extends Component {
  renderWelcome = () => {
    const { accounts, contract } = this.props;

    if (contract == undefined) {
      return <MetamaskModal />;
    } else if (accounts && accounts.length == 0) {
      return (
        <div>
          {" "}
          <strong>Please unlock your Metamask account! </strong>
          <image style={{ display: "inline-block" }} src={metamask} />
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          Welcome, <strong>{this.props.accounts}</strong>!
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <MetamaskStatus web3={web3}/>
        <div>{this.renderWelcome()}</div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
