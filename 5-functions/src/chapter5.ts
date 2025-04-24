// 사용자 정의 타입 가드

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScretch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScretch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    //강아지
  } else if ("isScretch" in animal) {
    //고양이
  }
}
