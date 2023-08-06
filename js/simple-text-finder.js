
class SimpleTextFinder {

    historial = [];

    constructor(wordInput,textInput, caseSensitive){
        this.wordInput = document.querySelector(wordInput);
        this.textInput = document.querySelector(textInput);
        this.caseSensitive = caseSensitive;
        this.text = this.textInput.innerHTML;
        this.historial.push(this.text);
        this.wordIndex = [];
        this.coincidences = 0;
    }

    init(){
        this.wordInput.addEventListener("keyup", e => {
            this.currentWord = e.target.value;
            this.clearText();
            if(this.currentWord != "") this.find();
        });
    }

    find(){
        let replacedText = "";
        if(!this.caseSensitive){
            replacedText = this.text.replaceAll(this.currentWord, `<span class="stf-coincidence">${this.currentWord}</span>`);
        }else{
            let regEx = new RegExp(this.currentWord, "ig");
            replacedText = this.text.replaceAll(regEx, '<span class="stf-coincidence">$&</span>');
        }
        this.textInput.innerHTML = replacedText;
        let coincidences =  this.textInput.querySelectorAll(".stf-coincidence");
        let index = 0;
        coincidences.forEach( coincidence => {
            coincidence.setAttribute("data-stf-coincidence",index);
            index++;
        });
    }

    clearText(){
        this.textInput.innerHTML = this.historial[this.historial.length - 1];
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

    underline(){
        console.log("Underline words");
    }
}

const simpleTextFinder = new SimpleTextFinder("#wordInput", "#text", true);
simpleTextFinder.init();
