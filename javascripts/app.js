// Rover Object Goes Here
var rover = {
  direction: "N",
  position: [0,0],
  travelLog: []
}



// ======================
// Grid

var grid = [
  [0,0,"rock",0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,"rock",0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]

// ======================

//Turn Left
function turnLeft(rover){
  console.log('moveLeft was called');
  switch(rover.direction) {
    case "N": rover.direction = "W"; break;
    case "W": rover.direction = "S"; break;
    case "S": rover.direction = "E"; break;
    case "E": rover.direction = "N"; break;
  }
  rover.travelLog.push("Rover position was: " + rover.position);
  console.log("Rover Direction: " + rover.direction);
}

//Turn Right
function turnRight(rover){
  console.log('moveRight was called');
  switch(rover.direction) {
    case "N": rover.direction = "E"; break;
    case "E": rover.direction = "S"; break;
    case "S": rover.direction = "W"; break;
    case "W": rover.direction = "N"; break;
  }
  rover.travelLog.push("Rover position was: " + rover.position);
  console.log("Rover Direction: " + rover.direction);
}

//Move Forward
function moveForward(rover){
  console.log('moveForward was called');
  switch(rover.direction) {
    case "N": rover.position[0]--; break;
    case "S": rover.position[0]++; break;
    case "E": rover.position[1]++; break;
    case "W": rover.position[1]--; break;
  }
  rover.travelLog.push("Rover position was: " + rover.position);
  console.log("Rover Direction: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

//Move Backward
function moveBackward(rover) {
  console.log("moveBackward was called");
  switch(rover.direction) {
    case "N": rover.position[0]++; break;
    case "S": rover.position[0]--; break;
    case "E": rover.position[1]--; break;
    case "W": rover.position[1]++; break;
  }
  rover.travelLog.push("Rover position was: " + rover.position);
  console.log("Rover Direction: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


//Commands
var commands = "rffrfflfrffbabc";

function roverCommands(commands) {
  for (var i = 0; i < commands.length; i++) {
    console.log(i)

    switch(commands[i]) {
      case "f": moveForward(rover); break;
      case "r": turnRight(rover); break;
      case "l": turnLeft(rover); break;
      case "b": moveBackward(rover); break
      default: console.log("Try writing f,b,l,r to move de Rover");
    }
  }
} console.log(roverCommands(commands));

//Travel log

console.log(rover.travelLog);