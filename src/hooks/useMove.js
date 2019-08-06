import { useState, useEffect } from "react";
import useAnimation from "./useAnimation";
import useDirection from "./useDirection";

import settings from "../settings";

function useMove(initX = 10, initY = 10, direction) {
  const [x, setX] = useState(initX);
  const [y, setY] = useState(initY);
  const [xDirection, yDirection] = useDirection(direction);

  useAnimation(() => {
    setX(x + xDirection);
    setY(y + yDirection);
  });

  useEffect(() => {
    if (x > settings.canvasWidth - settings.characterWidth) {
      //TODO Do something when reached the edges of the canvas...
    }
  }, [x]);

  useEffect(() => {
    if (y > settings.canvasHeight - settings.characterHeight) {
      //TODO Do something when reached the edges of the canvas...
    }
  }, [y]);

  return [x, y];
}

export default useMove;
