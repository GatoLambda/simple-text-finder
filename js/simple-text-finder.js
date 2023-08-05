
class SimpleTextFinder {
    historial = [];
    constructor(wordInput, color, textInput){
        this.wordInput = wordInput;
        this.color = color;
        this.textInput = textInput;
        this.text = textInput.innerHTML;
        this.historial.push(this.text);
        this.wordIndex = [];
        this.coincidences = 0;
        this.wordInput.addEventListener("keyup", e => {
            this.currentWord = e.target.value;
            this.find();
        });
    }
    deleteAll(){
        console.log("Deleting all words");
    }
    delete(){
        console.log("Deleting a word");
    }
    recover(){
        console.log("Recovering the text before");
    }
    find(){
        let replacedText = this.text.replaceAll(this.currentWord, `<span class="coincidence" style="background-color:${this.color}">${this.currentWord}</span>`);
        this.coincidences = replacedText.match(/coincidence/g).length;
        this.textInput.innerHTML = replacedText;
    }
    underline(){
        console.log("Underline words");
    }
}

simpleTextFinder = new SimpleTextFinder(document.getElementById("wordInput"), "red", document.getElementById("text"));

console.log(SimpleTextFinder.currentWord);

