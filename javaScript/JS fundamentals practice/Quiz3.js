// Question 3: What is the output of the following code. Explain

//obj initilization
let obj = {};

//obj[1]=the first key pair of the objects are inserted
obj[1] = 'One';

//obj['1']=the second key pair is inserted but overides obj[1] to obj['1'] 
//because the index 1 and '1' are equal but not same datatype
obj['1']='String One';


console.log(obj[1]);//output is  String One
console.log(obj['1']);//String One


console.log(obj[1] === obj['1']);//will be true since obj[1]=String One obj['1'] = string One
