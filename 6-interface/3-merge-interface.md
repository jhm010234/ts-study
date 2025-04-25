# 인터페이스 선언 합치기

예전에 타입 별칭에 대해서 배울 때, 동일한 타입을 2번 정의하면 오류가 발생한다고 배웠다. 하지만 interface는 타입 별칭과 다르게 오류가 발생하지 않는다. 즉 interface는 동일한 이름으로 정의를 해도 오류가 발생하지 않는다.  
그 이유는 **동일한 이름으로 정의한 인터페이스들은 결국 다 합쳐지기 때문이다**. 이러한 현상을 _선언 합침_ 이라고 한다

```ts
// 선언 합치기
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "",
  age: 27,
};
```

<br>

단 동일한 프로퍼티를 중복 정의하는데 타입을 다르게 정의하는 경우를 **충돌**이라고 표현하며, 인터페이스에서는 충돌을 허용하지 않는다.  
만약 똑같은 프로퍼티를 중복 정의를 하려고 하면 타입도 똑같이 정의를 해줘야 한다.

```ts
// 선언 합치기
interface Person {
  name: string;
}

interface Person {
  name: number; //에러 발생
  name: string; //똑같이 타입도 해줘야 함
  age: number;
}

const person: Person = {
  name: "",
  age: 27,
};
```

<br>

헷갈리면 안되는게, 인터페이스를 합칠 때에는 subtype으로 선언을 해도 문제가 발생한다. 즉 **반드시 동일한 타입으로만 정의를 해줘야 한다.**  
인터페이스 선언 합침은 보통 typescript 모듈, 즉 라이브러리 타입 정의가 부실한 경우에 직접 타입을 추가하고 정확하게 만들어주는 일종의 **모듈 보강**이라는 작업을 할 때 사용을 한다.  
예시를 들자면, 아래 코드처럼 프로퍼티를 하나 더 추가해줘야 하는 상황이 있다고 가정을 해보자

```ts
interface Lib {
  a: number;
  b: number;
}

const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
```

<br>

보통의 라이브러리들은 이미 타입 정의가 끝나 있을 거기 때문에 우리가 임의대로 객체를 추가할 수 없다. 이럴 때 **인터페이스 선언 합침**을 사용하면 된다.

```ts
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
```
