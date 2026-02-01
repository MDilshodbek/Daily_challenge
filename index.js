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

function convert(s, numRows) {
  // If there is only one row, zigzag cannot happen
  if (numRows === 1) return s;

  // Create an array where each index represents one row
  // Example for numRows = 4 → ["", "", "", ""]
  const rows = new Array(numRows).fill("");

  // This keeps track of which row we are currently writing to
  let currentRow = 0;

  // This tells us the direction of movement
  // false → moving up
  // true  → moving down
  let goingDown = false;

  // Loop through each character in the string
  for (let char of s) {
    // Add the character to the current row
    rows[currentRow] += char;

    // If we are at the top row OR bottom row,
    // we must change direction
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    // Move to the next row based on direction
    // If goingDown is true → move down (+1)
    // If goingDown is false → move up (-1)
    currentRow += goingDown ? 1 : -1;
  }

  // Join all rows into one final string
  return rows.join("");
}

console.log(convert("abcdef", 4));
