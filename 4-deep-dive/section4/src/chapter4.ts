let a: string | number; //string과 number의 합집합으로 정의됨
a = 1;
a = "hello";

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

//아래와 같이 타입 별칭을 이용해서도 Union 타입을 만들 수가 있다.
type Union1 = Dog | Person;

//Dog 프로퍼티만 넣었을 떄
let union1: Union1 = {
  name: "",
  color: "",
};

//Person 프로퍼티만 넣었을 때
let union2: Union1 = {
  name: "",
  language: "",
};

//Person과 Dog 프로퍼티 다 넣었을 떄
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

//   //공통된 이름만 했을때는 에러가 발생.
//   let union4: Union1 = {
//     name: "",
//   };

//number과 string의 교집합
//하지만 두 타입은 교집합이 없응, 즉 never(공집합)
let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
  //여기서 하나의 프로퍼티라도 빠지면 에러 발생함!
  //=> 교집합이기 때문.
};
