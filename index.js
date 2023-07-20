const driversArray = ["Antonia", "Nuru", "Amari", "Mo"];
// Declare the variable returnFirstTwoDrivers and assign an anonymous function to it
const returnFirstTwoDrivers = function (drivers) {
  // Return a new array containing the first two drivers from the input array
  return driversArray.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return driversArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (i) {
  return function (fare) {
    return fare * i;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(driversArray);
}
