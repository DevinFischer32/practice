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
