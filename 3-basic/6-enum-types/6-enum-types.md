# 열거형 타입 Enumerable Type

**이넘 타입 = 열거형 타입**이라고도 하는데, 여러가지 값들에 각각 이름을 부여해 열거해 두고 사용하는 타입을 말한다. 자바스크립트에는 없고 타입스크립트에만 있다.

<br>

그럼 이넘 타입은 언제 써야 하나? <br>
예를 들어 사용자 목록이 아래와 같이 있다고 두자.

```ts
const user1 = {
  name: "이정환",
  role: 0, //0은 관리자
};
const user2 = {
  name: "홍길동",
  role: 1, //1은 일반유저
};
const user3 = {
  name: "아무개",
  role: 2, //2는 게스트
};
```

<br>
사용자의 역할을 숫자만 보고 기억하기 어려워 실수를 할 경우를 대비해 타입스크립트의 enum을 활용하면 된다.

```ts
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, //0은 관리자
};
const user2 = {
  name: "홍길동",
  role: Role.USER, //1은 일반유저
};
const user3 = {
  name: "아무개",
  role: Role.GUEST, //2는 게스트
};
```

<br>
> tsx src/chapter5.ts 실행 결과 
<br>

![enum-result](https://github.com/jhm010234/ts-study/blob/master/3-basic/images/enum-result.png?raw=true)

<br><br>

enum은 아래와 같이 숫자를 입력하지 않아도 자동으로 숫자가 들어간다.  
또한, 이렇게 값에 숫자가 할당되는걸 **숫자형 이넘**이라고 한다

```ts
enum Role {
  ADMIN,
  USER,
  GUEST,
}
```

```ts
enum Role {
  ADMIN, //=0
  USER, //=1
  GUEST, //=2
}
```

<br>

만약 숫자를 **10**부터 시작하고 싶다면 아래와 같이 코드를 작성하면 된다.

```ts
enum Role {
  ADMIN = 10,
  USER, //+1씩 자동으로 할당됨
  GUEST, //+1씩 자동으로 할당됨
}
```

<br>

숫자를 중간부터 넣을수도 있다.

```ts
enum Role {
  ADMIN, //0
  USER = 10, //10
  GUEST, //11
}
```

<br><br>

숫자 말고도 문자를 넣을 수 있다. <br>
앞서 컴파일 되면 타입 관련 코드들은 사라지는걸 확인했는데 어떻게 에러가 발생하지 않고 실행이 되는가?

> **enum은 컴파일되어도 사라지지 않는다**
