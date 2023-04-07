// 컨벤션
// https://github.com/airbnb/javascript#iterators-and-generators
// 11.1 : 순회 대신 메서드
// 15.1 : 비교
// 18.1, 18.4, 18.5 : 코멘트
// 19.1 : 공백

// https://google.github.io/styleguide/jsguide.html#features-for-loops :
// 반복구문에서는 가능하면 for of, object에서는 for in

// https://ui.toast.com/fe-guide/ko_CODING-CONVENTION#for-in%EB%AC%B8-%EC%95%88%EC%97%90%EC%84%9C%EB%8A%94-hasownproperty-%EC%A1%B0%EA%B1%B4-%EA%B2%80%EC%82%AC%EB%A5%BC-%EC%88%98%ED%96%89%ED%95%9C%EB%8B%A4 :
// 반복구문에서는 hasOwnProperty 조건 검사를 수행

// https://ko.javascript.info/array#ref-830(모던자바스크립트): Array 순회에서 권하지 않음

for (let i = 0; i < 10; i++) {
  console.log(10);
}

let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// airbnb 컨벤션에 권장
// IE에서도 사용 가능
let arr1 = [10, 20, 30, 40, 50];
let obj1 = { one: 10, two: 20 };
for (const i in arr1) {
  console.log(arr1[i]); // index를 가져온다!?
}

for (const i in obj1) {
  console.log(obj1[i]); // key를 가져온다!?
}

for (const i in 'hello world') {
  console.log(i);
}

let s = 0;
for (const i in '.'.repeat(101)) {
  s += parseInt(i);
}
console.log(s);

// 많은 컨벤션에 권장
// IE에서는 사용 불가
// 개발자의 행복을 위해 익스플로러를 버리자 => 이렇게 해야만 사용할 수 있습니다.
let arr2 = [10, 20, 30, 40, 50];
let obj2 = { one: 10, two: 20 };

for (const item of arr2) {
  console.log(item);
}

let s1 = 0;
for (const item of arr2) {
  s1 += item;
}
console.log(s);

// for (const item of obj2) {
//   // 가능은 한데, of 뒤에 iterable(반복가능)한 값이 나와야 합니다.
//   console.log(item); error
// }

for (const item of 'hello world') {
  console.log(item);
}

// 문제
// https://codingdojang.com/scode/408?answer_mode=hide
let s2 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < s.length; i++) {
  console.log(s[i], s[i + 1]); // 마지막 값을 확인해보세요.
  console.log(Math.abs(s[i + 1] - s[i]));
}

for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i], s[i + 1]); // 마지막 값을 확인해보세요.
  console.log(Math.abs(s[i + 1] - s[i]));
}
for (let i = 1; i < s.length; i++) {
  console.log(s[i - 1], s[i]); // 마지막 값을 확인해보세요.
  console.log(s[i] - s[i - 1]);
}

// 문제
// 다음 수학 점수의 반평균을 구하세요.
let 수학점수 = [10, 99, 89, 70];
let s4 = 0;
// step1
(수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]) / 수학점수.length;
// step2
for (let i = 0; i < 수학점수.length; i++) {
  s4 += 수학점수[i];
  for (const i of 수학점수) {
  }
}
console.log(s4 / 수학점수.length);
