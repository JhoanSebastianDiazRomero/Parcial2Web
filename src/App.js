import "./App.css";
import React, { useState, useEffect } from "react";
import SpacesComponent from "./components/SpacesComponent";
import RoomsComponent from "./components/RoomsComponent";
import PieChart from "./components/PieChart";

function App() {
  let [activeSpace, setActiveSpace] = useState("");
  let [clicked, wasClicked] = useState(false);

  const handleClick = (clickedCardId) => {
    setActiveSpace(clickedCardId);
    wasClicked(true);
  };

  useEffect(() => {
    const fetchSpaces = async () => {
      const res = await fetch(
        "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
      );
      const data = await res.json();
      localStorage.setItem("spaces", JSON.stringify(data));
    };

    const fetchRooms = async () => {
      const res = await fetch(
        "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
      );
      const data = await res.json();
      localStorage.setItem("rooms", JSON.stringify(data));
    };

    fetchSpaces();
    fetchRooms();
  }, []);

  return (
    <div className="App">
      {localStorage.getItem("rooms") !== null &&
        localStorage.getItem("spaces") !== null && (
          <SpacesComponent handleClick={handleClick}></SpacesComponent>
        )}
      {clicked &&
        localStorage.getItem("rooms") !== null &&
        localStorage.getItem("spaces") !== null && (
          <RoomsComponent selectedSpace={activeSpace}></RoomsComponent>
        )}
    </div>
  );
}

export default App;
