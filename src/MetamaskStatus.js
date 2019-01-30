import React, {Component} from 'react'
import {render} from 'react-dom'
import "semantic-ui-css/semantic.min.css";
import MetamaskModal from './components/MetamaskModal'
import metamask from "./static/metamask.png"
import DefaultTheme from "./defaultTheme"

export default class MetamaskStatus extends React.Component {
  state = {
    theme: DefaultTheme
  }
  renderWelcome = () => {
    const { accounts, contract } = this.props;

    if (contract == undefined) {
      return <MetamaskModal theme={this.state.theme}/>;
    } else if (accounts && accounts.length == 0) {
      return (
        <div>
          {" "}
          <strong>Please unlock your Metamask account! </strong>
          <image
            style={{ display: "inline-block" }}
            src={metamask}
          />
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
        {this.renderWelcome()}
      </div>
    );
  }
}

