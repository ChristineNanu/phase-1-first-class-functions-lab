// Code your solution in this file!
const returnFirstTwoDrivers =  (drivers) =>  drivers.slice(0, 2);


const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    }
}


const fareDoubler = createFareMultiplier(2);


const originalFare = 50;
const doubledFare = fareDoubler(originalFare);

console.log(doubledFare);




function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    }
}


const fareTripler = createFareMultiplier(3);


const Fare = 50;
const tripledFare = fareTripler(originalFare);

console.log(tripledFare);




function selectDifferentDrivers(drivers, returnDriversFunction) {
    return returnDriversFunction(drivers);
}


const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(firstTwoDrivers);

const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(lastTwoDrivers);


