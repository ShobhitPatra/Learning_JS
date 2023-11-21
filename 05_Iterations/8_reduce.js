//reduce

const myNums = [1,2,3,4]

//function defined has one accumulator value set bys us and current value got from iteration
const newNums = myNums.reduce((acc,curr) => {
  acc+=curr
  return(`acc :${acc} and current value :${curr}`);

},0)
console.log(newNums);