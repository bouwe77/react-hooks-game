import { useState } from "react";

export function usePlayer() {
  const [player, setPlayer] = useState({ x: 200, y: 200 });

  return player;
}
