//Stack -->copy of reference --> primitive -->(string,number,bigint,null,undefined,boolean,symbol)
//heap -->on original reference --> non primitive(reference) --> (array,objects,)

let stackInt_1 = 87
let stackInt_2 = stackInt_1
console.log(stackInt_2)
stackInt_2 = 56
console.log(stackInt_2)
console.log(stackInt_1)

///////example of heap : 

let user_1 = {
    email : "pappu@gmail.com",
    pin : 3455
}
let user_2 = user_1
console.log(user_2)
user_2.email = "newEmail@gmail.com"
console.log(user_2)
console.log(user_1)
