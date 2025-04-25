# 함수 타입 정의

- 함수를 설명하는 가장 좋은 방법  
  자바스크립트 : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기하는 것.

  ```ts
  function func(a, b) {
    return a + b;
  }
  ```

  <br>

  타입스크립트 : 어떤 (타입의) 매개변수를 받고, 어떤 (타입의) 결과값을 반환하는지 이야기하는 것.

  ```ts
  function func(a: number, b: number): number {
    return a + b;
  }
  ```

<br>

## 화살표 함수의 타입을 정의하는 방법

```ts
const add = (a, b) => a + b;

const add = (a: number, b: number): number => a + b;
```

<br>

## 함수의 매개변수

```ts
function introduce(name: string, tall: number) {
  console.log(`name: ${name}`);
  console.log(`tall: ${tall}`);
}

introduce("이정환", 175);
```

<br>

아래처럼 `${tall+10}`이라고 코드를 작성하면 tall은 undefined 값일수도 있기 때문에 오류가 발생한다.

```ts
// 함수의 매개변수
function introduce(name: string, tall?: number) {
  console.log(`name: ${name}`);
  console.log(`tall: ${tall + 10}`);
}
```

<br>

그래서 이럴 떄는, 조건문을 이용해서 typeof로 작성을 해야 한다.

```ts
function introduce(name: string, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}
```

<br>

선택적 매개변서룰 사용할 떄 주의사항은 필수 매개변수 앞에 나오면 안된다. 아래는 tall이라는 선택적 매개변수 뒤에 age라는 필수 매개변수가 앞에 온 경우로 에러가 발생한다.

```ts
function introduce(name: string, tall?: number, age: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}

//수정 후 (반드시 선택적 매개변수는 필수 매개변수 뒤에 와야 한다.)
function introduce(name: string, age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}

introduce("이정환", 27, 175);
introduce("이정환", 27);
```

<br>

## rest 매개변수

: 몇 개의 인수가 전달될지 모를 때 rest 파라미터를 사용해야 한다. rest 파라미터는 가변적인 길이의 인수들을 전달하며, 이것들을 배열로 묶어서 rest에 저장할 수 있도록 도와주는 자바스크립트 문법이다.

```ts
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); //15
```

<br>

만약 매개변수의 개수를 정하고 싶은 경우, 배열 타입이 아니라 **튜플 타입**으로 만들어주면 된다.  
아래는 개수를 3개로 정했으므로, 3개 아닌 다르 개수의 인수를 넣을 경우 에러가 발생한다.

```ts
function getSum(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); //6
```
