const findPrimes = function (arr) {
    const primes = [];
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        primes.push(arr[i]);
      }
    }
    return primes;
  }
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 10];
  console.log(findPrimes(numbers));
  
  