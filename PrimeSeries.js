let num1=0;
let num2=100;
for (let i = num1; i < num2;i++){
    let count =0;
    for(let j=2 ;j<=i/2;j++){
        if(i% j==0){
            count++;
        }
    }
    if(count==0){
        console.log(i+" ");
    }
}