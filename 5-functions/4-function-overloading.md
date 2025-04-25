# 함수 오버로딩

: 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법으로 자바스크립트에서는 지원이 안되고, **오직 타입스크립트에서만 지원이 된다**

타입스크립트에서 오버로딩을 구현하려면 **이 함수에 어떤 버전들이 있는지 알려줘야 하는데**, 이것을 *오버로드 시그니처*라고 부른다. *오버로드 시그니처*라는 것은 함수를 오버로딩하기 위해서 각각 매개변수별로 다른 버전을 명시해주기 위해 쓴다.

```ts
// 2가지 버전이 있다고 알려줌
function func(a: number): void;
function func(a: number, b: number): void;
```

<br>

오버로드 시그니처를 정의하고나서 **실제 함수를 구현**해야 한다. 이 구현부를 *구현 시그니처*라고 부른다. 아래 코드에서 `func();`와 `func(1, 2);`에서 오류가 발생하는 것은 앞서 오버로드 시그니처를 구현해놨기 때문이다.  
함수를 호출할 때, 이런 인수들의 타입이, 실제 구현부에 정의된 이 매개변수의 개수나 타입에 따르지 않고 오버로드 시그니처들 중에 하나의 버전을 따라간다.

```ts
//오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//구현 시그니처
function func() {}

func(); //오류 발생
func(1);
func(1, 2); //오류 발생
func(1, 2, 3);
```

<br>

아래처럼 함수 안 매개변수에 개수를 정의해버리면 첫번째 오버로드 시그니처에서 오류가 발생한다.  
그러므로, **오버로드 시그니처들의 매개변수이 개수에 차이가 있다면**, 최대한 방어적으로 _선택적 프로퍼티로 매개변수들을 정의해서 모든 오버로드 시그니처들이 의미가 있도록 만들어줘야 한다._

```ts
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
```

<br>

```ts

```
