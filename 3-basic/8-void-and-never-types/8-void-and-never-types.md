# void

: 아무것도 없음을 의미하는 타입이다.

```ts
//참고로 ts에서 함수의 반환값에도 타입을 정의할 수 있다.
//아래 함수의 반환값은 string
function func1(): string {
  return "hello;";
}

//현재 아래 func2는 아무런 값도 반환하고 있지 않다
//이럴때 함수의 반환값을 void으로 정의하면 된다.
function func2() {
  console.log("hello");
}
```

<br>

물론 변수도 void로 정의할 수 있지만 **undefined** 외 어떠한 값도 담을 수 없다.

```ts
let a: void;
a = 1; //에러 발생
a = "hello"; //에러 발생
a = {}; //에러 발생
a = undefined;
a = null; //compilerOptions -> stringNullChecks에 false시 가능
```

단, 예외적으로 `tsconfig.json`에서 compilerOptions -> stringNullChecks에 false를 넣으면 변수에도 null 값을 집어 넣을 수 있다.
<br>

근데 함수 반환값으로 undefined나 null이 아닌 void를 사용하는 이유는?  
아래 코드처럼 할 경우 진짜 이 함수가 undefined라는 값을 반환하게 만들어야 한다.  
즉, 함수의 반환값으로 undefined나 null로 정의해버리면 진짜 null이나 undefined를 반환하기 위해 return문을 써줘야 되기 때문에 정말 **리턴문을 사용하고 싶지 않은 함수의 반환값 타입으로 void를 사용**하는 것이다.

```ts
function func2(): undefined {
  console.log("hello");
  return undefined;
  //return; 도 가능
}
```

<br>

# never

: 존재하지 않는 불가능한 타입  
<br>

아래 함수처럼 반환을 할 수가 없어, 애초에 **정상적으로 종료가 되지가 않기** 때문에 무언가를 반환하는거 자체가 모순이고 절대 불가능하기 때문에 이럴 때는 void를 정의하면 안된다.  
즉, 정상적으로 종료될 수가 없어서 이 함수의 반환값이 있는거 자체가 모순일 경우에 never 타입을 정의해준다.

```ts
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
```

never는 void처럼 never을 선언하면 어떠한 값도 담을 수 없으며, undefined도 받지 못하며 `tsconfig.json`에서 compilerOptions -> stringNullChecks에 false로 하여도 null 값 조차 받지 못한다. 즉 **아무런 값도 담을 수가 없다**
