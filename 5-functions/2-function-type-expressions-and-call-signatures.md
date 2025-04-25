# 함수 타입 표현식과 호출 시그니쳐

: 함수 타입을 별도로 정의하는 방법

## 함수 타입 표현식

호출 시그니처 또는 함수 시그니처라고도 부른다.

```ts
// 타입 별칭을 이용한 표현식
// 호출 시그니처 또는 함수 시그니처라고 부른다
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

<br>

일반적으로 매개변수와 반환값에 타입을 일일이 다 정의해줘야 된다면, **중복되는 코드가 많아**지게 되므로 함수 타입 표현식을 사용하면 깔끔하게 작성이 가능하다!

```ts
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;
```

<br>
아래처럼 작성해도 상관없다

```ts
type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;
```

<br>

## 호출 시그니처 (콜 시그니처)

함수의 타입을 별도로 정의하는 또 다른 문법으로 앞서 다룬 것처럼 함수의 타입을 분리해서 정의할 수가 있다. 함수 타입의 표현식과 동일한 기능을 한다.  
중괄호를 열어서 마치 객체 타입을 정의하듯이 하는 이유는 사실 자바스크립트의 함수도 객체이기 때문이다.

```ts
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
```

<br>

## 하이브리드 타입

타입을 만들면, 이 타입을 갖는 변수를 마치 객체로도 쓰고 함수로도 쓸 수 있다고 해서 하이브리드 타입이라고 한다.  
호출 시그니처를 이용할 때 객체에 프로퍼티를 추가로 정의할 수 있다.

```ts
type Operation2 = {
  (a: number, b: number): number;
  // 함수도 객체이기 때문에 add2();처럼 호출될 수도 있다.
  name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2();
add2.name;
```

<br>

```ts

```

<br>

```ts

```

<br>

```ts

```

<br>
