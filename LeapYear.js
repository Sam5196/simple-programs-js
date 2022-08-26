let year=2004;
if(year % 4 == 0 || year % 100 == 0 || year % 400 ==0){
    console.log(year+" It Is a Leap Year");
}else{
    console.log(year+" It Is not a leap Year");
}