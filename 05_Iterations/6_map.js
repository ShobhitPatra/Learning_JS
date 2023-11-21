//map


const map = new Map()
map.set("IN","India")
map.set("SA","South Africa")
map.set("AUS","Australia")
map.set("BAN","Bangladesh")

console.log(map);

const myNums = [1,2,3,4,5,6,7,8,9]

const newNums = myNums.map((num) => num*10)
console.log(newNums);                

const nestedMap = myNums
                  .map((num) => num*10)
                  .map((num) => num+1)
                  .filter((num) => num >30)

console.log(nestedMap);
