// 타입 단언

type Person = {
  name: string;
  age: number;
};

//빈 객체는 Person의 프로퍼티가 없기 때문이다.
let person = {} as Person;

//이후에 이렇게 프로퍼티의 값을 추가하고 싶을땐?
person.name = "이정한";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", //초과 프로퍼티 검사 발동
} as Dog;

//10은 number 타입이고 never은 모든 타입의 서브타입이기 때문에 타입 단언이 이루어진다.
let num1 = 10 as never;

//역시 unknown 타입은 모든 타입의 슈퍼 타입이기 때문에 단언이 가능하다. a가 b의 서브타입.
let num2 = 10 as unknown;

//오류가 발생하며 단언이 발생하지 않는다.
//number 타입과 string 타입은 교집합이 없기 때문에 서로 슈퍼타입 또는 서브 타입이 아니다.
// let num3 = 10 as string;

let num3 = 10 as unknown as string;

// 타입을 number로 추론
let num4 = 10;
// 타입을 10으로 추론
let num5 = 10 as const;

//객체 타입으로 자동 추론이 된다
let cat1 = {
  name: "야옹이",
  color: "yelow",
};

//모든 프로퍼티가 readonly, 읽기 전용 픅로퍼티로 변경된다
let cat2 = {
  name: "야옹이",
  color: "yelow",
} as const;

type Post = {
  title: string;
  author?: string;
  //물음표를 붙여 선택적 프로퍼티로 정의
};

let post: Post = {
  title: "게시글1",
  author: "이정한",
};

//이 게시글의 작성자의 이름 길이가 몇개인지 출력하는 코드
//자동으로 물음표 키워드가 추가된다.
//자바스크립트에서 제공하는 옵셔널 체이닝이라는 키워드이다.
//값이 null이거나 undefined일 경우에 점표기법으로 접근하면 오류가 발생하니,
// 물음표를 붙여 값 전체가 undefined로 해주는 역할
//하지만 이렇게 하면 오류가 뜨는게 우리는 Number로 타입을 지정했으나 값이 undefined가 될 수 있기 때문이다.
//이럴 때 사용하는게 non null 단언이다
const len: number = post.author!.length;
