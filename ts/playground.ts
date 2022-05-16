// function add(a:number, b:number) : number {
//     return a+b;
// }

const sub = (a:number, b:number) => {return a-b;};

//call signature 선언
// 함수 구현 이전에 이 함수에 대한 argument와 return에 대한 타입을 생각하게 해준다.
// type Add = (a:number, b:number) => number;

//overloading
type Add = {
    (a:number, b:number) : number,
    (a:number, b:string) : number,
    (a:number, b:number, c:number): number
}

const add:Add = (a,b,c?) => {
    if(typeof b === "string") return a;
    else{
        return a+b;
    }
}

type Config = {
    path: string,
    state: object
}

type Push = {
    (path:string):void
    (config: Config):void
}

const push:Push = (config) =>{
    if(typeof config == "string") {console.log(config)}
    else{
        console.log(config.path)
    }
}
//
// type SuperPrint = {
//     <TypePlaceHolder>(arr:TypePlaceHolder[]):void,
// }

type SuperPrint = <T>(a: T[]) => T;


const superPrint:SuperPrint = (arr) => {
    arr.forEach(i=>console.log(i));
    return arr[0];
}

superPrint([1,2,3,4]);
superPrint([true,false,true]);
superPrint(["a","b","c"]);

type GamePlayer<E> = {
    name:string
    extraInfo:E
}

type NicoExtra = {
    favFood:string
}

type NicoPlayer = GamePlayer<NicoExtra>

const nnico:NicoPlayer = {
    name:"nico",
    extraInfo:{
        favFood:"kimchi"
    }
}

const llynn: GamePlayer<null> = {
    name:"lynn",
    extraInfo:null
}