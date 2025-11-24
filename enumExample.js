var direction;
(function (direction) {
    direction[direction["North"] = 0] = "North";
    direction[direction["East"] = 1] = "East";
    direction[direction["South"] = 2] = "South";
    direction[direction["West"] = 3] = "West";
})(direction || (direction = {}));
var currentDirection = direction.North;
// logs 0
console.log(currentDirection);
currentDirection = direction.East;
console.log(currentDirection);
//currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
// logs "North"
console.log(CardinalDirections.North);
