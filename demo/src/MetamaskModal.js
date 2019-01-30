import React from 'react'
import {
  Container,
  Image,
  Button,
  Menu,
  Segment,
  Header,
  Modal,
  Grid
} from "semantic-ui-react";
import metamask from "../../src/static/metamask.png"

export const MetamaskModal = () => (
  <div>
  <div style={{paddingBottom:"8px", fontWeight:"bold", paddingLeft:"20px"}}>This is the old one</div>
  <Modal
    basic
    size={"tiny"}
    trigger={
      <Button className="metaBtn">
        Get Metamask{" "}
        <Image style={{ display: "inline-block" }} src={metamask} />
      </Button>
    }
  >
    <Modal.Header
      className="modalHeader"
      style={{ fontSize: "1.6em", color: "#F0F2EB" }}
    >
      Welcome! Let's get you set up to use Mirai{" "}
    </Modal.Header>
    <Modal.Content image style={{ paddingLeft: "60px" }}>
      <Modal.Description>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header
                as="h2"
                content="Install and Setup MetaMask"
                className="modalText"
                style={{ color: "#00B6E4", marginBottom: "-20px" }}
              />
            </Grid.Column>
            <Grid.Column>
              <Image
                style={{ display: "inline-block" }}
                src={metamask}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <h3 className="modalSubText">
                Click{" "}
                <a className="modalLink" href="https://metamask.io/">
                  here{" "}
                </a>
                to install
              </h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header
                as="h2"
                content="Unlock your MetaMask"
                className="modalText"
                style={{ color: "#00B6E4", marginBottom: "-20px" }}
              />
            </Grid.Column>
            <Grid.Column>
              <Image
                style={{ display: "inline-block" }}
                src={metamask}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header
                as="h2"
                content="Connect to the Ropsten Ethereum network"
                className="modalText"
                style={{ color: "#00B6E4" }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Description>
    </Modal.Content>
    <div />
  </Modal>
  </div>
);

export default MetamaskModal