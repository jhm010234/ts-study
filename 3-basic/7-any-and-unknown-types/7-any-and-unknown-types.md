> 변수에 어떤 타입이 들어올지 모르겠다라고 하는 경우에는 **Any**와 **Unknown** 타입을 사용하면 된다.

# Any 타입

: 특정 변수의 타입을 우리가 확실히 모를때 사용

```ts
let anyVar = 10;
anyVar = "hello";
//anyVar는 이미 숫자로 초기화 되었기 때문에 문자열 값을 넣으면 에러가 생긴다
```

<br>

자바스크립트 변수를 쓰듯이, 타입 검사 없이, 아무 값이나 넣고 싶을 때, **any**를 사용한다.

```ts
let anyVar: any = 10;
anyVar = "hello";
```

<br>

any는 문자열에만 있는 **toUpperCase()**나 숫자에만 쓰이는 **toFixed()**을 사용할 수 있다.

```ts
anyVar.toUpperCase();
anyVar.toFixed();
```

<br>

number 타입의 변수에 any var를 집어 넣어도 타입 오류가 발생하지 않는다. <br>
즉, any 타입을 변수에 지정할 경우 모든 타입의 값을 다 할당받을 수 있고, 모든 타입의 변수에 다 Anytype 값을 넣을 수 있다. <br>

> AnyType은 타입 스크립트의 타입 검사를 다 통과하는 치트키라고 생각하면 된다.

```ts
let num: number = 10;
num = anyVar;
```

<br>

아래 코드를 실행해보면 오류가 발생한다. <br>
왜냐면 any var라는 변수에 들어간 값이 함수인데, toUpperCase() 메서드를 호출하려고 하니깐 없어서 **런타임에 에러가 발생**한다.

> AnyType은 가능한 한 최대한 사용하지 않는 편이 좋다.

```ts
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();
```

<br>

# Unknown 타입

unknown 타입도 any 타입과 마찬가지로 아무 타입의 값이나 집어 넣을 수 있다.

```ts
let unknownVar: unknown;
unknownVar = 1;
unknownVar = () => {};
```

<br>
unknown과 any 타입의 차이점은? <br>
unknown 타입은 모든 값을 저장할 수는 있지만 반대는 안된다.

```ts
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

num = unknownVar; //에러 발생
```

<br>

또한 toUpperCase(), toFixed() 같은 메서드가 허용되지 않으며, 덧셈, 뺄셈, 곱셈, 나눗셈 등의 연산 자체도 쓸 수 없다.  
Unknown 타입의 값을 활용하고 싶다면 조건문으로 타입을 확실히 밝혀주었을 때만 Unknown 타입의 변수를 정제해서 사용을 할 수 있다.

```ts
if (typeof unknownVar === "number") {
  num = unknownVar;
}
```

이러한 과정을 **타입 정제**라고 한다.
<br> <br>

> Unknown 타입은 적어도 어떤 연산이나 어떤 메서드나 어떤 변수에나 값을 넣을 수 없기 때문에 런타임 에러를 일으키는 any 보다는 안전하다.
