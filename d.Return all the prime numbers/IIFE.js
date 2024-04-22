const findPrimes = (arr => {
    const primes = [];
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        primes.push(arr[i]);
      }
    }
    return primes;
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 10])
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(findPrimes);