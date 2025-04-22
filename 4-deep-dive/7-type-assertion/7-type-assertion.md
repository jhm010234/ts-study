# 타입 단언

- 타입 단언은 어떠한 상황에서 필요한가?  
  빈 객체의 타입을 먼저 정의한 후에 프로퍼티 값을 넣어주고 싶을때, **타입 단언**을 사용한다. 즉 우리의 의도와 다르게 변수의 타입이 추론될때 초기화 값의 타입을 단언해주면 된다.

```ts
//빈 객체는 Person의 프로퍼티가 없기 때문이다.
let person = {};

//이후에 이렇게 프로퍼티의 값을 추가하고 싶을땐?
person.name = "이정한";
person.age = 27;
```

<br>
아래는 해결방법이다.

```ts
type Person = {
  name: string;
  age: number;
};

//타입 단언
let person = {} as Person;

person.name = "이정한";
person.age = 27;
```

<br>
아래처럼 Dog에 정의되어 있지 않은 breed를 꼭 넣어야 하는 경우에는 어떻게 해야할까?

```ts
type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", //초과 프로퍼티 검사 발동
};
```

<br>
이럴때도 타입 단언을 사용하면 된다.

```ts
type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", //초과 프로퍼티 검사 발동
} as Dog; //타입 단언
```

<br>

타입 단언은 아무런 상황에서 쓰이는건 아니다.
<br><br>

## 타입 단언의 규칙

값 as 단언 (단언식)을 작성할 때 A as B라고 가정하면, A가 B의 슈퍼타입이거나, A가 B의 서브타입이여야 한다.

```ts
//10은 number 타입이고 never은 모든 타입의 서브타입이기 때문에 타입 단언이 이루어진다.
let num1 = 10 as never;

//역시 unknown 타입은 모든 타입의 슈퍼 타입이기 때문에 단언이 가능하다. a가 b의 서브타입.
let num2 = 10 as unknown;

//오류가 발생하며 단언이 발생하지 않는다.
//number 타입과 string 타입은 교집합이 없기 때문에 서로 슈퍼타입 또는 서브 타입이 아니다.
let num3 = 10 as string;
```

<br>
number 타입을 오류 안나게 string 타입으로 바꿀 수 있는 방법이 있긴 하다. 단언을 하고 다시 한번 단언을 하는 방법으로, number 타입은 unknonw 타입의 서브 타입이기 때문에 첫번째 단언이 성공적으로 이루어지며, a가 b의 슈퍼타입이기 때문에 또 단언이 성공적으로 된다.   <br>
다중 단언으로 단언이 안되는걸 해결할 수 있지만, 절대 좋은 방법은 아니다.

```ts
let num3 = 10 as unknown as string;
```

<br><br>

## const 단언

변수를 선언했을 떄, const로 선언한것과 동일하게 바꿔준다. 또한 readonly, 즉 수정할 수 없는 타입으로 정의해주는 역할도 한다. 보통 코드에서 **!(물음표)** 를 사용한다.

```ts
// 타입을 number로 추론
let num4 = 10;
// 타입을 10으로 추론
let num5 = 10 as const;
```

<br>

```ts
//객체 타입으로 자동 추론이 된다
let cat1 = {
  name: "야옹이",
  color: "yelow",
};

//모든 프로퍼티가 readonly, 읽기 전용 픅로퍼티로 변경된다
//읽기 전용으로 타입이 정의가 되면 수정할 수 없는 객체가 된다
let cat2 = {
  name: "야옹이",
  color: "yelow",
} as const;
```

<br>

## non null 단언

: 어떤 값이 null이거나 undefined이 아니라고 typescript 컴파일러에게 알려주는 역할
<br>

```ts
type Post = {
  title: string;
  author?: string;
  //물음표를 붙여 선택적 프로퍼티로 정의
};

let post: Post = {
  title: "게시글1",
  author: "이정한",
};

//이 게시글의 작성자의 이름 길이가 몇개인지 출력하는 코드
//자동으로 물음표 키워드가 추가된다.
//자바스크립트에서 제공하는 옵셔널 체이닝이라는 키워드이다.
//값이 null이거나 undefined일 경우에 점표기법으로 접근하면 오류가 발생하니,
// 물음표를 붙여 값 전체가 undefined로 해주는 역할
//하지만 이렇게 하면 오류가 뜨는게 우리는 Number로 타입을 지정했으나 값이 undefined가 될 수 있기 때문이다.
//이럴 때 사용하는게 non null 단언이다 (느낌표)
//non null 단언을 사용하면 null이거나 undefined가 아닐거라고 컴파일러가 믿도록 만든다.
const len: number = post.author!.length;
```
