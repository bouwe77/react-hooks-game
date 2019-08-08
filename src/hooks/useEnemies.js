import { useState } from "react";
import useAnimation from "./useAnimation";
import { NORTH, EAST, SOUTH, WEST, NONE, allDirections } from "./directions";
import settings from "../settings";

export function useEnemies() {
  const [enemies, setEnemies] = useState([
    { x: 160, y: 350, direction: NORTH },
    { x: 10, y: 180, direction: SOUTH },
    { x: 310, y: 310, direction: EAST }
  ]);

  useAnimation(() => {
    let updatedEnemies = enemies.map(updateCoordinates).filter(isWithinCanvas);

    if (updatedEnemies.length < settings.numberOfEnemies) {
      updatedEnemies.push(createRandomEnemy());
    }

    setEnemies(updatedEnemies);
  });

  function updateCoordinates(enemy) {
    let xDirection = 0;
    let yDirection = 0;

    switch (enemy.direction) {
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
      case NONE:
      default:
        break;
    }

    return { ...enemy, x: enemy.x + xDirection, y: enemy.y + yDirection };
  }

  function isWithinCanvas(enemy) {
    return (
      enemy.x < settings.canvasWidth &&
      enemy.x > 0 - settings.characterWidth &&
      enemy.y < settings.canvasHeight &&
      enemy.y > 0 - settings.characterHeight
    );
  }

  function createRandomEnemy() {
    // Determine random direction.
    const randomDirectionIndex = Math.floor(Math.random() * allDirections.length);
    const direction = allDirections[randomDirectionIndex];

    // Depending on direction: determine initial X and Y coordinates.
    let x;
    let y;
    const randomCoordinate = Math.floor(Math.random() * settings.canvasWidth);
    switch (direction) {
      case NORTH:
        x = randomCoordinate;
        y = settings.canvasWidth;
        break;
      case EAST:
        x = 0;
        y = randomCoordinate;
        break;
      case SOUTH:
        x = randomCoordinate;
        y = 0;
        break;
      case WEST:
      default:
        x = settings.canvasWidth;
        y = randomCoordinate;
    }

    // Return the new enemy object.
    return { x, y, direction };
  }

  return enemies;
}
