// Code your solution here
function findMatching(drivers, s) {
  let match = new RegExp(s, 'i')
  return drivers.filter(driver => {
    return driver.match(match)
  })
}

function fuzzyMatch(drivers, s) {
  let match = new RegExp(`^${s}`, 'i')
  return drivers.filter(driver => {
    return driver.match(match)
  })
}

function matchName(drivers, s) {
  return drivers.filter(driver => {
    return driver.name === s
  })
}
