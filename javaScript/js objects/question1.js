// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

var student={
    name:"David Rayy",
    sclass:"V1",
    rollno:12,
};

var keyArray=Object.keys(student)

for (var i=0;i<keyArray.length;i++){

    console.log(keyArray[i]);
}
