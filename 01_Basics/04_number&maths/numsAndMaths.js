const score = 400
console.log(score);

const balance = new Number(232)
console.log(balance);

const num =3.5459879
console.log(num.toFixed(1)); //toFixed --> round offs
console.log(num.toPrecision(5)); // toPrecision -->  reduces digits after decimal to said number


//Math

console.log(Math.abs(-5));        //abs -> negative to positive
console.log(Math.round(4.68767));
console.log(Math.ceil(4.6));        //ceil -> upar wala value
console.log(Math.floor(4.6));   //floor ->  niche wala value

//most used

const random_1 = Math.random();                     //generates a random number
const random_2 = Math.random()*10                   //generates a random number between 0  to 10
const random_3 = (Math.random()*10 ) + 1            //generates a random number between 1  to 10
const random_4 = Math.floor((Math.random()*10)+1)   //generates a random ehole number between 0  to 10 


console.table([random_1,random_2,random_3,random_4])

//Formuala : if range 10 to 20
const min =10
const max =20
console.log(Math.floor((Math.random()*(max-min+1))+min))