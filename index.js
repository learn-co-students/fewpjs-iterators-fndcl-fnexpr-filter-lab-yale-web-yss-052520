// drivers is an array
// name is a string

function findMatching(drivers, name){
    return drivers.filter(driver => {
        return driver.toUpperCase() == name.toUpperCase()
    })
}

function fuzzyMatch(drivers, name){
    // first letter needs to match but test doesn't say anything about case
    return drivers.filter(driver => {
        return driver.toUpperCase().startsWith(name.toUpperCase())
    })
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name == string)
}
