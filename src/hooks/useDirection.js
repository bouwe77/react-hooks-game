import { NORTH, EAST, SOUTH, WEST, NONE } from "./directions";

function useDirection(direction) {
  let xDirection;
  let yDirection;

  switch (direction) {
    case NORTH:
      xDirection = 0;
      yDirection = -1;
      break;
    case EAST:
      xDirection = 1;
      yDirection = 0;
      break;
    case SOUTH:
      xDirection = 0;
      yDirection = 1;
      break;
    case WEST:
      xDirection = -1;
      yDirection = 0;
      break;
    case NONE:
    default:
      xDirection = 0;
      yDirection = 0;
      break;
  }

  return [xDirection, yDirection];
}

export default useDirection;
