//constructor for finding letter
class Letter {
    constructor (letter) {
        this.letter = letter;
        this.blank = false;
        this.guessed = false;
    }

    //for the blank spaces in the string
    toString() {
        if (this.letter === " ") {
            this.blank = true;
            return " ";
        } 
    }

    //see if letter is guessed correctly.
    guessed(guessedLetter) {
        if (guessedLetter === this.letter) {
            this.guessed = true;
            return this.letter;
        }
    }
}

module.exports = {
    Letter
}