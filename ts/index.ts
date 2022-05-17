// type Player = {
//     readonly name: string,
//     age?: number
// }
//
// const lynn : Player = {
//     name:"nico",
//     age: 12
// }
//
// const playerMaker = (name:string) : Player => ({name});
//
// const nico = playerMaker("nico");
// nico.age = "las";
//
// const numbers : readonly number[] = [1,2,3,4,5];
// numbers.push(6);
//
// // 정해진 순서에 맞는 배열이 탄생~
// const player: readonly [string,number,boolean] = ["nico",1,true];
// player[0] = "larry";
//
// let a:unknown; //api로부터 응답이 왔는데, 어떤 타입일지 모를때
// if(typeof a === 'number'){
//     let b = a+1;
// }
// if(typeof a === 'string'){
//     let b = a.toUpperCase();
// }
//
// //return nothing
// function hello(){
//     console.log('x');
// }
//
// // 함수가 절대 return하지 않을 때
// function neverhello(name:string|number){
//     if(typeof name === "string"){
//
//     }else if(typeof name === "number"){
//
//     }else{
//         throw new Error("xxx")
//     }
// }
//
