# 서로소 유니온 타입

타입 좁히기를 더 쉽고 정확하게 직관적으로 타입을 좁힐 수 있도록 객체 타입을 정의하는 특별한 방법으로 **교집합이 없는 타입들로만 만든 유니온 타입을 말한다**.

- 교집합 : 공통 원소가 하나도 없는 집합

<br>

```ts
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  //user 객체 안에 kickCount라는 프로퍼티가 있는지를 확인하는 코드
  if ("kickCount" in user) {
    //admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    //member 타입
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else {
    //guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  }
}
```

위 코드를 제3자가 봤을 때, "이 조건문은 어떤 타입이구나~"라고 직관적으로 알아보기 힘들다. 즉 이렇게 코드를 작성하면 직관적이지 않다. 아래는 직관적으로 작성하는 방법 첫번째 에시이다.

```ts
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  //user 객체 안에 kickCount라는 프로퍼티가 있는지를 확인하는 코드
  if (user.tag === "ADMIN") {
    //admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    //member 타입
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else {
    //guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  }
}
```

<br>

혹은 **switch-case문**으로 작성할 수 있다.

```ts
// 서로소 유니온 타입 : 교집합이 없는 타입들로만 만든 유니온 타입을 말한다

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`
      );
      break;
    }
  }
}
```

<br>

**태그**라는 프로퍼티를 각각 만들어준 다음에 이 태그 프로퍼티의 타입을 **String Literal** 타입으로 다 다르게 정의를 해주면, 각각의 객체들이 **서로소 집합의 관계**를 갖는다
<br>

복습겸 한 가지 사례를 한번 더 보겠다. 비동기 작업(API 호출)의 결과를 처리하는 객체를 만들어야 하는 상황이라고 가정하자.

```ts
type AsyncTask = {
  state: "LOADING" | "FAILED" | "SUCCESS"; //string으로 정의해도 괜찮으나 좀 더 정확하게 하기 위해

  //state가 loading일 때는, error와 response가 없어야 되기 때문에 선택적 프로퍼티(?)로 변경
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};

//비동기 작업의 처리 결과를 함수의 매개변수로 받아서 상태에 따라 잘 처리하는 함수
//로딩 중 -> 콘솔에 로딩중 출력
//실패 -> 실패 : 에러메시지를 출력
//성공 -> 성공 : 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생: ${task.error?.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공: ${task.response?.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터~~",
  },
};
```

<br>

위 코드에서 switch-case 문구에 선택적 프로퍼티의 기호인 물음표를 제거하면 에러가 발생한다. 이는 undefined일 수 있기 때문에 생기는 에러로, 우리는 task를 AsyncTask로 타입을 정의했고 error와 response은 선택적 프로퍼티로 정의되어 있기 때문에 더 이상 좁혀질 타입이 없다. 이럴 때는 옵셔널 체인징을 넣어주거나 non-null 단원을 사용해야 하는데 이는 안전한 방법이 아니다.  
이것을 해결하는 방법은 **async task를 3개의 타입으로 분리해서 서로소 유니온 타입으로 만들어주면 된다**.  
이렇게 하면 선택적 프로퍼티의 물음표를 제거해도 자동으로 타입이 좁혀지는걸 확인할 수 있다.

```ts
type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;
```

<br>
