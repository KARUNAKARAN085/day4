const isPalindrome = function(string) {
    let arr1=[]
    for(let i=0;i<string.length;i++){
    let reversed = string[i].split('').reverse().join('');
    let a=string[i] === reversed;
    if(a==true){
        arr1.push(string[i])
    }
}
return arr1
}
arr=['madam','amma','gapagg','texet']
console.log(isPalindrome(arr));