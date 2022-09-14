/* Given two strings, write a function to determine 
if the second string is an anagram of the first.
An anagram is a word,phrashe, or name formed by
rearraging the letters of another, such as cinema,
formed from iceman.
*/

function validAnagram(s, a) {
  // Take two string inputs and count the letters from each string and put into obj
  if (s.length !== a.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  //   Counting the letters for string 1
  for (const char of s) {
    if (obj1[char]) {
      obj1[char] += 1;
    } else obj1[char] = 1;
  }
  //   Counting the letters for string 2
  for (const char of a) {
    if (obj2[char]) {
      obj2[char] += 1;
    } else obj2[char] = 1;
  }
  //   Comparing the two obj to see if they have same keys and values
  for (let key in obj1) {
    if (!key in obj2) {
      return false;
    }
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

validAnagram("assswertyui", "assswertyui");

// EXAMPLE O(n)
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
