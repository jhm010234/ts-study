# 대수 타입

: 여러 개의 타입을 합성해서 새롭게 만들어낸 타입으로 **합집합 타입**과 **교집합 타입**이 존재한다.
<br><br>

## 합집합 - Union 타입

```ts
let a: string | number | boolean | undefined | null | {}; //string과 number의 합집합으로 정의됨
a = 1;
a = "hello";
```

<br>
유니언을 이용해서 여러 타입의 **배열**도 정의할 수 있다.

```ts
let arr:(number | string | boolean) = [1. "hello", true];
```

<br>
객체 타입을 이용해서 유니온 정의하기

```ts
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

//아래와 같이 타입 별칭을 이용해서도 Union 타입을 만들 수가 있다.
type Union1 = Dog | Person;

//Dog 프로퍼티만 넣었을 떄
let union1: Union1 = {
  name: "",
  color: "",
};

//Person 프로퍼티만 넣었을 때
let union2: Union1 = {
  name: "",
  language: "",
};

//Person과 Dog 프로퍼티 다 넣었을 떄
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

//공통된 이름만 했을때는 에러가 발생.
//color가 없기 때문에 dog도, language가 없기 때문에 person도 아니라서 에러가 발생
let union4: Union1 = {
  name: "",
};
```

<br><br>

## 교집합 - Intersection 타입

: 보통 Intersection은 never 타입으로 정의되기 때문에 객체어 많이 사용된다.

```ts
//number과 string의 교집합
//하지만 두 타입은 교집합이 없응, 즉 never(공집합)
let variable: number & string;
```

```ts
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
  //여기서 하나의 프로퍼티라도 빠지면 에러 발생함!
  //=> 교집합이기 때문.
};
```
