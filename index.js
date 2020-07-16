// Code your solution here
function findMatching(array, string) {
    return array.filter(element => element.toLowerCase() == string.toLowerCase())
}

function fuzzyMatch(array, string) {
    return array.filter(element => 
        element.toLowerCase().slice(0, string.length) == string.toLowerCase()
    )
}

function matchName(array, string) {
    return array.filter(object => object.name == string)
}