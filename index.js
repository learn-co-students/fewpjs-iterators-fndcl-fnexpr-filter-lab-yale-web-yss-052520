// Code your solution here
function findMatching(drivers, keyword) {
    return drivers.filter(s => s.toLowerCase() === keyword.toLowerCase() )
}

function fuzzyMatch(drivers, keyword) {
    return drivers.filter(s => s.toLowerCase().indexOf(keyword.toLowerCase()) === 0 )
}

function matchName(drivers, keyword) {
    return drivers.filter(r => r.name === keyword )
}