var randomWord = function(randomword) {
    this.text = randomword;
    this.length = randomword.length;
};


var SelectedLetter = function(letter) {
    var inUse = new randomWord(letter)
    this.letters = inUse.text.split("");
    this.length = inUse.length;
    this.array = [];
    this.showblanks = function() {
        for (var i = 0; i < this.length; i++) {
            this.array.push("_");
        }
        console.log(this.array.join("  "));
    }
    this.showletter = function(answer) {
        for (var i = 0; i < this.length; i++) {
            if (this.letters[i] == answer) {
                this.array[i] = answer;
            };
        };
    };
};

module.exports = SelectedLetter;
