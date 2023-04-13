// this

function a() {
  console.log(this);
}
a();
// window를 호출
// window.a() 와 같다.

function b() {
  console.log('hello world');
}
b();
window.b();

let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
    // this가 누구일지는 찍어보면 됩니다!
    // 1. func1
    // 2. myObj
    // 3. window
  },
};
myObj.func1(); // myObj를 호출

// ----------------- //

let myObj2 = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};
myObj2.func1(); // val:100 , func1: f

// ----------------- //

// this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라지기 때문입니다.

function sayMyName() {
  console.log(this);
}

var c = {
  hello: 'world',
  say: sayMyName,
};

var b = {
  c: c, // var b = {c}
};
var a = {
  b: b, // var a = {c}
};

c.say(); // - c {hello: 'world', say: ƒ}
b.c.say(); // - c {hello: 'world', say: ƒ}
a.b.c.say(); // - c {hello: 'world', say: ƒ}

// 문제를 꼬아보겠다!
function sayMyName() {
  console.log(this);
}

var c = {
  hello: 'world',
  say: sayMyName,
};

var b = {
  // var b = {c}
  c: c,
  say: sayMyName,
};

var a = {
  // var a = {b}
  b: b,
  say: sayMyName,
};

// ----------------------------------------------------------------------- //

// 추가 예제 //

var name = 'hojun';

function sayName() {
  console.log(this.name);
}

// sayName()

let peter = {
  name: 'Peter Parker',
  say: sayName,
};

let bruce = {
  name: 'Bruce Wayne',
  say: sayName,
};

peter.say();
bruce.say();

// ---------------- //

function attackBeam() {
  // 레이저 공격
  this.hp -= 20;
}

let jombi = {
  name: 'jombi',
  damaged: attackBeam,
  hp: 10000,
  power: 2,
};

let thanos = {
  name: 'thanos',
  damaged: attackBeam,
  hp: 1000,
  power: 100,
};

jombi.damaged();
jombi;

a.b.say(); // - b {c: {…}, say: ƒ}
a.say(); // - a {b: {…}, say: ƒ}
c.say(); // - c
a.b.c.say(); // - c
// 각자 자신을 출력하게 된다.

// ------------- //

function attackBeam() {
  // 레이저 공격
  this.hp -= 20;
}

function attackKnife() {
  // 칼공격
  this.hp -= 5;
}

let jombi = {
  name: 'jombi',
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 10000,
  power: 2,
};

let thanos = {
  name: 'thanos',
  damaged: attackBeam,
  hp: 1000,
  power: 100,
};

jombi.damaged1(); // Beam
jombi.damaged2(); // Knife
jombi.hp;

// ------------- //

function attackBeam() {
  // 레이저 공격
  this.hp -= 20;
}

function attackKnife() {
  // 레이저 공격
  this.hp -= 5;
}

let jombi = {
  name: 'jombi',
  damaged: [attackBeam, attackKnife],
  hp: 10000,
  power: 2,
};

let thanos = {
  name: 'thanos',
  damaged: attackBeam,
  hp: 1000,
  power: 100,
};

jombi.damaged();
jombi;

// --------------------- //

let 호텔 = [
  {
    이름: '하나호텔',
    위치: '제주도 제주시 001',
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: '둘호텔',
    위치: '제주도 제주시 002',
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: '셋호텔',
    위치: '제주도 제주시 003',
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

// ------------------------ //
/////

// https://velog.io/@proshy/JS-%EC%83%81%ED%99%A9%EC%97%90-%EB%94%B0%EB%A5%B8-this-%EB%B0%94%EC%9D%B8%EB%94%A9
function sayName() {
  console.log(this);
}

var c = {
  hello: 'world',
  say: sayName,
};

var b = {
  c: c,
};

var a = {
  b: b,
};

a.b.c.say();

// --------------- //

function a() {
  function b() {
    console.log(this);
    function c() {
      console.log(this);
    }
    c();
  }
  b();
}
a();
// -> a(), b(), c() 모두 window에 해당하여, window가 출력된다.
// 위 함수는 a.b.c()이런 식으로 호출한 객체를 타고 올라가는 형태가 아닙니다.
