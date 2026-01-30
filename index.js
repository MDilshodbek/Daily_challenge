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

const findMedianSortedArrays = (nums1, nums2) => {
  let merged = [...nums1, ...nums2].sort((a, b) => a - b);
  let mid = Math.floor(merged.length / 2);

  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  }
  return merged[mid];
};

const result = findMedianSortedArrays([1, 2], [3, 4, 5]);
console.log("result:", result);
