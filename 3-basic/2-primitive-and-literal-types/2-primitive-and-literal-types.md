# 원시타입 (Primitive Type)

: 하나의 값만 저장하는 타입으로 number, string, boolean, null, undefined가 있다. <br>
아래 ":" 뒤 number을 **type 주석 또는 type annotation**이라고 부른다.<br>
type annotation은 어떤 변수의 타입을 정의하는 방식이라고 생각하면 된다.

```ts
//number
let num1: number = 123;
```

<br>

중간에 넣을 값이 없어서 num에다가 null을 넣어야 할 경우에는?<br>
`strictNullChecks": false,` 옵션을 추가하면 된다.<br>
**strictNullChecks**은 엄격하게 Null 검사를 할지 말지 유무 옵션이다.

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "outDir": "dist",
    "strict": true,
    "strictNullChecks": false,
    "moduleDetection": "force"
  },
  "ts-node": {
    "esm": true
  },
  "include": ["src"]
}
```

위 코드에서 볼 수 있듯이 `strict`은 `strictNullChecks`의 상위 버전으로 `strict`이 켜져있으면 `strictNullChecks`도 켜지고, <br>
`strict`이 꺼져있으면 `strictNullChecks`도 꺼진다.  
<br><br>

# 리터럴 타입

: 값(=리터럴) 그 자체가 타입이 되는걸 말한다.

```
numA = 12;

let strA: "hello" = "hello";

let boolC : true = false;
```

numA는 10이라고 명시했기 때문이 **10** 제외하고는 다른 숫자를 넣으면 에러가 뜬다.<br>
strA는 "hello"만 가능하며, boolC 또한 true가 아니면 에러가 뜬다.
