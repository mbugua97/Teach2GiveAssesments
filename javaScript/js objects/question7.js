// 7. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]




let name=function(str){
    var len=str.length
    var subSets=[]
    for(var i=0;i<len;i++){
        for(var x=i;x<len;x++){
            var hold=str.slice(i,x+1)
            subSets.push(hold)
        }
    }
    return subSets
}

console.log(name("dog"));
