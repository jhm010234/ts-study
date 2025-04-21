# 객체 타입의 호환성

기본 타입간의 호환성 : 특정 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것.

```ts
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;
```

<br>

객체 타입간의 호환성 : 어떤 **객체 타입**을 다른 객체 타입으로 취급해도 괜찮은지 판단하는 것.

```ts
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; //업캐스팅
// dog = animal; //다운캐스팅, 오류 발생
```

위 코드를 통해 animal은 슈퍼 타입, dog은 서브 타입이라는걸 알 수 있다.  
객체들은 이러한 것을 **프로퍼티** 기준으로 관계를 갖는다.  
위 코드를 보면 Dog은 Animal 프로퍼티를 모두 갖고 있기 때문에 Animal 타입의 규칙에도 해당이 된다.  
아래는 다른 예시이다.

```ts
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingbook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 3300,
  skill: "reactjs",
};

book = programmingbook;
programmingbook = book; //다운캐스팅으로 에러 발생
```

<br><br>

근데 위에 코드를 보면 이상한 점이 하나 있다. 아래 코드는 똑같은걸 표현해주고 있지만 book2의 skill 부분에서 에러가 발생한다.

```ts
book = programmingbook;
// programmingbook = book; //다운캐스팅으로 에러 발생

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 3300,
  skill: "reactjs", //에러 발생
};
```

<br>

그 이유는 타입스크립트의 **초과 프로퍼티 검사**라는 기능이 발동됐기 때문이다.  
**초과 프로퍼티 검사**란 지금처럼 변수를 초기화할 때, 초기화하는 값으로 객체 리터럴을 사용하면 발동하는 검사이다. 실제 타입에 정의해 놓지 않은 프로퍼티를 작성하면 안되도록 막는 검사이다.  
그래서 **객체 타입의 변수를 초기화할 때는 객체 리터럴을 사용할거면 주석 처리를 하거나 삭제해서 딱 객체 타입에 정의된 프로퍼티만 넣을 수 있도록 해야한다.**  
만약 초과 프로퍼티 검사를 피하고 싶으면 아래처럼 코드를 작성하면 된다.

```ts
let book3: Book = programmingBook;
```

<br>

객체 외에도 **함수**에서 객체 프로퍼티 검사가 발동된다.

```ts
function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 3300,
  skill: "reactjs", //에러 발생
});

//사용하고 싶으면 객체 리터럴을 이용하는게 아니라 변수에 저장해 두었다가 인수로 변수를 전달해야 한다.
func(programmingBook);
```
