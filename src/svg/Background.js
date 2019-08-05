import React from "react";

export default ({ settings }) => (
  <rect
    fill={settings.backgroundFill}
    width={settings.canvasWidth}
    height={settings.canvasHeight}
  />
);
