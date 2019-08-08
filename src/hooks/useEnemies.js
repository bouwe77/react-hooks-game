import { useState } from "react";
import useAnimation from "./useAnimation";

export function useEnemies() {
  useAnimation(moveEnemies);

  const [enemies, setEnemies] = useState([
    { x: 120, y: 30 },
    { x: 10, y: 180 },
    { x: 310, y: 310 }
  ]);

  function moveEnemies() {
    const movedEnemies = enemies.map(enemy => ({ ...enemy, x: enemy.x + 1 }));
    setEnemies(movedEnemies);
  }

  return enemies;
}
