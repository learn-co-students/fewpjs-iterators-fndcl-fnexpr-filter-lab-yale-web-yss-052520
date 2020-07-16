// Code your solution here
function findMatching(arr, string){
  return arr.filter(name => name.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(arr, string){
  return arr.filter(name => name.startsWith(string))
}

function matchName(arr, string){
  return arr.filter(driver => driver.name === string)
}