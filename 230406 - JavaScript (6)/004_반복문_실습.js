// 문제
// 다음 user의 나이 평균을 구하세요.
let user = [
  {
    _id: '642e3071c61a23c70ae6076b',
    index: 0,
    age: 31,
    name: 'Hicks Garza',
    gender: 'male',
  },
  {
    _id: '642e3071ecd6f90a87d64731',
    index: 1,
    age: 32,
    name: 'Ayers Harrington',
    gender: 'male',
  },
  {
    _id: '642e3071cef9ddc131f047fb',
    index: 2,
    age: 39,
    name: 'Lamb Adams',
    gender: 'male',
  },
];
let s = 0;
for (let i = 0; i < user.length; i++) {
  s += parseInt(user[i]['age']); // age의 값이 문자열일 경우도 고려
}
console.log(s / user.length);

// 견고한 코드란?
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age 필드가 없다면?(MongoDB의 경우)

let s1 = 0;
for (let i = 0; i < user.length; i++) {
  console.log(user[i]['age']);
  s1 += user[i]['age'];
}
// console.log(Math.floor(s / user.length))
console.log((s1 / user.length).toFixed(2));

for (const i of user) {
  i.age;
}
