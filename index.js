// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(driver =>
        driver.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver =>
        driver.toLowerCase().charAt(0).toUpperCase() === string.toLowerCase().charAt(0).toUpperCase()
    )
}

function matchName(drivers, string) {
    return drivers.filter(driver =>
        driver.name === string
    )
}