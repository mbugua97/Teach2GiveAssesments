// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [ 
        {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

let lenLib=Object.keys(library).length

for(var i =0 ;i<lenLib;i++){
    console.log(`${library[i].author}\t${library[i].title}\t${library[i].readingStatus}`);
}

