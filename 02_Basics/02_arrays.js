const marvel_heroes = new Array("IronMan","Thor","Captain America","Hulk")
const dc_heroes = new Array("Batman","Superman","Flash")

//spread operator(...) --> joins two multiple arrays --> stores in new array

const all_heroes = new Array(...marvel_heroes,...dc_heroes)
console.log(all_heroes);

//flat --> unbinds nested arrays

const nestArr = [100,200,300,[10,20,30,[1,2,3,4],[0,0,0],[50,40,70]],600]
const simpleArr = nestArr.flat(Infinity)
console.log(simpleArr);

//collecting data and iinserting to array

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));