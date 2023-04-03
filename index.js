function isPalindrome(word) {
  // Write your algorithm here
  let newWord = word.split('').reverse().join('')
  console.log(newWord);
  if (newWord === word){
    return true
  }
  else
    {return false}
}


/* 
  Add your pseudocode here
  split the word such that each letter is a value in an array
  reverse the values in the array
  join the values in the array to form a word
*/

/*
  Add written explanation of your solution here
  Created a function the isPalindrome that takes a word as an argument then:
  creates a new variable in which the argument undergoes the process:
    change the word to an array using the split() method such that each word is a value in the array
    use the reverse() method to reverse the values in the array
    then use the join() method to join each letter in the array to a full word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
