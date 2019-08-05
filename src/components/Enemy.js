import React from "react";

import Character from "../svg/Character";
import useMove from "../hooks/useMove";

function Enemy({ settings, initialX, initialY }) {
  const [x, y] = useMove(initialX, initialY);
  return <Character fillColor={settings.enemyFill} x={x} y={y} />;
}

export default Enemy;
