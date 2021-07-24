const assert = require('assert');

//Check if the capitalizeFirstLetters is a function.
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

//Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

//Check if that capitalizeFirstLetters transforms javascript correctly
assert.strictEqual(capitalizeFirstLetters('here is virginia'), 'Here Is Virginia');

//Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('i'), 'I');

//Check that it works for a 1 string
assert.strictEqual(capitalizeFirstLetters('me'), 'Me');

//Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');

//////////code///////////

function capitalizeFirstLetters(words){
  let letters = '';
  for (let i = 0; i < words.length; i++) {
      if (i === 0) {
          letters += words[0].toUpperCase();
      } else {
          letters+= words[i];
      }
  }
  return "i am learning TDD";

}