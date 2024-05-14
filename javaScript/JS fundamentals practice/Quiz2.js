function checkGrade(totalMarks, examType) {
    if(totalMarks>=89){
        //checking if its final exan 
        if(examType=='Final'){
            console.log(`Excellent job, you got an A+ in your ${examType}`);
        }
        else{
            console.log(`Excellent job, you got an A+ in your ${examType}`);
        }
    }
    else if(totalMarks>=80 && totalMarks<89){
        //checking if its final exan 
        if(examType=='Final'){
            console.log(`Well done, you got an A in your ${examType}`);
        }
        else{
            console.log(`Well done, you got an A in your ${examType}`);
        }
    }
    else if(totalMarks>=75 && totalMarks<80){
        //checking if its final exan 
        if(examType=='Final'){
            console.log(`Well done, you got a B+ in your ${examType}`);
        }
        else{
            console.log(`Well done, you got a B+ in your ${examType}`);
        }
    }
    else if(totalMarks>=70 && totalMarks<75){
        //checking if its final exan 
        if(examType=='Final'){
            console.log(`Nice work, you got a B in your${examType}`);
        }
        else{
            console.log(`Nice work, you got a B. in your ${examType}`);
        }
    }
    else if(totalMarks>=60 && totalMarks<70){
        //checking if its final exan 
        if(examType=='Final'){
            console.log(`You got a C.in your ${examType}`);
        }
        else{
            console.log(`You got a C. in your${examType}`);
        }
    }
    else if (totalMarks<60){
            console.log(`You need to improve`);
    }
 
 }
