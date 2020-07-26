// const findMatching = (arr, str) => arr.filter(el => el.toLowerCase() === str.toLowerCase())

function findMatching (arr, str) {
  return arr.filter(el => el.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch (arr, str) {
  let regEx = new RegExp(`^${str.toLowerCase()}`,'g')
  console.log(regEx)
  let out = arr.filter( el => regEx.test( el.toLowerCase() ) )
  console.log(arr.forEach( el => console.log(regEx.test( el.toLowerCase() ) ) ))
  console.log(`direct test:${regEx.test( " Sally".toLowerCase() )}`)
  console.log(`out:${out}`)
  console.log(`arr:${arr}`)
  return out
}

function matchName (arr, str) {
  return arr.filter(el => el.name.toLowerCase() === str.toLowerCase())
}
