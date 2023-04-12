let m = new Map();

// Map에 값을 넣기
m.set('하나', 1);
m.set(1, '하나');
m.set(true, 1);
m.set(false, 0);
//Map(4) { '하나' => 1, 1 => '하나', true => 1, false => 0 }

// Map의 값에 접근하기
m.get('하나');

// [1,2,3] != [1,2,3] 주소값이 달라서
m.set([1, 2, 3], '리얼리');
m.get([1, 2, 3]); // undefined 이해가 안된다...

//m.get([1, 2, 3])와 같은 코드는 [1, 2, 3]이라는 새로운 배열 객체를 생성하고, 이를 키 값으로 사용하여 Map에서 값을 가져오려 하기 때문에 undefined가 반환됩니다.

// Map이 값을 갖고 있는지 확인하기
m.has('하나'); // => true

// Map의 값을 제거하기
m.delete('하나');
m.has('하나');

// Map의 크기를 확인하기
m.size;

////////////////////////////////

let data = new Map([
  ['one', 1],
  ['two', 2],
]); // O
let data = new Map(Object.entries({ one: 1, two: 2 })); // O
let data = new Map({ one: 1, two: 2 }); // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X

// 직접 순회가 가능한 Map!
let data = { one: 1, two: 2 };
for (const i of data) {
  // X 작동되지 않습니다!
  console.log(i);
}
let data = { one: 1, two: 2 };
for (const i of Object.entries(data)) {
  console.log(i);
}

// 직접 순회가 가능하지 않은 Object!
let data = { one: 1, two: 2 };
for (const i of data) {
  // X 작동되지 않습니다!
  console.log(i);
}

let data = { one: 1, two: 2 };
for (const i of Object.entries(data)) {
  console.log(i);
}

// 직접 순회가 가능한 Map!
let m = new Map();

m.set('하나', 1) // 메서드 체이닝
  .set('둘', 2)
  .set('셋', 3)
  .set('넷', 4);

for (const i of m) {
  console.log(i);
}
for (const [key, value] of m) {
  console.log(key, value);
}

//object의 단점
let test = { one: 1, two: 2 };
Object.keys(test);

// Map -> Object 간의 형변환
let 맵 = new Map(Object.entries({ one: 1, two: 2 }));
let 오브젝트 = Object.fromEntries(맵);

// 키 값의 중복이 안됩니다.
let map = new Map();
map.set('이호준', 1);
map.set('이호준', 2);
map.set('이호준', 3);
