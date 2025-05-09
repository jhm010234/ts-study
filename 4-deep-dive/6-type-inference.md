# 타입 추론

: 타입스크립트가 변수의 타입을 **자동으로 추론**하는 독특한 기능이다.<br> <br>
타입스크립트는 점진적인 타입 시스템을 채택하고 있다. <br>
점진적인 타입 시스템이란, 변수를 선언할 때 변수의 타입을 프로그램이 실행되기 전에 타입 검사를 수행하지만,만약에 변수의 타입이 정의되지 않을 떄도 초기값만 넣어주면 초기값을 기준으로 타입을 추론하는 시스템이다.

<br> 
아래는 타입스크립트가 어떤 상황에서 타입을 잘 추론하고, 어떤 원리로 타입을 추론하는지에 대한 내용이다.

1. 일반적인 변수를 선언할 때
   초기값을 기준으로 변수의 타입을 추론하기 때문에, 복잡한 객체를 넣어도 타입을 잘 추론할 수 있따.

- 커서를 올려서 확인하면 추론된걸 확인할 수 있다.

```ts
let a: number = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

// 구조분해할당도 추론해준다
let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];
```

<br>

**함수**의 반환값 타입을 추론할 때는 초기화 하는 값이 아니라 **return**문 다음에 오는 반환값을 기준으로 추론한다.

```ts
function func() {
  return "hello";
}
```

<br>
만약 함수에 매개변수가 있을 때는, 기본값이 설정되어 있다면 기본값을 기준으로 추론한다.

```ts
function func(message = "hello") {
  return "hello";
}
```

<br>

> 즉, 타입스크립트에서 타입 추론이란, 코드를 딱 봤을 때, 어떤 변수의 타입을 추론할 **정보**가 있으면 추론이 되는거고, 추론할 정보가 없으면 추론이 안된다고 이해하면 좋다.

<br><br>
_타입 추론에 있어서 특이한 경우도 있다_

```ts
//아무런 추론 가능한 정보가 없기 때문에 any 타입으로 추론되고, 아무 값이나 넣을 수 있다.
let d;

//하지만 숫자를 넣는 순간 다음 줄에서부터는 number 타입으로 추론이 된다.
d = 10;
// number 타입에서 사용할 수 있는 toFixed도 사용이 가능해지며,
d.toFixed;
//string에서 사용 가능한 toUpperCase에 대해서 오류가 발생한다.
d.toUpperCase();

//number로 정의된 d에다가 문자열을 다시 정의해도 문제가 발생하지 않는다.
//다음 줄부터 또 string으로 재정의된다.
d = "hello";
d.toUpperCase();
//이때는 역시나 number에서만 가능한 toFixed을 사용하면 에러가 발생한다.
d.toFixed;
```

이렇게 타입이 변신하듯이 계속 바뀌는 상황을 **any 타입의 진화**라고 한다.

<br>
아래 코드는 암묵적 any 타입으로 명시적으로 우리가 any라고 타입을 정의해주는거랑 다르다.

```ts
let d; //암묵적
let d: any; //명시적, any의 진화가 없음.
```

<br>
하지만 암묵적 any가 진화되는건 좋지 않다.

_단지 초기값을 정의하지면 진화할 수 있는 정도만 알면 좋다._

<br>
아래는 let이 아닌 **const 키워드**를 사용했을 때의 타입추론이다.

```ts
//const으로 선언을 하면 Number이 아닌 10이라는 타입으로 정의됨.
//const는 상수이기 때문에 10 말고 더 이상 담을 수 없기 때문이다
const num = 10;
```

<br>

## 타입 넓히기

: 타입스크립트는 타입을 추론할 때, 범용적으로 조금 더 넓은 타입으로 추론을 해주는것
