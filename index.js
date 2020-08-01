// Code your solution here
const findMatching = (drivers, string) => {
	return drivers.filter(name => name.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
	return drivers.filter(name => name.toLowerCase().startsWith(string.toLowerCase()))
}

const matchName = (drivers, string) => {
	return drivers.filter(obj => obj.name.toLowerCase() === string.toLowerCase())
}