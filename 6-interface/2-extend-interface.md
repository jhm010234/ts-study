# 인터페이스 확장

아래 코드를 작성하면서 느낄 수 있는건 name,age처럼 **중복된 프로퍼티 정의**가 너무 많다. 즉 비효율적이라고 생각할 수 있다. 이런 경우에는 만약 Animal의 age를 수정하게 되면 나머지 dog, cat, chicken의 age도 다 수정을 해줘야 한다.  
보통 복잡한 어떤 웹 서비스를 만들기 위해서는 이런 타입들을 정의하고 이용할 때, 굉장히 다양한 서브 타입들이 파생되는데 이렇게 타입을 정의하는 건 아주 비효율적이다.  
이럴 때 사용하는게 **인터페이스 확장**이다.

```ts
interface Animal {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat {
  name: string;
  age: number;
  isScratch: boolean;
}

interface Chicken {
  name: string;
  age: number;
  isFly: boolean;
}
```

<br>

아래처럼 코드를 작성하면 인터페이스 Dog는 인터페이스 Animal을 확장하는 타입이라는 얘기다.  
여기서 확장이란 **기존의 것들을 다 가지고 있는 상태에서 뭔가를 더 추가한다는 말이다.**  
확장은 다른 말로 상속이라고도 한다.

```ts
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}
```

<br>

## 프로퍼티 재정의하기

확장과 동시에 프로퍼티의 타입을 재정의 하는것 또한 가능하다._단, 다시 정의하려고 하는 이 타입이 원본 타입의 서브 타입이어야만 한다_

```ts
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  name: "doldol"; //타입 재정의
  isBark: boolean;
}

const dog: Dog = {
  name: "", //위에서 doldol로 재정의 해줬기 때문에 이 부분도 스트링 리터럴 타입으로 재정의된다.
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}
```

## 타입 별칭 확장하기

인터페이스는 인터페이스 뿐만 아니라 타입 별칭으로 재정의된 객체도 확장할 수 있다

```ts
type Animal = {
  name: string;
  color: string;
};

interface Dog extends Animal {
  breed: string;
}
```

<br>

## 다중 확장

하나의 객체만 확장하는게 아니라 여러 개의 객체를 확장하는 것

```ts
nterface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
```
