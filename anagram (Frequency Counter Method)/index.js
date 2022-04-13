const sameWord = (word1, word2) => {
  //create empty obj to store
  const lookUp = {};
  //if lengths != equal, return false
  if (word1.length !== word2.length) {
    return false;
  }
  //loop through word1's character exist => add 1, non-exist => equal 1
  for (let i = 0; i < word1.length; i++) {
    let letter = word1[i];
    lookUp[letter] ? (lookUp[letter] += 1) : (lookUp[letter] = 1);
  }
  //loop through & check word2's character (in obj) exist  => minus 1, non-exist => return false
  for (let i = 0; i < word2.length; i++) {
    let letter = word2[i];
    if (!lookUp[letter]) {
      return false;
    } else {
      return (lookUp[letter] -= 1);
    }
  }
  return true;
};

//test cases
console.log(sameWord("azz", "zza"), "result true");
console.log(sameWord("Boy", "boy"), "result false");
console.log(sameWord("tom", "tommy"), "result false");
