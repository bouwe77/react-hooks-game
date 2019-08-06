import React from "react";

import Canvas from "./Canvas";
import settings from "../settings";

function Game() {
  const player = {};
  const enemies = [];
  return <Canvas settings={settings} player={player} enemies={enemies} />;
}

export default Game;
