// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charachters = {};
    let counter = 0;
    let mostUsedChar = ''
    strSplitted = str.split('');
    strSplitted.forEach((e, i) => {
        if(charachters[e] === undefined){
            charachters[e] = 1
            
        }
        else{
            charachters[e] +=1
            
        }
    });
    for(key in charachters){
        if(charachters[key] > counter){
            counter = charachters[key]
            mostUsedChar = key

        }

    }
    return mostUsedChar
}

module.exports = maxChar;
