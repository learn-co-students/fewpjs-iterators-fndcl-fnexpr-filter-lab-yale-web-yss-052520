// Code your solution here

function findMatching(drivers, string){
    return drivers.filter(driver => {
        return driver.toLowerCase().includes(string.toLowerCase())
    })
}

function fuzzyMatch(drivers, string){
    return drivers.filter(driver => {
        return driver.toUpperCase().startsWith(string.toUpperCase())
    })
}

function matchName(drivers, string){
    return drivers.filter(driver => {
        return driver.name == string
    })
}