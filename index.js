// Write your solution here!
const drivers= ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver) {
drivers. push (driver);
}

function destructivelyPrependDriver(driver) {
  drivers. unshift (driver);
}

function destructivelyRemoveLastDriver(driver) {
  drivers. pop (drivers);
}
function destructivelyRemoveFirstDriver(driver) {
  driver.shift(drivers);
}