export const isWithinBounds = (coordinate, max, min = 0) => {
  return coordinate >= min && coordinate < max;
};
