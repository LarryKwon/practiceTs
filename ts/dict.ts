type Words = {
    [key:string]: string
}

class Word{
    constructor(
        public term: string,
        public def: string
    ) {
    }
}

class Dict{
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term]===undefined){
            this.words[word.term] = word.def;
        }
    }
    def(term:string){
        return this.words[term];
    }
}

