// 7. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

var name="dog"

var solu=[]

for(var i=0;i<3;i++){
    for(var x=i;x<3;x++){
       var hold= name.slice(i,x+1)
       solu.push(hold)
    }
}


console.log(solu);