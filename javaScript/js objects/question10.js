// 10. Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :
var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

var len=Object.keys(library).length


//sorting using bubblesort

for(var i=0;i<len;i++){
    for(var x=i;x<len;x++)
    {
        if(library[i].libraryID<library[x].libraryID){
            var hold=library[i]
            library[i]=library[x]
            library[x]=hold
        }


    }
}

console.log(library);