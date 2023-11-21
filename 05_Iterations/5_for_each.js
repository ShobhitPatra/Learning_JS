//for each 

let myArr = ["Batman","Superman","Thor","Flash","Iron Man","Hulk"]

myArr.forEach((hero) => {
  console.log(`${hero}`);
  
});

const myCountry =[
  {
    country : "India",
    capital : "Delhi"
  },
  {
    country : "Australia",
    capital : "Canberra"
  },
  {
    country : "Bangladesh",
    capital : "Dhaka"
  },
  {
    country : "Pakistan",
    capital : "Islamabad"
  }
]
myCountry.forEach((objectInside) => {
  console.log(`${objectInside.country}'s capital is ${objectInside.capital}`);
  
});