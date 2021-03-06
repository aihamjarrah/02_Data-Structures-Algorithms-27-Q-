// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowelLetters = "aeiou";
    let counter =0 ;
    str = str.toLowerCase()
    const splitted = str.split('');
    splitted.forEach((e, i) => {
        if(vowelLetters.includes(e)){
            counter+=1
        }
    })
    return counter
}

module.exports = vowels;
