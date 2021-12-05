import React from "react";
import { Card, Image, Col } from "react-bootstrap";
import IKitchen from "../assets/kitchen.png";
import ILiving from "../assets/living.png";
import IDinning from "../assets/dinning.png";

export default function RoomComponent(props) {
  return (
    <Col>
      <Card
        style={{ width: "18rem", cursor: "pointer" }}
        onClick={() => {
          props.handleClick(props.id);
        }}
      >
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Image
            src={
              props.name === "Kitchen"
                ? IKitchen
                : props.name === "Living room"
                ? ILiving
                : IDinning
            }
            className="imgCard"
          />
        </Card.Body>
      </Card>
    </Col>
  );
}
