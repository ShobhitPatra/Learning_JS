const roll = 24 ;
let city = "jamshedpur" ;
var country = "Ghana";

console.log(roll);
console.log(city);
console.log(country);

// roll =43 ;   TypeError: Assignment to constant variable.
city ="gujarat";
country = " India";

console.table([roll,city,country]); //same as writing : console.log(roll);console.log(city);console.log(country);

