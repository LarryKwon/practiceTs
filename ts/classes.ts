abstract class User {
    constructor(
        private firstName:string,
        private lastName:string,
        private nickName:string
    ){}

    abstract getNickname(ar:string):string
    
    getFullName(){
        return `${this.firstName} ${this.lastName} ${this.nickName}`;
    }
}

class Player extends User {
    constructor(firstName:string, lastName:string, nickName:string, game:string) {
        super(firstName,lastName,nickName);
    }

}

const nico = new Player("nico","las","니꼬","nomad");
nico.nickName = "니꼬꼬꼬";

