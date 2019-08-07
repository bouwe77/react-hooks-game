import React from "react";

import Character from "../svg/Character";

function Enemy({ enemy }) {
  return <Character fillColor="Red" x={enemy.x} y={enemy.y} />;
}

export default Enemy;
