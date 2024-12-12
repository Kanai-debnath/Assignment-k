//Question no-1
function calculateDifference(a, b){
  return a - b
}
console.log(calculateDifference(10, 5));
console.log(calculateDifference(5, 10));

//Question no-2
function isOdd(num) {  
  return num % 2 !== 0;
}

console.log(isOdd(3));
console.log(isOdd(4));
console.log(isOdd(0)); 

//Question no-3
function findMin(numbers) {
  if (numbers.length === 0) {
      throw new Error("Array cannot be empty");
  }
  return Math.min(...numbers);
}

console.log(findMin([32, 11, 42, 15, 50, 90]));

//Question no-4
function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([11, 18, 23, 32, 40]));

//Question no-5
function sortArrayDescending(numbers) {
  
  return numbers.slice().sort((a, b) => b - a);
}

const numbers = [5, 2, 8, 1, 3];
const sortedNumbers = sortArrayDescending(numbers);

console.log(sortedNumbers);
console.log(numbers); 

//Question no-6
function lowercaseFirstLetter(str) {
  if (!str) return ""; 
  return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("Bangladesh"));
console.log(lowercaseFirstLetter("Kanai")); 

//Question no-7
function findAverage(numbers) {
  if (numbers.length === 0) return 0; 
  const sum = numbers.reduce((acc, num) => acc + num, 0); 
  return sum / numbers.length;
}


const numbers = [10, 20, 30, 40, 50];
console.log(findAverage(numbers));

const emptyArray = [];
console.log(findAverage(emptyArray)); 
*/

//Question no-8
function isLeapYear(year) {
  if (year % 4 === 0) {
      if (year % 100 === 0) {
          return year % 400 === 0;
      }
      return true;
  }
  return false;
}

console.log(isLeapYear(2000));
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2024)); 
console.log(isLeapYear(2023));


