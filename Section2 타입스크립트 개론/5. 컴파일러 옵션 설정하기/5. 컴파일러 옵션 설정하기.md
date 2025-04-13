# 컴파일러 옵션이란?
얼마나 엄격하게 타입 오류를 검사할지, 자바스크립트 코드의 버전은 어떻게 할지 등 세부적인 사항을 말함.  
= 즉 개발자가 자신의 입맛에 맞게 변경 가능  
<br>

# 컴파일러 옵션 설정하기
컴파일러 옵션은 Node.js 패키지 단위로 설정이 가능하다.  
`tsc` 도구를 이용하면 기본적인 옵션이 다 자동으로 설정된 컴파일러 옵션 파일을 자동으로 만들 수 있다.  
<br>

## TypeScript 컴파일러 설정 파일 생성
`tsc --init` 을 터미널에 입력하면 **tsconfig.json 파일**이 생성된다.  
**tsconfig.json**은 타입스크립트 컴파일러의 설정 파일이라고 생각하면 된다.  
<br>

## TypeScript 컴파일러 설정들
### include 옵션
컴파일할 TypeScript 파일들의 범위와 위치를 알려준다.  
특정 폴더, 즉 `src` 폴더 안에 있는 `.ts` 파일을 컴파일하도록 설정할 수 있다.

> 원래는 `tsc index.ts`로 컴파일을 했으나, 파일이 여러 개일 경우에는 조금 복잡할 수 있다.

```json
{
  "include": ["src"]
}
```

### target 옵션
TypeScript 코드를 컴파일해서 만들어지는 JavaSrcipt 코드의 버전을 설정하는 옵션

```json
{
   "compilerOptions": {"target": "ES5"}
}
```

### module 옵션
변환되는 자바스크립트 코드의 모듈 시스템을 설정하는 옵션
자바스크립트는 크게 CommonJs(CJ)와 ESM이 있다.

* CommonJs(CJ)란?
```
const a = require(..)
module.exports
```

* ESM
```
import a from "...";
```


```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS"
  },
  "include": ["src"]
}

```

### outDir 옵션
자바스크립트 파일 생성 위치 지정하는 옵션.
`tsc`로 컴파일 할 경우 같은 폴더 내 js 파일이 생성되는데, 실무에서 파일이 많아질 경우 사용하는 것.
```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "outDir": "dist"
  },
  "include": ["src"]
}

```

### strict 옵션
타입스크립트 컴파일러가 검사할 때 얼마나 엄격하게 할지 결정하는 옵션
```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "outDir": "dist",
    "strict": true
  },
  "include": ["src"]
}

```
**단, js의 기존 프로젝트를 타입스크립트로 새롭게 마이그레이션 하는 경우에는 엄격한 검사를 적용하면 전체 오류가 일어날 수 있으니 주의**
<br>
### ModuleDetection 옵션
타입스크립트 파일은 전역 모듈로 보기 때문에 자바스크립트와 달리 전역 내에서 같은 변수명 사용이 안된다.
> 자바스크립트는 파일이 하나의 스코프이기 때문에 같은 변수 설정 가능

1. 첫번째 방법 : 파일 내 독립된 모듈 선언
아래와 같이 코드를 작성하면 변수 a는 (해당 파일) 독립된 모듈 안에만 있다고 설정한 것.
단, 모든 파일에 이렇게 하나하나 작서아해야 함.
```
const a = 1;

export {};
```

2. tsconfig.json에 추가
아래와 같이 코드 작성 후, 적용을 위해 restart 해줘야 한다. 
```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "outDir": "dist",
    "strict": false,
    "moduleDetection": "force"
  },
  "include": ["src"]
}

```
### (Deprecated) ts-node 옵션
- ts-node 란?
  `ts-node src/index.ts`처럼 터미널에 입력하면 한방에 실행해주는 도구

package.json 파일에서 `"type": "module" `을 적어줘야 사용 가능하다.
```json
{
  "name": "4.-hello-ts-world",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module" ,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@types/node": "^22.14.0"
  }
}
```
근데 이렇게 해도 오류가 발생 할 있다
=> ts-node는 기본적으로 common.js를 사용하기 때문.  
아래처럼 tsconfig.json 파일에 코드를 추가하면 ts-node가 es module 시스템으로 동작하게끔 해준다.
```
{
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "outDir": "dist",
    "strict": false,
    "moduleDetection": "force"
  },
  "ts-node": {
    "esm": true
  },
  "include": ["src"]
}

``` 

```
