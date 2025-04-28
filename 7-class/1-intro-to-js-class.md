# 자바스크립트의 클래스 소개

동일한 형식, 동일한 모양의 객체를 여러 개 만들어야 한다고 가정했을 때, 어쩔 수 없이 **중복 코드가 발생한다.**

```ts
// 클래스
let studentA = {
  name: "이정환",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

let studentB = {
  name: "홍길동",
  grade: "B-",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};
```

<br>

이럴 때 **자바스크립트의 클래스**를 사용하면 된다. 클래스는 이렇게 똑같이 생긴, 똑같은 모양의 객체를 마치 공장에서 찍어내듯이 단 한 줄로 간단하게 만들 수 있는 문법이다. 객체라 붕어빵이라고 하면 클래스는 붕어빵 기계로 비유할 수 있다.  
클래스의 이름은 **앞글자를 대문자로 하는 파스칼 표기법**을 쓴다. 클래스를 선언하고 나서 필드를 설정해줘야 한다. **필드란 클래스가 만들어낼 객체 프로퍼티를 의미**한다.  
아래처럼 코드를 작성함으로써 이 Student 클래스가 만들어낸 객체는 모두 다 name, grade, age 프로퍼티를 갖게 된다.

```ts
//클래스 선언
class Student {
  //field
  name;
  grade;
  age;
}
```

<br>

필드를 만든 후 생성자를 선언해야 한다. **생성자란 특수한 메서드로 실질적으로 객체를 생성하는 함수**이다.

```ts
class Student {
  //field
  name;
  grade;
  age;

  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// Student 인스턴스
let StudentB = new Student("이정환", "A+", 27);
```

<br>
다음은 메서드 만드는 방법이다.

```ts
//클래스 선언
class Student {
  //field
  name;
  grade;
  age;

  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //메서드
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

let studentB = new Student("이정환", "A+", 27);
console.log(studentB);
studentB.study();
studentB.introduce();
```

<br>

새로운 클래스를 아래와 같이 만들었다. 근데 코드를 자세히 보면 앞서 만들었던 Student 클래스와 크게 차이가 나지 않는걸 확인할 수 있다. 이처럼 Student 클래스의 파생 클래스들이 계속 생성되어야 한다면 똑같은 필드, 똑같은 생성자 코드, 똑같은 메서드를 계속 만들어야 한다.  
그래서 이럴 때는 클래스의 기능인 **상속**을 이용하면 된다.

```ts
//클래스 선언
class Student {
  //field
  name;
  grade;
  age;

  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //메서드
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

let studentB = new Student("이정환", "A+", 27);
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
  //필드
  favoriteSkill;

  //생성자
  constructor(name, grade, age, favoriteSkill) {
    this.favoriteSkill = favoriteSkill;
  }

  //메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함.`);
  }
}

const studentDeveloper = new StudentDeveloper("이정환", "B+", 27, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
```

<br>

중복되는 코드는 다 지우지만, 생성자에서 super라는 함수를 호출해서 name, grade, age를 인수로 전달해줘야 한다.  
현재 StudentDeveloper 클래스는 Student 클래스를 상속 받고 있는 상태로, Student에 있는 메소드, 필드가 그대로 상속된다. 그런데 StudentDeveloper의 생성자 함수는 매개변수로 4가지 필드를 제공 받긴 하지만 favoriteSkill이라는 필드만 설정하고 있다.  
나머지 필드 값을 위해 **super 함수를 호출하여 사용**하며, **super 함수를 호출하면 부모 클래스(슈퍼 클래스)의 생성자가 호출된다.**

```ts
class StudentDeveloper extends Student {
  //필드
  favoriteSkill;

  //생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  //메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함.`);
  }
}

const studentDeveloper = new StudentDeveloper("이정환", "B+", 27, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
```

<br>

```ts

```

<br>
