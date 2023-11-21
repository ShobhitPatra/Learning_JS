const date =  new Date()
console.log(date);
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toISOString());

let myTimeStamp = Date.now()   //returns current time in ms
console.log(myTimeStamp); 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()+1);      //sunday = 0 
console.log(newDate.getMonth()+1);    //jan= 0

console.log(typeof(newDate));