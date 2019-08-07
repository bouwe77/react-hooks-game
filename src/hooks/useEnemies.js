import { useState } from "react";

export function useEnemies() {
  const [enemies, setEnemies] = useState([
    { x: 120, y: 30 },
    { x: 10, y: 180 },
    { x: 310, y: 310 }
  ]);

  return enemies;
}
