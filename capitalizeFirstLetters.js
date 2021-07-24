const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

//Check if the capitalizeFirstLetters is a function.
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

//Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

//Check if that capitalizeFirstLetters transforms javascript correctly
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

//Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('i'), 'I');

//Check that it works for a 1 string
assert.strictEqual(capitalizeFirstLetters('me'), 'Me');

//Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');

//////////code///////////
function capitalizeFirst(str) {   
    const coupleOfWords = str.split(" ");
    const coupleOfWordsCased = [];
  
    for (let i = 0; i < coupleOfWords.length; i++) {
      const word = coupleOfWords[i];
      coupleOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
  
    return coupleOfWordsCased.join(" ");
}