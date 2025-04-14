# 객체

타입스크립트에는 **object**라는 객체가 있는데 <br>
이는 "객체다!"라는 정보 외에는 아무런 정보도 없는 타입이기 때문에 아래처럼 접근할 때 에러가 뜬다

```ts
let user: object = {
  id: 1,
  name: "이정한",
};

user.id; //에러 발생
```

<br>

> 이럴 때는 **객체 리터럴 타입**을 사용해야 한다!

```ts
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정한",
};

user.id; //에러 발생 안함!
```

<br>

타입스크립트는 **구조적 타입 시스템**이다.
구조적 타입 시스템이란 "형태가 같으면 같은 타입"이라는 뜻으로, **속성**과 **형태**만 비교해서 타입을 판단한다. <br>
즉, 이름은 상관없고, **구조(구성 요소)**만 같으면 OK!

```ts
type Person = {
  name: string;
};

type User = {
  name: string;
};

let p: Person = { name: "Kim" };
let u: User = p; // ✅ 구조 같으니까 허용됨
```

<br>

이와 반대로 Java, c# 등에서 사용하는 방식을 **명목적 타입 시스템**이라고 하며, 타입 이름 자체가 중요하다.
<br>
또한 구조가 같더라도 정의된 이름이 다르면 다른 타입으로 간주한다

```ts
class Person {
  String name;
}

class User {
  String name;
}

Person p = new Person();
User u = p; // ❌ 오류: 타입 이름이 다름
```

<br>

객체를 사용하다 보면 어떠한 property는 불필요한 경우도 있다. <br>
이럴 때는 **?**을 넣어주면 된다. <br>
즉 값이 있어도 되고 없어도 된다는 뜻이다. 이러한 것을 **선택적 프로퍼티 또는 optional property**라고 부른다.

```ts
//object
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정한",
};

user = {
  name: "홍길동", //오류 안뜸!
};
```

<br>

만약 객체의 프로퍼티에 접근해서 프로퍼티의 값을 못 바꾸게 하고 싶으면 **readonly** 키워드를 넣어 값 변경을 못하게 막을 수 있다.

```ts
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};
```
