// Code your solution here

function findMatching(ar, s) {
    return ar.filter(e => e.toLowerCase() === s.toLowerCase())
}

function fuzzyMatch(ar, s) {
    return ar.filter(e => e.slice(0, s.length).toLowerCase() === s.toLowerCase())
}

function matchName(obj, s) {
    return obj.filter(e => e.name === s)
}