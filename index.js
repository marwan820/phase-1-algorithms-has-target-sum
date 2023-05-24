function hasTargetSum(array, target) {
  // 1 step
  const seenNumbers = {};
  for (const number of array) {
    // n steps
    const complement = target - number;
    // n steps
    if (seenNumbers[complement]) return true;
    // n steps
    seenNumbers[number] = true;
  }
  // 1 step
  return false;
}
  
/* create if statement if two elements from array add up to
the target number retrun true else false */

// integer array from first test case 


// create an array of integers 
//if array element pairs up to the target number 
// return true
// else return false 
// would have to the array elements and add them up
// create a hash table to store the values 

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
/*The function should return true if 
any pair of numbers in the array adds up to
the target number.


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}
 */
module.exports = hasTargetSum;
