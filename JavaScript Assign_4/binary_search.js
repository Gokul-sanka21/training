var inti_arr=[2,8,6,4,12,10,13,9];
console.log(" Given Array:");
console.log(inti_arr);
console.log("Array after sorting");
inti_arr.sort(function(a,b){return a-b;});
console.log(inti_arr);

let BinarySearch=function(arr,element,s,e){
    if(s>e){
        return false;
    }
    let mid=Math.floor((s+e)/2);
    if(arr[mid]==element){
            return true;
    }
    else if(arr[mid]>element){
        return BinarySearch(arr,element,s,mid-1);
    }
    else{
        return BinarySearch(arr,element,mid+1,e);
    }
}
var k=inti_arr.length;
let Key=9;
console.log("Key element "+Key);
if(BinarySearch(inti_arr,Key,0,k-1)){
    console.log("Element found");
}
else{
    console.log("Element Not found");
}

Key=12;
console.log("Key element "+Key);
if(BinarySearch(inti_arr,Key,0,k-1)){
    console.log("Element found");
}
else{
    console.log("Element Not found");
}

Key=15;
console.log("Key element "+Key);
if(BinarySearch(inti_arr,Key,0,k-1)){
    console.log("Element found");
}
else{
    console.log("Element Not found");
}
console.log("");
console.log("");
console.log("");