


    var name="";
    var a="";
    var b="";
    var c="";

    var name = prompt("What is your name?");

    var a = parseInt(prompt("enter mark:"));

    var b = parseInt(prompt("enter 2nd mark:"));

    var c = parseInt(prompt("enter 3rd mark:"));



    function printResult(a,b,c){

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        document.getElementById("result").innerHTML = "you cannot enter a "
        + "string, please refresh the page again";}
    else{
        document.getElementById("result").innerHTML = (a + b + c)/3;

        document.getElementById("result").innerHTML = "Grade A %" + a;

        document.getElementById("result").innerHTML ="Grade B %" + b;

        document.getElementById("result").innerHTML ="Grade C %" + c;

        document.getElementById("name").innerHTML = name;
    }

    var average = (a+b+c)/3;

     if (average > 90){
         document.getElementById("feedback").innerHTML="Mark feedback: Awesome";
     }
     else if(average>=80){
        document.getElementById("feedback").innerHTML="Mark feedback: Very Good";
     }
     else if(average>=50){
        document.getElementById("feedback").innerHTML="Mark feedback: OK";
     }
     else{
        document.getElementById("feedback").innerHTML="Mark feedback: Fail";
     }
     }



