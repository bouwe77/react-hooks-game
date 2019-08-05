import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import useMove from "./hooks/useMove";

import settings from "./settings";

function doSomething() {
  console.log("doing something...");
}

function App() {
  return <Game />;
}

function Game() {
  return <Canvas />;
}

function Canvas() {
  return (
    <svg width={settings.canvasWidth} height={settings.canvasHeight}>
      <Background settings={settings} />
      <Player settings={settings} initialX={10} initialY={10} />
      <Enemy settings={settings} initialX={120} initialY={30} />
    </svg>
  );
}

function Player({ settings, initialX, initialY }) {
  const [x, y] = useMove(initialX, initialY);
  return <Character fillColor={settings.playerFill} x={x} y={y} />;
}

function Enemy({ initialX, initialY }) {
  const [x, y] = useMove(initialX, initialY);
  return <Character fillColor={settings.enemyFill} x={x} y={y} />;
}

const Background = ({ settings }) => (
  <rect
    fill={settings.backgroundFill}
    width={settings.canvasWidth}
    height={settings.canvasHeight}
  />
);

const Character = ({ fillColor, x, y }) => (
  <rect width={20} height={20} x={x} y={y} fill={fillColor} />
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
