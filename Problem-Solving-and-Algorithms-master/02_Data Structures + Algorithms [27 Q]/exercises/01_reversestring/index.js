// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const reversed = [];
  const splitted = str.split("");
  splitted.forEach((e,i) => {
      reversed.push(e)
  })
  return reversed.reverse().join('');
}


module.exports = reverse;
