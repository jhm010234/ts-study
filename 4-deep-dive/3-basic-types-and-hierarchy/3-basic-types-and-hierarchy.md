# 타입 계층도와 함께 기본 타입 살펴보기

[타입계층도](../section4/타입계층도.png)

## unknown

unknown 타입은 타입 계층도 최상단에 위치로, 모든 타입의 슈퍼 타입이다. <br>
[unknown](../section4/unknown.png)

<br><br>

즉 unknown 타입을 전체 집합으로 볼 수 있다.<br>
[unknown2](../section4/unknown2.png)

```ts
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  //업캐스팅으로 모두 혀용.

  //아래는 다운캐스팅으로 모두 에러가 뜬다
  let unknownVar: unknown;
  let num: number = unknownVar; //에러 발생
  let str: string = unknownVar; //에러 발생
  let bool: boolean = unknownVar; //에러 발생
}
```

<br>

## never

타입 계층도에서 보면 가장 아래에 위치해있다. 즉 never 타입은 모든 타입의 서브타입이다. (모든 집합의 부분집합이다) = 공집합  
[never1](../section4/never.png) <br><br>
never는 **아무런 값도 저장할 수 없을 때**, 사용하면 좋다.<br>
[never2](../section4/never2.png)

```ts
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  //네버 타입은 모든 타입의 서브 타입이기 때문에 그 어떤 타입의 변수에도 다 값을 넣을 수 있다(업캐스팅)
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //다운캐스팅은 역시나 안된다.
  let never1: never = 10; //에러 발생
  let never2: never = "string"; //에러 발생
  let never3: never = true; //에러 발생
}
```

<br>

## void

void 타입은 undefined 타입의 super 타입이다.
[void](../section4/void.png)
[void2](../section4/void2.png)

```ts
function voidExam() {
  function voidFunc(): void {
    console.log("hi");

    //업캐스팅이라 가능, 즉 반환값을 undefined라고 설정해도 가능
    let voidVar: void = undefined;
    return undefined;
  }
}
```

<br>

## any

unknown 타입의 서브 타입이지만 **치트키**로 계층도를 완벽하게 무시한다.  
[any](../section4/any.png)
이게 무슨 말이냐면, any 타입은 모든 타입의 슈퍼 타입으로 위치하기도 하며, 모든 타입의 서브 타입으로 위치하기도 한다.

```ts
// any 타입
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  //자기한테 오는 다운캐스팅 혹은 자기가 다운캐스팅 되는것도 가능.
  anyVar = unknownVar; //any 타입이 unknown 타입의 서브 타입이지만 가능
  undefinedVar = anyVar;

  //아래는 any가 유일하게 못하는 것.
  //never 타입에 any 타입을 다운 캐스팅하지만 오류 발생!
  //never 타입은 순수한 공집합이기 때문에 그 어떠한 값도 다운캐스팅이 안된다.
  neverVar = anyVar; //오류 발생
}
```

<br>
