function odd_even(num){
    var n1=0;
    var num1=parseInt(num);
        while(num1>0){
            n1+=num%10;
            num1=Math.floor(num1/10);
        }
    return ((n1)%2==0)?("Even"):("Odd");
    }
    
    console.log(odd_even("1024"));
    console.log(odd_even("257"));
    console.log(odd_even("856"));