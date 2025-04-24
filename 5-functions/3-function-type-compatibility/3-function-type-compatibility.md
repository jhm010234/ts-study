# 함수 타입의 호환성

특정 함수 타입을 **다른 함수타입으로 취급해도 괜찮은가**를 판단

1.  반환값의 타입이 호환되는가
2.  매개변수의 타입이 호환되는가

<br>

## 1. 반환값이 호환되는가?

함수 타입 간의 호환성을 평가할 때, 반환값이 호환되는지에 대한 기준은 **반환값끼리의 다운캐스팅이 되면 안되도록 평가**한다.

```ts
type A = () => number;
type B = () => 10; //무조건 반환값은 10

let a: A = () => 10; //number 타입
let b: B = () => 10; //number 리터럴 타입 (10)

a = b; //가능
//b타입을 a타입으로 취급한다는 얘기로
//넘버리터럴 타입을 넘버 타입으로 취급한다는 얘기(업캐스팅)
b = a; //불가능
//넘버 타입을 넘버 리터럴 타입으로 취급 (다운캐스팅)
//b<a로 a가 반환값이 더 큼
```

<br>

## 2. 매개변수가 호환되는가

### 2.1 매개 변수의 개수가 같을 때

```ts
type C = (value: number) => void;
type D = (value: number) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; //가능
d = c; //가능
```

<br>

만약 아래 코드처럼 타입이 다른 경우, 에러가 발생한다.  
`c=d`는 d 타입을 c 타입으로 취급하겠다는 것으로, d는 넘버 리터럴 타입, c는 넘버 타입으로 **업캐스팅**이나 불가능하다.  
반환값 타입을 기준으로 호환성을 판단할 때만은 다르게 _매개변수의 타입을 기준으로 호환성을 판단할 때는 반대로 Upcasting일 때는 호환이 안된다고 평가한다._  
반대로 `d=c`는 c 타입을 d 타입으로 취급하겠다는 것으로, _다운캐스팅이지만 가능하다_

```ts
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; //업캐스팅이지만 오류 발생
d = c; //다운캐스팅이지만 가능
```

<br>

이것이 가능한 이유는 **매개변수가 객체 타입을 사용하는 예시를 확인해보면 가능**하다. 아래는 매개변수가 객체 타입을 사용하는 예시이다.

```ts
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

//Animal 타입의 매개변수를 받는 함수
let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

//Dog 타입의 매개변수를 받는 함수
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

animalFunc = dogFunc; //업캐스팅 에러 발생
```

<br>

`animalFunc = dogFunc; `은 아래 함수를 만드는것과 같다.  
animalFunc에 dogFunc을 넣는거니깐 타입은 애니멀 펑크의 타입을 따른다.
아래 코드를 확인해보면 에러가 발생하는걸 확인할 수 있다.  
그 이유는 Animal 타입에는 color 프로퍼티가 없기 때문이다. 이렇게 할당을 허용해줘버리면 말도 안되는 코드가 나오기 때문에 **업캐스팅일때 안되도록 막아준다**.

```ts
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  console.log(animal.color); //에러 발생
};
```

<br>

반대로 `dogFunc = animalFunc;`가 되는 이유를 확인해보고자 한다.  
dogFunc에다가 animalFunc을 집어 넣는거니깐 매개변수의 타입은 Dog를 따른다.

```ts
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};
```

<br>

정리를 하면 함수 타입 A와 함수 타입 B가 있다고 가정했을 때, **매개변수를 기준으로 호환성을 판단**한다고 하면 반환값은 똑같다고 생각해볼 수 있고, B타입을 A타입으로 취급하려고 하면 A의 매개변수의 타입이 Animal(슈퍼타입), B타입의 매개변수 타입이 Dog(서브타입)이라고 하면 이것은 **업캐스팅**으로, _매개 변수 기준으로 판단할 때는 업캐스팅은 안된다._  
반대로 A의 매개변수 타입이 Dog 타입(서브 타입)이고, B의 매개변수 타입이 Animal 타입(슈퍼 타입)이라고 가정하면,이것은 **다운캐스팅**으로 , _매개변수 기준으로 가능하다_

<br><br>

### 2.2 매개변수의 개수가 다를 떄

아래 코드에서 에러가 발생하는 이유는, func1에 func2를 넣겠다는것을 매개변수로 비교하면, func1은 매개변수가 2개, func2는 매개변수가 1개이다. 그래서 `func1 = func2;` 가능하나,
`func2 = func1;`은 불가능하다.  
즉, **할당하려고 하는 쪽의 함수의 타입에 매개변수의 개수가 더 적을때에만 호환이 된다**

```ts
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

//함수
let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; //가능
func2 = func1; //에러 발생
```
