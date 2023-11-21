const greeting = (name = "default") => {
  console.log(`Hello ${name}`);
}
greeting("Dev")

//PASSING VALUES IN FUNCTION

const user1 ={
  "username" : "Dev",
  "state" : "JSR"
}
const userLoggedInMsg = (user)=> {
  console.log(`${user.username} logged in from ${user.state}`);
}
userLoggedInMsg(user1)


const myArr = new Array(200,300,400)

const returnSecVal = (getArray) => {
  return getArray[1]
}

console.log(returnSecVal(myArr));
console.log(returnSecVal([1,2,3,4,5,6]))

