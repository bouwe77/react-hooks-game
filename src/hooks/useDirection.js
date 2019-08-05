import { NORTH, EAST, SOUTH, WEST } from "./directions";

function useDirection(direction) {
  let xDirection = 0;
  let yDirection = 0;

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
    default:
      break;
  }

  return [xDirection, yDirection];
}

export default useDirection;
