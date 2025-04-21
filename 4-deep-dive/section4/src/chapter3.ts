// unknonw 타입
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  //업캐스팅으로 모두 혀용.

  //아래는 다운캐스팅으로 모두 에러가 뜬다
  //   let unknownVar: unknown;
  //   let num: number = unknownVar; //에러 발생
  //   let str: string = unknownVar; //에러 발생
  //   let bool: boolean = unknownVar; //에러 발생
}

// never 타입
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  //네버 타입은 모든 타입의 서브 타입이기 때문에 그 어떤 타입의 변수에도 다 값을 넣을 수 있다(업캐스팅)
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //다운캐스팅은 역시나 안된다.
  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;
}

// void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");

    //업캐스팅이라 가능, 즉 반환값을 undefined라고 설정해도 가능
    let voidVar: void = undefined;
    return undefined;
  }
}

// any 타입
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  //자기한테 오는 다운캐스팅 혹은 자기가 다운캐스팅 되는것도 가능.
  anyVar = unknownVar; //any 타입이 unknown 타입의 서브 타입이지만 가능
  undefinedVar = anyVar;

  //아래는 any가 유일하게 못하는 것.
  //never 타입에 any 타입을 다운 캐스팅하지만 오류 발생!
  //never 타입은 순수한 공집합이기 때문에 그 어떠한 값도 다운캐스팅이 안된다.
  //   neverVar = anyVar; //오류 발생
}
