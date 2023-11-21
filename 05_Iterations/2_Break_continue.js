//break --> no further execution

for (let i = 0; i < 10; i++) {
  if(i==5){
    console.log(`5 found`);
    break
  }
  console.log(`break ${i}`);

}

//continue --> skips current iteration

for (let i = 0; i < 10; i++) {
  if(i==5){
    console.log(`5 found`);
    continue
  }
  console.log(`continue ${i}`);
  
}