//singleton
//object.create

//object literals

let user = {
  "name" : "Shobhit Patra",
  "email" : "shobi@gmail.com",
  "isLoggedIn" : false,
  age : 21
}
console.log(user);
console.log(user.name);
console.log(user["email"]);
console.log(user["age"]);

user.email = "firstChange@gmail.com"
console.log(user.email);
// Object.freeze(user)            //freeze --> no value can be changed further
user.email = "secChange@gmail.com"
console.log(user.email);      


user.greeting = function(){
  return (`hello ${this.name}`);
}
console.log(user.greeting());