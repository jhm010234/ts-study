// void -> 공허

//참고로 ts에서 함수의 반환값에도 타입을 정의할 수 있다.
//아래 함수의 반환값은 string
function func1(): string {
  return "hello;";
}

//현재 아래 func2는 아무런 값도 반환하고 있지 않다
//이럴때 함수의 반환값을 void으로 정의하면 된다.
function func2() {
  console.log("hello");
}

//never
function func3(): void {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
