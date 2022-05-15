// function add(a:number, b:number) : number {
//     return a+b;
// }

const sub = (a:number, b:number) => {return a-b;};

//call signature 선언
// 함수 구현 이전에 이 함수에 대한 argument와 return에 대한 타입을 생각하게 해준다.
type Add = (a:number, b:number) => number;



const add:Add = (a,b) => a+b;



