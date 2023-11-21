const name = "Shobhit"
const age = 21 

// console.log(name + " " + age)    -->bad way to write string  ---> ""USE BACKTICS""

console.log(`My name is ${name}, age is ${age}`) 

//String declaration  method 02 -->  transforming into objects --> advantage : can use many prte defined functions

const myName = new String("Shobhit")  //try it in console

console.log(myName.length)
console.log(myName.toUpperCase())
console.log(myName[0])
console.log(myName.charAt(2))

//substring slice trim replace

console.log(name.substring(0,3)) //substring -->  returns a sub string
console.log(name.slice(-7,3))    //slice --> returns 

const newString = new String("   gigi-hapuja-kumar ")
console.log(newString.trim()) //trim -->  removes white blank spaces
console.log(newString.replace("-","0")) //replace("jisko karna hai","jiss se karna hai")
console.log(newString.split("-")) //split("by which character")--> returns an array
