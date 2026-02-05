// function lengthOfLongestSubstring(s) {
//   let maxLength = 0;

//   for (let i = 0; i < s.length; i++) {
//     let current = "";

//     for (let j = i; j < s.length; j++) {
//       if (current.includes(s[j])) {
//         break;
//       }

//       current += s[j];

//       maxLength = Math.max(maxLength, current.length);
//     }
//   }

//   return maxLength;
// }

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));

// const findMedianSortedArrays = (nums1, nums2) => {
//   let merged = [...nums1, ...nums2].sort((a, b) => a - b);
//   let mid = Math.floor(merged.length / 2);

//   if (merged.length % 2 === 0) {
//     return (merged[mid - 1] + merged[mid]) / 2;
//   }
//   return merged[mid];
// };

// const result = findMedianSortedArrays([1, 2], [3, 4, 5]);
// console.log("result:", result);

// var longestPalindrome = function(s) {
//      let maxLength = 0;

//   for (let i = 0; i < s.length; i++) {
//     let current = "";

//     for (let j = i; j < s.length; j++) {
//       if (current.includes(s[j])) {
//         break;
//       }

//       current += s[j];

//       maxLength = Math.max(maxLength, current.length);
//     }
//   }

//   return maxLength;
// };

// const longestPalindrome = (s) => {
//   let startIndex = 0;
//   let maxLength = 1;

//   function expand(left, right) {
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//       left--;
//       right++;
//     }

//     const length = right - left - 1;

//     if (length > maxLength) {
//       maxLength = length;
//       startIndex = left + 1;
//     }
//   }

//   for (let i = 0; i < s.length; i++) {
//     expand(i, i);
//     expand(i, i + 1);
//   }

//   return s.substring(startIndex, startIndex + maxLength);
// }

// const result = longestPalindrome("habibi");
// console.log("result:", result);

// function convert(s, numRows) {
//   // If there is only one row, zigzag cannot happen
//   if (numRows === 1) return s;

//   // Create an array where each index represents one row
//   // Example for numRows = 4 → ["", "", "", ""]
//   const rows = new Array(numRows).fill("");

//   // This keeps track of which row we are currently writing to
//   let currentRow = 0;

//   // This tells us the direction of movement
//   // false → moving up
//   // true  → moving down
//   let goingDown = false;

//   // Loop through each character in the string
//   for (let char of s) {
//     // Add the character to the current row
//     rows[currentRow] += char;

//     // If we are at the top row OR bottom row,
//     // we must change direction
//     if (currentRow === 0 || currentRow === numRows - 1) {
//       goingDown = !goingDown;
//     }

//     // Move to the next row based on direction
//     // If goingDown is true → move down (+1)
//     // If goingDown is false → move up (-1)
//     currentRow += goingDown ? 1 : -1;
//   }

//   // Join all rows into one final string
//   return rows.join("");
// }

// console.log(convert("abcdef", 4));

// const  reverse = (x)  => {
//   const MAX = 2147483647;
//   const MIN = -2147483648;

//   let result = 0;

//   while (x !== 0) {
//     // Get last digit
//     const digit = x % 10;

//     // Remove last digit from x
//     x = (x / 10) | 0; 
//     // Using bitwise OR to drop decimals safely

//     // Check for positive overflow
//     if (result > Math.floor(MAX / 10)) return 0;
//     if (result === Math.floor(MAX / 10) && digit > 7) return 0;

//     // Check for negative overflow
//     if (result < Math.ceil(MIN / 10)) return 0;
//     if (result === Math.ceil(MIN / 10) && digit < -8) return 0;

//     // Build reversed number
//     result = result * 10 + digit;
//   }

//   return result;
// }

function myAtoi(s) {
  // Step 1: Remove leading spaces
  let index = 0;

  // Skip all whitespace characters at the beginning
  while (index < s.length && s[index] === " ") {
    index++;
  }

  // Step 2: Check sign (+ or -)
  let sign = 1; // Assume positive by default

  if (index < s.length && s[index] === "-") {
    sign = -1; // Number will be negative
    index++;
  } else if (index < s.length && s[index] === "+") {
    sign = 1; // Number will be positive
    index++;
  }

  // Step 3: Read digits and build the number
  let result = 0;

  // Read digits until a non-digit character is found
  while (index < s.length && s[index] >= "0" && s[index] <= "9") {
    let digit = s[index] - "0"; // Convert character to number

    // Build the number step by step
    result = result * 10 + digit;

    index++;
  }

  // Step 4: Apply sign
  result = result * sign;

  // Step 5: Clamp the result within 32-bit signed integer range
  let min = -(2 ** 31);       // -2147483648
  let max = 2 ** 31 - 1;      // 2147483647

  if (result < min) return min;
  if (result > max) return max;

  // Final answer
  return result;
}

const final = console.log(myAtoi("   -042"));
console.log("final:", final);



