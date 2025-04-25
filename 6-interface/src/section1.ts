// 인터페이스

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

type Func = {
  (): void;
};

const person: Person = {
  name: "이정한",
  sayHi: function () {
    console.log("Hi");
  },
  //sayHi는 메소드라고 불린다
};

// person.name = "홍길동"; //readonly로 설정했기 때문에 수정 불가
