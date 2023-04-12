// 4월 12일 코드

function 함수1(a, b) {
  return a + b;
}
function 함수2(a, b, c) {
  const z = a + b + c;
  return z;
}
function 함수3(a, b, c, d, e, f) {
  return a;
}

console.dir(함수1);
console.dir(함수2);
console.dir(함수3);

// 함수 dir에 접근해서 값을 바꿀 수 있다?
함수1['location'] = 'jeju'; //=> location에 값이 정말 바뀌어 있다.
함수1['name'] = 'jejufunction'; // => 바뀐다.
// 바뀌지 않는 것도 있다.
함수1['length'] = 5;
console.dir(함수);

function 함수(a = 10, b = 20, c = 30) {
  return a + b + c;
}

함수();
함수(100);
함수(100, 200); // => 330 c값이 디폴트 30으로 설정되어 있기 때문
함수(100, 200, 300); // => 600
함수((c = 300)); // 상관없이 순서대로 들어가게 된다. 300 + (b)20 + (c)30 //=> 350
함수((a = 100), (c = 300)); // => 430

// 3. roro기법 원리 설명
// roro 기법은 무엇인가요? 입력되는 아규먼트가 매우 많은 아래 함수의 경우 호출 하는 쪽에서 어떤 값이 들어가는지 명확히 알기 어렵고 읽기도 어렵다.
window.addNewControl('Title', 20, 50, 100, 50, true);
// 여러분들이 코드를 쭉 읽어 내려가다가 저 함수를 만났습니다. 기분이 어떨 것 같으신가요?

// roro 기법을 어떻게 사용하고 원리는 무엇인가요?
function 로그인정보({
  회원등급 = 'Gold',
  글쓰기 = true,
  글읽기 = true,
  채널관리 = true,
  백업 = '1주일 이내 가능',
  소셜로그인여부 = true,
}) {
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
}

로그인정보({
  // 중간에 생략된 값도 있고, 변수 순서도 바뀐 상태
  회원등급: 'Silver',
  소셜로그인여부: false,
  백업: '3일 이내 가능',
}); // 전달해주는 아규먼트는 Object 형식이여야 한다.

// 원리(모르셔도 코딩하는데 지장있진 않습니다.)
let one;
let two;
let three;

let four = { one, two, three };
// {one: undefined, two: undefined, three: undefined}
// 이렇게 사용할 수 있게 된 것이 최근입니다.
// '이렇게'는 변수 값을 object안에 넣으면 변수명이 key가되고 변수의 값이 object의 value가 되는 문법을 얘기합니다.

let { one, two, three } = { one: 10, two: 20, three: 30 };
let { one, two, three } = { two: 20, one: 10, three: 30 };

// 살짝 심화
// 위 코드에서 로그인정보({}) 호출 했을 때에는 error가 안나지만 로그인정보()호출했을 경우에는 error가 납니다.
function 함수({ a = 1, b = 2, c = 3 } = {}) {
  return a + b + c;
}

함수(); // => error
함수({}); // =>
함수({ b: 100 });

// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined
