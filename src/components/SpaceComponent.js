import React from "react";
import { Card, Image, Col } from "react-bootstrap";
import ICasa from "../assets/house.png";
import IApto from "../assets/building.png";
import "./SpaceStyle.css";

export default function SpaceComponent(props) {
  console.log(props.image);
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Image
            src={props.image === "house" ? ICasa : IApto}
            className="imgCard"
          />
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.address}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
