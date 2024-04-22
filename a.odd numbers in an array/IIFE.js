const sumOfArr = (arr => {
    let arr1=[]
    for(let ind=0;ind<arr.length;ind++){
        if(arr[ind]%2!==0){
            arr1.push(arr[ind])
        }
    }
    return arr1
    })([2,3,4,5,6,7,9,10])
    console.log(sumOfArr.join(" "))