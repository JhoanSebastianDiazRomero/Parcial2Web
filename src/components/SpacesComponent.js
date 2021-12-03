import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SpaceComponent from "./SpaceComponent";
import "./SpacesStyle.css";

export default class SpacesComponent extends Component {
  state = { loading: true };

  async componentDidMount() {
    const response = await fetch(
      "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
    );
    const data = await response.json();
    this.setState({ spaces: data, loading: false });
  }

  render() {
    return (
      <div>
        <h1>My Spaces</h1>
        <Container>
          {this.state.loading ? (
            <div>Cargando...</div>
          ) : (
            <Row className="spacesList">
              <SpaceComponent
                name={this.state.spaces[0].name}
                address={this.state.spaces[0].address}
                image={"house"}
              />
              <SpaceComponent
                name={this.state.spaces[1].name}
                address={this.state.spaces[1].address}
                image={"house"}
              />
              <SpaceComponent
                name={this.state.spaces[2].name}
                address={this.state.spaces[2].address}
                image={"building"}
              />
              <SpaceComponent
                name={this.state.spaces[3].name}
                address={this.state.spaces[3].address}
                image={"building"}
              />
            </Row>
          )}
        </Container>
      </div>
    );
  }
}
