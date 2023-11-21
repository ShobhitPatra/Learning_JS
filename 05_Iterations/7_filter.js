const myNums = [1,2,3,4,5,6,7,8,9]

const newNums = myNums.filter(function(num){
  return num>5
})
console.log(newNums);

const oneMoreNewNums = myNums.filter((num) => num>2 && num<7 )
console.log(oneMoreNewNums);