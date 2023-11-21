const map = new Map()
map.set("IN","India")
map.set("SA","South Africa")
map.set("AUS","Australia")
map.set("BAN","Bangladesh")

for (const key in map) {
 console.log(map[key]);
}
const newObject = {
  js : "javascript",
  cpp : "C++",
  rb : "ruby"
}

for (const key in newObject) {
  console.log(`${key} is short for ${newObject[key]}`);
}