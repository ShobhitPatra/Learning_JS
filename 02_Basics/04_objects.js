let user = {
  "name" : "Shobhit Patra",
  "email" : "shobi@gmail.com",
  "isLoggedIn" : false,
  age : 21
}
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const obj1 = {1 : "a",2 : "b",3 : "c"}
const obj2 = {4 : "d",5 : "e",6 : "f"}
const obj3 = {7 : "g",8 : "h",9 : "i"}

//CONCATENATING OBJECTS :

//1. Using Object.assign
const joinedObj = Object.assign({},obj1,obj2)   //first {} --> one emtpy obj where next objs are added
console.log(joinedObj);

//Using spread operator
const newObj = {...obj1,...obj2,...obj3}
console.log(newObj);