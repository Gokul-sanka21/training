function reverseString(){
    var arr="Welcome to this Javascript Guide!";
    for(var i=arr.length-1;i>=0;i--){
        console.log(arr.charAt(i));
    }
}
reverseString();