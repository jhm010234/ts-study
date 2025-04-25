// 선언 합치기
interface Person {
  name: string;
}

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "",
  age: 27,
};

// 모듈 보강
interface Lib {
  a: number;
  b: number;
}

const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
