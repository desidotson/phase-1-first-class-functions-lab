const returnFirstTwoDrivers = function (drivers) {
        return drivers.slice(0,2);
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2,4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

function createFareMultiplier (integer) {
     return function(fare) {
        return fare * integer;

    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(drivers, driverSelector) {
    if (driverSelector === returnFirstTwoDrivers) {
      return drivers.slice(0, 2);
    } else if (driverSelector === returnLastTwoDrivers) {
      return drivers.slice(2,4);
    }
  }

