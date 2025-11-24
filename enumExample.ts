enum direction {
  North,
  East,
  South,
  West
}
let currentDirection = direction.North;
// logs 0
console.log(currentDirection);
currentDirection = direction.East;
console.log(currentDirection);
//currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);

enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);