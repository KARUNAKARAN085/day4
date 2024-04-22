const sumOfArr = ((sum,arr) => {
    for(let ind=0;ind<arr.length;ind++){
        sum += arr[ind]
    }
    return sum
    })(0,[2,3,4,5,6,10])

    console.log(sumOfArr)