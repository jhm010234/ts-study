# 타입 별칭

: 타입 정의를 마치 변수처럼 하도록 도와주는 것

만약에 유저라는 변수가 한 명이 아니라 여러 명의 유저를 하나의 파일에서 변수로 만들어야 된다면 아래 코드 처럼 타입을 정의하는 코드가 매우 길어짐

```ts
// 타입 별칭
let user: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "이정한",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};
```

<br>
그래서 이럴 때는, 타입 별칭이라는걸 사용하면 좋음

```ts
// 타입 별칭
//User는 타입 이름
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정한",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};
```

<br>

**타입 별칭은 마치 우리가 let 키워드로 선언하는 변수처럼 이런 식으로 동일한 스코프에 중복된 이름으로 타입별칭을 선언하면 오류가 발생한다.**

```ts
//만약 함수 내에 type user가 정의되어 있으면
//이 func라는 함수 안에서는 함수 내 선언된 user 타입이 되는거고,
//밖에서는 밖에 선언된 user 타입이 적용된다
function func() {
  type User = {};
}
```

<br>

> 타입 별칭은 자바스크립트로 컴파일 되면 다 사라진다.

<br><br>

# 인덱스 시그니처

: 객체 타입의 정의를 더 유연하게 하도록 도와주는 문법
<br>

아래처럼 어떤 서비스가 초거대 글로볼 서비스여서 200개에 가까운 모든 국가들의 코드를 다 넣어야 된다면, 타입 별칭에도 모든 프로퍼티의 키를 넣어줘야 하는 번거로움이 있다.

```ts
// 인덱스 시그니처
type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
};

let countryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
```

<br>
아래와 같이 키와 값의 타입을 기준으로 규칙을 이용해서 아주 유연하게 객체의 타입을 정의하는 문법을 인덱스 시그니처라고 한다.

```ts
// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
  Korea: number;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
```

<br>
**인덱스 시그니처 사용시 주의 해야할 점**
1. 타입을 정의하고 객체를 빈칸으로 만들어도 오류가 안 뜬다
2. 만약 필수적으로 필요한 프로퍼티가 있으면 아래와 같이 적는다

```ts
type CountryCodes = {
  [key: string]: string;
  Korea: number; //필수
};
```

<br>
3. 추가적인 프로퍼티의 Value의 타입이 반드시 인덱스 시그니처의 Value 타입과 일치하거나 호환해야 된다.

```ts
type CountryCodes = {
  [key: string]: number;
  Korea: string; //에러 발생
};
```
