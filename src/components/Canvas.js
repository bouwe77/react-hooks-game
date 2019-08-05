import React from "react";

import Background from "../svg/Background";
import Player from "./Player";
import Enemy from "./Enemy";

export default ({ settings }) => (
  <svg width={settings.canvasWidth} height={settings.canvasHeight}>
    <Background settings={settings} />
    <Player settings={settings} initialX={10} initialY={10} />
    <Enemy settings={settings} initialX={120} initialY={30} />
  </svg>
);
