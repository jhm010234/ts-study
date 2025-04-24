import { log } from "util";

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10; //무조건 반환값은 10

let a: A = () => 10; //number 타입
let b: B = () => 10; //number 리터럴 타입 (10)

a = b; //가능
// b = a; //불가능
//넘버 타입을 넘버 리터럴 타입으로 취급 (다운캐스팅)

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; //오류 발생
d = c; //가능

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

//Animal 타입의 매개변수를 받는 함수
let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

//Dog 타입의 매개변수를 받는 함수
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; //업캐스팅 에러 발생
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //   console.log(animal.color); // 에러 발생
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

//함수
let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; //가능
// func2 = func1; //에러 발생
