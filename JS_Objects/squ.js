function sumevensquares(n){
    var sum =0
    for(i=2;i<=n;i++){
        if(i%2==0){
            sum+=(i*i)
        }
    } 
    return sum
}