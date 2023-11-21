// > arrays in JS : different from other languages
// > in JS : arrays can be resized after declaration 
// > in JS : not necessarily should contain elements of similar datatype

const myArr = [0,1,2,3,4,5,6]
const randomArr = [1,4,"Virat",myArr]  
// console.log(randomArr);

//object type declaration

const newArr = new Array(1,2,3,4,5,6)
console.log(newArr);
newArr.push(5)              //push --> adds element from last
console.log(newArr);
newArr.pop()                //pop --> removes element from last
console.log(newArr);
newArr.unshift(0)           //unshift --> adds element from first
console.log(newArr);
newArr.shift()              //shift --> adds element from first
console.log(newArr);

//difference between slice and splice
console.log("slice operation :");
const initialArr_1 =new Array(1,2,3,4,5,6)

const slice_arr = initialArr_1.slice(1,3)

console.log(slice_arr)
console.log(initialArr_1);

console.log("splice operation :")
const initialArr_2 = new Array(1,2,3,4,5,6)

const splice_arr = initialArr_2.splice(1,3)

console.log(splice_arr)
console.log(initialArr_2);

// > slice --> upper limit excluded --> stack memory : operation on copy of reference
// > splice --> upper limit included --> heap memory : operation on original array
