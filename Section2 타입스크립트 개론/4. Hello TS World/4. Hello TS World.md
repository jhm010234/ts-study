# 기본 세팅
1. node.js 패키지 초기화 <br/>
```npm init```<br/>
-> package.json 파일 생성
<br/>

2. node.js가 제공하는 내장 기능들에 대한 타입 정보를 갖고 있는 @types/node라는 패키지 설치 <br/>
```npm i @types/node```<br/>
->  package.json>dependencies>@types/node 설치 확인 가능<br/>
> 패키지 설치를 하지 않으면 Typescript가 우리가 작성한 코드를 컴파일하는 과정에서<br/>
> Node.js의 기본 기능, 콘솔.log 같은 거에 타입을 알아들을 수 없다.<br/>
<br/>

3. TypeScript Compiler 설치<br/>
```sudo npm install typescript -g```<br/>
> -g은 글로벌 옵션으로 컴퓨터 모든 곳에서 패키지를 사용할 수 있다
<br/>

4. TypeScript 설치 확인<br/>
```tsc -v```
<br/>

5. TypeScript 작성
   최상단 폴더 아래 src 폴더 생성 -> index.ts 파일 생성 후 아래와 같이 코드 작성 <br/>
   ```
   console.log("Hello TypeScript");
   const a: number =1;
   ```
<br/>

6. TypeScript 컴파일 하기<br/>
   ```tsc src/index.ts```<br/>
   -> index.js 파일이 생성됨 (타입 사라진걸 확인 할 수 있다)
<br/>



## 컴파일러를 더 쉽게 해주는 도구
```sudo npm install -g ts-node```<br/>
-> TypeScript 컴파일러와 Node.js가 같이 있어 한번에 TypeScript 파일을 실행할 수 있다.
<br/><br/>
```ts-node src/index.ts``` : TypeScript 파일을 한방에 실행



