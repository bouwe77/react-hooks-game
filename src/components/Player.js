import React from "react";

import Character from "../svg/Character";
import useMove from "../hooks/useMove";
import { NORTH, EAST, SOUTH, WEST } from "../hooks/directions";

function Player({ settings, initialX, initialY }) {
  const [x, y] = useMove(initialX, initialY, EAST);
  return <Character fillColor={settings.playerFill} x={x} y={y} />;
}

export default Player;
