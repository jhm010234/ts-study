// 함수 타입 정의

import { log } from "console";

function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
function introduce(name: string, age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}

// introduce("이정환", 175);
// introduce("이정환");

// 몇 개의 인수가 전달될지 모르니깐 rest 파라미터를 사용해야 한다.
// rest 파라미터는 가변적인 길이의 인수들을 전달하면, 이것들을 배열로 묶어서 rest에 저장할 수 있도록 도와주는 자바스크립트 문법이다.
function getSum(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); //6
// getSum(1, 2, 3, 4, 5); //15
