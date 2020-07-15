// Code your solution here
const findMatching = (drivers, driver) => drivers.filter(item => item.toLowerCase() === driver.toLowerCase())

const fuzzyMatch = (drivers, substring) => drivers.filter(driver => driver.substr(0, substring.length) === substring)

const matchName = (drivers, str) => drivers.filter(driver => driver.name === str)