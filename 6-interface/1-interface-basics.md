# 인터페이스

: 타입에 이름을 지어주는 또 다른 문법을 의미하며, 인터페이스는 우리말로 상호간의 약속된 규칙이라는 뜻이다. 인터페이스는 객체의 구조를 정의하는데 특화된 문법으로 상속, 합침 등의 특수한 기능을 제공한다. 인터페이스에서도 동일한 방법으로 **선택적 프로퍼티 설정**과 **읽기 전용 프로퍼티** 설정이 가능하다.

```ts
interface Person {
  readonly name: string;
  age?: number;
}

const person: Person = {
  name: "이정한",
};

person.name = "홍길동"; //readonly로 설정했기 때문에 에러 발생
```

<br>

## 메서드 타입 정의하기

메서드의 타입을 정의하는 것 또한 가능핟. 메서드의 타입을 정의하는 것은 타입 별칭과 똑같으며 **함수 타입 표현식** 말고도 **호출 시그니처**를 사용할 수 있다.

```ts
interface Person {
  readonly name: string;
  age?: number;
  //함수 타입 표현식
  sayHi: () => void;
  //호출 시그니처
  sayHi(): void;
}
```

<br>

## 함수 오버로딩

sayHi 메서드에 인수를 안 받는 버전, 인수를 2개 받는 버전 증 여러개 만들고 싶을 때는 함수 타입 표현식이 아닌 *호출 시그니처*를 사용해야 한다.  
*호출 시그니처*를 사용할 때에는 메서드를 두번 정의하면서 인수를 다르게 설정해주면 된다.

```ts
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}
```

<br>

인터페이스는 객체 타입을 정의하는 데에 특화되어 있기 때문에 타입 별칭과는 차이점이 존재한다.  
타입에서는 Number와 string의 유니온 타입과, 인터섹션 타입을 만들 수 있었는데, _인터페이스에서는 유니온과 인터섹션 타입을 만들 수가 없다._

```ts
type Type1 = number | string; //타입에서의 유니온 타입
type Type2 = number & string; //타입에서의 인터섹션 타입

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
} | number // 에러 발생

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
} & number // 에러 발생
```

<br>
만약 인터섹션이나 유니온을 이용해야 한다면, 타입 별칭에다가 활용을 하거나 type 주석에 활용을 해야 한다.

```ts
//타입 별칭 활용 예시
type Type1 = number | string | Person;
type Type2 = number & string & Person;

//type 주석에 활용 예시
const person: Person | number = {
  name: "이정한",
  sayHi: function () {
    console.log("Hi");
  },
};
```
