///// 심화 수업(기억하지 않으셔도 됩니다.) /////
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
  {
    _id: '642e3071cef9ddc131f047fb',
    index: 2,
    name: 'Lamb Adams',
    gender: 'male',
  },
];

let s = 0;
for (const i of user) {
  console.log(i);
  console.log(i.age); // 마지막에 undefined
  console.log(s); // 마지막에 102
  console.log('----------');
  s += i.age; // 마지막에 undefined + 102
}
console.log((s / user.length).toFixed(2));

/////////

let s1 = 0;
for (const i of user) {
  console.log(i);
  console.log(i.age); // 마지막에 undefined
  console.log(s1); // 마지막에 102
  console.log('----------');
  s += i.age ?? 0;
}
console.log((s1 / user.length).toFixed(2));

/////
s2 = 0;
for (const i of user.map((v, i) => v.age)) {
  if (!!i) {
    s2 += i;
  }
}
console.log((s2 / user.length).toFixed(2));

/////
!true; // false
!false; // true
!!10; // true
!!1; // true
!!-1; // true
!!0; // false
!!'hello'; // true

/// 외우세요. ////
user
  .map((v) => v.age) //age 값만 빼온다 [31,32,39,undefined]
  .filter((v) => !!v) //값이 있는 것만 가져온다.
  .reduce((a, b) => a + b, 0); // 합친다.
