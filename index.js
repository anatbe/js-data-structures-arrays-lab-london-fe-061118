// Write your solution here!
const drivers= ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver) {
drivers.push(driver);
}

function appendDriver(driver) {
  driversCopy = ["Milo", "Otis", "Garfield"];
  driversCopy.push(driver);
  return driversCopy;
  
}

function destructivelyPrependDriver(driver) {
  drivers.unshift(driver);
}
function prependDriver(driver) {
   driversCopy = ["Milo", "Otis", "Garfield"];
  driversCopy.unshift(driver);
  return driversCopy;
}

function destructivelyRemoveLastDriver () {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}