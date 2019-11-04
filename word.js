//import needed files
const letter = require('./letter');

//Create a constructor for word
class Word {
    constructor (word) {
        this.array = [];
        for (var i = 0; i < word.length; i++) {
            var letter = new letter(word[i]);
            this.array.push(letter)
        }
    }
}