const prompt = require("prompt-sync")();

const month = prompt("Enter month number :");

const day =prompt("Enter Day number :");

if(month==3&&day>=20 &&day<=30 || month==4&&day>=1&&day<=31||month==5&&day>=1&&day<=30||month==6&&day<=31){
    console.log("True")
}else{
    console.log("False");
}