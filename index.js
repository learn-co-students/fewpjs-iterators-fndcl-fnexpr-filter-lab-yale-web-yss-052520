// Code your solution here

const findMatching = (drivers, name) => {
    return drivers.filter(driver => driver == name || driver == name.toLowerCase())
}
const fuzzyMatch = (drivers, namePart) => {
    return drivers.filter(driver => driver.slice(0, namePart.length) == namePart)
}

// function matchStart(drivers, namePart) {
    // 
// }

const matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name == name)
}

// function getTheName(drivers, name) {
//     drivers.filter(driver => driver.name == name)
// }