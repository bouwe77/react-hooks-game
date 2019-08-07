import React from "react";

import settings from "../settings";
import Background from "../svg/Background";
import Player from "./Player";
import Enemy from "./Enemy";

export default ({ player, enemies }) => (
  <svg width={settings.canvasWidth} height={settings.canvasHeight}>
    <Background />

    <Player player={player} />

    {enemies.map(enemy => (
      <Enemy enemy={enemy} />
    ))}
  </svg>
);
