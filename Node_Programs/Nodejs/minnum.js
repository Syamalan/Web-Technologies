let arr=[1,2,3,4,5,6,7,8]
let min=arr[0]
function minNum(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    console.log("Minimum Number in array is "+min)
}
minNum(arr)