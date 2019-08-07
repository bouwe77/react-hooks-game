import React from "react";

import Canvas from "./Canvas";
import settings from "../settings";
import { usePlayer } from "../hooks/usePlayer";
import { useEnemies } from "../hooks/useEnemies";

function Game() {
  const player = usePlayer();
  const enemies = useEnemies();

  return <Canvas settings={settings} player={player} enemies={enemies} />;
}

export default Game;
