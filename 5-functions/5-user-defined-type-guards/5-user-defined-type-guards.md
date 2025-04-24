# 사용자 정의 타입 가드 (커스텀 타입 가드)

함수를 이용해서 우리의 입맛대로 타입 가드를 만들 수 있는 문법이다.  
<br>

아래 코드를 확인해봤을때, 프로퍼티의 이름을 기준으로 타입을 좁히면 **직관적으로 안 좋고, 만약 프로퍼티가 중간에 이름이 바뀌기라도 하면 이상한 타입으로 추론이 된다.**

```ts
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function warning(animal: Animal) {
  if ("isBark" in animal) {
    //강아지
  } else if ("isScretch" in animal) {
    //고양이
  }
}
```

<br>

이럴 때 사용하면 좋은게 **사용자 정의 타입 가드**이다. 우선 isDog라는 함수에서 매개변수 animal에 들어가는 값이 dog 타입이면 true를 반환하고, cat 타입이면 false를 반환하도록 한다.

```ts
function isDog(animal: Animal) {
  return animal.isBark !== undefined;
}
```

<br>
하지만 이렇게 하면 animal 타입이 제대로 좁혀지지 않았기 때문에 에러가 발생한다.  
이럴 때는 animal에 소괄호로 열어준 다음에, 여기다가 타입 단원을 해주는 것이다.
하지만 이렇게 해도 타입이 좁혀지지는 않는다.

```ts
function isDog(animal: Animal) {
  return (animal as Dog).isBark !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    //강아지
    animal;
  } else if ("isScretch" in animal) {
    //고양이
  }
}
```

<br>
타입스크립트는 우리가 직접 만든 함수의 반한값을 가지고는 타입을 잘 좁혀주지 않는데, 이럴 때에는 함수 자체를 **타입 가드 역할**을 하도록 만들어주면 된다.

```ts
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScretch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    //강아지
    //dog 타입이 보장된다.
  } else if ("isScretch" in animal) {
    //고양이
  }
}
```

위 코드는 이 함수가 반환값으로 true를 리턴하면, 그때는 이 animal은 dog 타입이다라고 이렇게 써준거다.

<br>

```ts

```
