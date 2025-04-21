let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;
// dog = animal; //오류 발생

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingbook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingbook;
// programmingbook = book; //다운캐스팅으로 에러 발생

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 3300,
//   skill: "reactjs",
}; 
