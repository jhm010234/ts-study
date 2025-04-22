// 타입스크립트의 타입 추론

// function func(param){
//     //매개변수에 타입을 직접 정해주지 않으면 에러 발생
// }

let a: number = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

// 구조분해할당도 추론해준다
let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

// 함수
function func(message = "hello") {
  return "hello";
}

//아무런 추론 가능한 정보가 없기 때문에 any 타입으로 추론되고, 아무 값이나 넣을 수 있다.
let d;

//하지만 숫자를 넣는 순간 다음 줄에서부터는 number 타입으로 추론이 된다.
d = 10;
// number 타입에서 사용할 수 있는 toFixed도 사용이 가능해지며,
d.toFixed;
//string에서 사용 가능한 toUpperCase에 대해서 오류가 발생한다.
// d.toUpperCase();

//number로 정의된 d에다가 문자열을 다시 정의해도 문제가 발생하지 않는다.
//다음 줄부터 또 string으로 재정의된다.
d = "hello";
d.toUpperCase();
//이때는 역시나 number에서만 가능한 toFixed을 사용하면 에러가 발생한다.
// d.toFixed;

//const으로 선언을 하면 Number이 아닌 10이라는 타입으로 정의됨.
//const는 상수이기 때문에 10 말고 더 이상 담을 수 없기 때문이다
const num = 10;

let arr = [1, "string"];
