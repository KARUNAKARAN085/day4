const rotate= ((arr,k) => {
    for (let times = 0; times < k; times++){
        arr.unshift(arr.pop());
    }
    
    return arr
    })([1, 2, 3, 4, 5],1)
    console.log(rotate)