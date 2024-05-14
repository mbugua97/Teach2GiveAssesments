// Quiz 2: Write a JavaScript program to check a student's 
// total marks in various examinations.
// The student will get an A+ grade if the total marks are in the range 89..100 inclusive,
// if the examination is "Final" the student will receive an A+ grade
//  and total marks must be greater than or equal to 90. 
//  If the student gets an A+ grade, 
//  return true, otherwise return false.


//an array containing students marks
var studentMarks=[10,20,20,20,23]

//function agregating up the marks and returning the grade

function gradeStudent(marks){
    var totalSum=0;
    //iterating through the array summing up the marks
    for (var i=0;i<marks.length;i++){
        totalSum+=marks[i];
    }

    //checking if the student has 90+ so as to get A+
    console.log(totalSum);


//returning true if greater than 90
    if(totalSum>=90){
        console.log("true");
        return true
    }
//returning false if less than 90
    else{
        console.log("false");
        return false
    }
}


//function call
gradeStudent(studentMarks)