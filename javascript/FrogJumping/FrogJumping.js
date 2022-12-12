/**
 * Initial position
 * @param {number} X 
 * 
 * Destination position
 * @param {number} Y 
 * 
 * Jumping range/distance
 * @param {number} D 
 * @returns 
 */
const numberOfJumping = (X, Y, D) => {
  return Math.ceil((Y - X) / D);
};

// X = 10
// Y = 85
// D = 30
numberOfJumping(10, 85, 30);
