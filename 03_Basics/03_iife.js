//Immediately Invoked Function Expressions(IIFE) 

(function one(){
  console.log(`function one called`);
})();

((name)=> {
  console.log(`function two called by ${name}`);
})("dev");