//for of

const myArr = [1,2,3,4,5]

for (const num of myArr) {
  console.log(num);
  
}

const gretting = `Hello Baby`

for (const CharacterData of gretting) {
  console.log(`each character is :${CharacterData}`);
}

const map = new Map()
map.set("IN","India")
map.set("SA","South Africa")
map.set("AUS","Australia")
map.set("BAN","Bangladesh")

// console.log(map);
for (const [key,value] of map) {
  console.log(`${key} is short for ${value}`);
  
}