// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(driver => {
        return driver.toUpperCase() === string.toUpperCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => {
        return driver.startsWith(string)
    })
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
        return driver.name.toUpperCase() === string.toUpperCase()
    })
}