function caesarCipher(string, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newWord = "";

    for (let i = 0; i < string.length; i++) {
        let currentWord = string[i];
        let oldIdx = alphabet.indexOf(currentWord);
        let newIdx = oldIdx + num;
        let newChar = alphabet[newIdx % alphabet.length];  // this was hard to understand // basicly the alphabet.length is 26 and the index is 25
                                                            //so "Z" is index 25 meaning if anything modulos over 25 z will become index 0 which is A (26 & 25 (alphabet.length)) z = a
        newWord += newChar;
    }
    return newWord;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"



/*Write a method caesarCipher that takes in a string and a number.

The function should return a new string where every character of the original is shifted num characters in the alphabet. */
