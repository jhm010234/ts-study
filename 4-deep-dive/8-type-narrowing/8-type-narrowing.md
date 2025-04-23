# 타입 좁히기

: 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 상황에 따라 좁히는 방법

```ts
// value => number : toFixed
// value => string : toUpperCase
function func(value: number | string) {
  value;
  //조건문 밖에서 정의하면 에러 발생
  value.toUpperCase();
  value.toFixed();

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

<br>

## 타입 가드

typeof 외에도 다양한 타입 가드들이 있다.

Node.js가 기본적으로 제공하는 내장 객체들에 대해서는 타입들이 다 기본적으로 제공된다.
ex) Date

<br>
자바스크립트의 typeof 연산자는 null 값에다가 typeof을 해도 오브젝트를 반환하기 때문에 아래 코드는 에러가 발생한다.

```ts
function func(value: number | string | Date | null) {
  value;
  //조건문 밖에서 정의하면 에러 발생
  //   value.toUpperCase();
  //   value.toFixed();

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "object") {
    console.log(value.getTime()); //date 객체 외에도 null 값도 포함됨
    //getTime에는 null값을 사용할 수 없기 때문에 에러가 발생하는것.
  }
}
```

<br>
instanceof 연산자는 왼쪽에 있는 값이 오른쪽 instances냐고 묻는 것이다. 맞으면 true, 틀리면 false를 반환한다. <br>
주의해야 하는것은 instanceof 연산자 우측에는 타입이 오면 안된다. Date가 올 수 있었던 것은 date는 자바스크립트의 내장 클래스이기 때문이다.Person은 클래스가 아닌 객체이기 때문에 instanceof와 사용이 불가능하다.

```ts
function func(value: number | string | Date | null) {
  value;
  //조건문 밖에서 정의하면 에러 발생
  //   value.toUpperCase();
  //   value.toFixed();

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    //즉 value가 Date 객체냐고 묻는 것.
    console.log(value.getTime());
  }
}
```

<br><br>

```ts
function func(value: number | string | Date | null | Person) {
  value;

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if ("age" in value) {
    console.log();
  }
}
```

객체와 사용하고 싶을 때는 instanceof가 아닌 `in`을 사용하면 된다.  
`age in value`는 age라는 프로퍼티가 value라는 값에 있냐는 문구로 있으면 true, 없으면 false를 반환한다.  
현재 value의 타입으로 들어올수 있는게 number | string | Date | null | Person 중에 age라는 프로퍼티를 가질 수 있는건 Person 밖에 없기 때문에 문제가 없으나 **value는 null일수도 있다는 에러가 발생**한다. 왜냐하면 **in 연산자 뒤에는 null이나 undefined 값이 들어오면 안되기 때문**이다.  
그래서 이럴 때에는 이 value가 null이 아님을 밝혀주기 위해 `value &&`로 값이 있다고 알려주면 된다.

```ts

```
