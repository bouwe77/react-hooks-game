import React from "react";

import Character from "../svg/Character";

function Player({ player }) {
  return <Character fillColor="Blue" x={player.x} y={player.y} />;
}

export default Player;
