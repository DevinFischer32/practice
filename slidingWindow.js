function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    // we dont want to go to far into the array so arr.length - num gets the furthest possible index then +1 because of 0 indexing
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
// Nested loop makes this O(n^2)

// His Example O(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
    // This Math.max updates maxSum if tempSum is a larger number
  }
  return maxSum;
}
