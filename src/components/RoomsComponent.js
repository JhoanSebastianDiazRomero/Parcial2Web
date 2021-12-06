import React, { useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import RoomComponent from "./RoomComponent";
import PieChart from "./PieChart";

export default function RoomsComponent(props) {
  const roomsNP = localStorage.getItem("rooms");
  const allRooms = JSON.parse(roomsNP);
  const rooms = allRooms.filter((room) => room.homeId === props.selectedSpace);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleClick = (clickedCardId) => {
    setSelectedRoom(clickedCardId);
  };

  return (
    <Container>
      <Row>
        {rooms !== null && (
          <h1>
            <FormattedMessage id="MyRooms"></FormattedMessage>
          </h1>
        )}
        {rooms.map((room, index) => (
          <RoomComponent
            key={index}
            name={room.name}
            handleClick={handleClick}
            id={index}
          />
        ))}
        {selectedRoom !== null && (
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>
                    <FormattedMessage id="Device"></FormattedMessage>
                  </th>
                  <th>
                    <FormattedMessage id="Value"></FormattedMessage>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rooms[selectedRoom].devices.map((device, index) => (
                  <tr>
                    <td>{index}</td>
                    <td>{device.id}</td>
                    <td>{device.name}</td>
                    <td>{device.desired.value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        )}
      </Row>
      {selectedRoom !== null && (
        <Row>
          <h5>
            <FormattedMessage id="Power"></FormattedMessage>
          </h5>
          <PieChart rooms={rooms} />
        </Row>
      )}
    </Container>
  );
}
