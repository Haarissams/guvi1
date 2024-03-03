
 //Arrow functions:

//Print odd numbers in an array:
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const printOddNumbers = arr => arr.forEach(num => { if(num % 2 !== 0) console.log(num); });
printOddNumbers(numbers); 

// Output: 1, 3, 5, 7, 9

//Convert all the strings to title caps in a string array:
const strings = ["hello", "world", "how", "are", "you"];
let convertToTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log(convertToTitleCaps(strings));

// Output: ["Hello", "World", "How", "Are", "You"]

//Sum of all numbers in an array:
const arr = [1, 2, 3, 4, 5];
const sumOfNumbers = arr => arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumOfNumbers(numbers));

// Output: 15

//Return all the prime numbers in an array:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const findPrimeNumbers = arr => arr.filter(num => isPrime(num));
const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

console.log(findPrimeNumbers(numbers)); 

// Output: [2, 3, 5, 7]

//Return all the palindromes in an array:
const words = ["level", "hello", "racecar", "world", "madam"];
const isPalindrome = str => str === str.split('').reverse().join('');
const findPalindromes = arr => arr.filter(item => isPalindrome(String(item)));
console.log(findPalindromes(words));

// Output: ["level", "racecar", "madam"]