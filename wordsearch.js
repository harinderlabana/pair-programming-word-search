//@harinderlabana - GitHub - Harinder Labana
//@jackiehaug - GitHub - Jackie Haug

const wordSearch = (letters, word) => {
  if (letters !== []) {
    //search horizontally from left to right
    const horizontalJoin = letters.map((ls) => ls.join(''));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }

    //search vertically from top to bottom
    for (let i = 0; i < letters.length; i++) {
      //hold result of array for comparison
      const newArr = [];
      for (let j = 0; j < letters[i].length; j++) {
        if (letters[i][j] === word.charAt(0)) {
          for (let k = 0; k < word.length; k++) {
            newArr.push(letters[i + k][j]);
          }
          if (newArr.join('').includes(word)) {
            return true;
          }
          return false;
        }
      }
    }
  }
  return false;
};

module.exports = wordSearch;
