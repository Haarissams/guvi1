// Print odd numbers in an array :
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let printOddNumbers=(arr)
  for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }


//Convert all the strings to title caps in a string array

let stringArray = ["hello world", "good morning", "how are you"];
let titleCaseArray = stringArray.map(function(str) 
{
    return str.replace(/\b\w/g, function(char)
     {
        return char.toUpperCase();
    });
});
console.log(titleCaseArray);

//Sum of all numbers in an array
let numbers = [1, 2, 3, 4, 5];
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
let totalSum = sumArray(numbers);
console.log("The sum of all numbers in the array is: " + totalSum);

//Return all the prime numbers in an array
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//Return all the palindromes in an array:

const str = ["level", "hello", "racecar", "world", "madam"];
const isPalindrome = (str);
 {
    return str === str.split('').reverse().join('');
}

function findPalindromes(arr)
 {
    return arr.filter(item => isPalindrome(String(item)));
}

console.log(findPalindromes(words)); 

//Return median of two sorted arrays of the same size:


const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
let findMedianSortedArrays = (nums1, nums2);
 {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
}

console.log(findMedianSortedArrays(nums1, nums2)); 

//Remove duplicates from an array:

const duplicates = [1, 2, 2, 3, 4, 4, 5];
const  removeDuplicates = (arr);
 {
    return [...new Set(arr)];
}

console.log(removeDuplicates(duplicates)); 

//Rotate an array by k times:
const arrayToRotate = [1, 2, 3, 4, 5];
const rotations = 2;
function rotateArray(arr, k) {
    const len = arr.length;
    k %= len;
    reverseArray(arr, 0, len - 1);
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, len - 1);
    return arr;
}

function reverseArray(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

console.log(rotateArray(arrayToRotate, rotations)); 





