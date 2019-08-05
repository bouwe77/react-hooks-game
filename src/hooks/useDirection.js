import { NORTH, EAST, SOUTH, WEST } from "./directions";

function useDirection(direction) {
  let xDirection = 0;
  let yDirection = 0;

  switch (direction) {
    case NORTH:
      yDirection = -1;
      break;
    case EAST:
      xDirection = 1;
      break;
    case SOUTH:
      yDirection = 1;
      break;
    case WEST:
      xDirection = -1;
      break;
    default:
      break;
  }

  return [xDirection, yDirection];
}

export default useDirection;
