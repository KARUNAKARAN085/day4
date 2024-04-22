const rotate=function(arr,k){
    for (let times = 0; times < k; times++){
        arr.unshift(arr.pop());
    }
    
    return console.log(arr);
    }
    let arr = [1, 2, 3, 4, 5];
    let k = 1;
    rotate(arr,k)