
//   seprad operator or ...person
  const persone = {
    firstName : 'negar', 
    age: 12,
    family: 'karami',
  }
  
  const address = {
    name : 'negar', 
    city: 'tehran',
    country: 'iran',
  }
  
  const fullObj = {
    ...persone, 
    uniq: '1111111',
    ...address,
  }
  console.log("fullObj", fullObj)

//   rest operator
const {firstName, ...other} =  persone
console.log(other);



//   nested object
  const obj = {
    name : 'negar', 
    age: 12,
    education: {
      degree: 17
    }
  }
  const {name, age, education : {degree}} =  obj
  console.log("hhhhhhhhhhhhhhh", name, degree);