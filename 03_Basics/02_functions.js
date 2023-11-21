//function --> having single line in body can written as below --> no need to return anything
const addNum = (num1,num2) => num1 + num2
console.log(addNum(2,5));

const multNum = (num1,num2) => {(num1 * num2)}  // will not work --> if braces given --> return required
console.log(multNum(2,5));

const multNum2 = (num1,num2) => {return (num1 * num2)} 
console.log(multNum2(2,5));