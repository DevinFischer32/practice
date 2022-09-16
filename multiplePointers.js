function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
sumZero([-3, -2, -1, 0, 3]);

// Mine that i came up with
function countUniqueValues(arr) {
  let uv = 0;
  for (let i = 0; i < arr.length; i++) {
    let e = arr[i];
    if (e - arr[i + 1] === 0) {
      e += 1;
    } else {
      arr[i] = arr[e];
      uv++;
    }
  }
  return uv;
}

// His Way

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 2, 2, 3, 4, 5, 5, 7, 8]);

// Course Challenge
//  Multiple Pointers - averagePair
//  Write a function called averagePair. Given a sorted array of integers and a target average,
//  determine if there is a pair of values in the array where the average of the pair equals the target average.
//  There may be more than one pair that matches the average target.

// Sample Input
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(arr, target) {
  let start = 0,
    end = arr.length - 1;
  // I have two pointers one starts at beggining and one at the end of array
  while (start < end) {
    // While start is less than end run
    let avg = arr[start] + arr[end] / 2;
    // avg of the two indexs
    if (avg === target) return true;
    // compares avg to target number returns true
    avg > target ? end-- : start++;
    // if avg is more than target move end pointer down one index if false than move start up one index
  }
  return false;
}
