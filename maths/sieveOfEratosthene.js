function sieveOfEratosthene_first(maxNumber) {
  const isPrime = new Array(maxNumber + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  const primes = [];

  for (let number = 2; number < maxNumber; number++) {
    if (isPrime[number]) {
      primes.push(number);
      let nextNumber = number * number;
      while (nextNumber <= maxNumber) {
        isPrime[nextNumber] = false;
        nextNumber += number;
      }
    }
  }

  return primes;
}

function sieveOfEratosthene_second(maxNumber) {
  let isPrime = new Array(maxNumber + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  let prime = [];

  for (let i = 2; i*i <= maxNumber; i++) {
    if (isPrime[i]) {
      for (let j = i*i; j <= maxNumber; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let i = 1; i <= maxNumber; i++) {
    if (isPrime[i]) {
      prime.push(i);
    }
  }
  return prime;
}

let res = sieveOfEratosthene_first(10);
let res1 = sieveOfEratosthene_second(10);

console.log(res);
console.log(res1);
