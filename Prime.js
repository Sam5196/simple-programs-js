let num=7;
let count=0;
for(let i =0 ;i< num/2 ; i++){
    if (num%2==0) { 
        count++;
    }
}
    if(count==0){
        console.log(num+" It is a prime number");
    }else{
        console.log(num +" It is not a prime number");
    }