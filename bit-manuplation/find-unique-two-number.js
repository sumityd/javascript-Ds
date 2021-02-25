function findUniqueTwoNumber(arr, number){
    let sums = 0, sum1 = 0, sum2 = 0;
    arr.forEach(item => {
        sums = sums ^ item;
    })

    sums = sums & -sums;

    for(let i=0;i < number;i++){
        if( (sums & arr[i]) > 0){
            sum1 = sum1 ^ arr[i];
        }else{
            sum2 = sum2 ^ arr[i]
        }
    }
    console.log('num1 is',sum1,'num2 is',sum2)
}

let arr = [2, 3, 7, 9, 11, 2, 3, 11]
findUniqueTwoNumber(arr, 8)