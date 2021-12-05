import React from "react";
import { Container, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import SpaceComponent from "./SpaceComponent";
import "./SpacesStyle.css";

export default function SpacesComponent(props) {
  const spacesNP = localStorage.getItem("spaces");
  const spaces = JSON.parse(spacesNP);
  return (
    <div>
      <h1>
        <FormattedMessage id="MySpaces"></FormattedMessage>
      </h1>
      <Container>
        <Row className="spacesList">
          {spaces.map((space) => (
            <SpaceComponent
              key={space.id}
              name={space.name}
              address={space.address}
              type={space.type}
              id={space.id}
              handleClick={props.handleClick}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
