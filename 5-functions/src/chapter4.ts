// 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
// -> 하나의 함수 func
// -> 모든 매개변수의 타입 number
// -> ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
// -> ver2. 매개변수가 2개 -> 이 매개변수에 다 더한 값을 출력

//오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//구현 시그니처
// 이렇게 매개변수 타입을 정의해버리면 첫번째 오버로드 시그니처에 에러가 난다
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
func(1, 2, 3);
