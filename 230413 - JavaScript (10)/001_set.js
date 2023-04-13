// 집합, 합집합, 교집합, 차집합, 여집합
// 실무에서는 많이 사용되지 않지만
// 알고리즘 문제에서는 퓔쑤로 사용되는 자료형

let s = new Set('aabbbcccddd');
s.size;

// ------------------- //

회사게시판 = [
  '이호준',
  '이호준',
  '이호준',
  '이호준',
  '이호준',
  '이호준',
  '이호준',
  '김연하',
  '김연하',
  '최흥석',
  '이나영',
];
let 게시자 = new Set(회사게시판);

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야 합니다.)
게시자.size;

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of 게시자) {
  console.log(
    i,
    회사게시판.filter((e) => e === i),
  );
}
// 이호준 (7) ['이호준', '이호준', '이호준', '이호준', '이호준', '이호준', '이호준']
// 김연하 (2) ['김연하', '김연하']
// 최흥석 ['최흥석']
// 이나영 ['이나영']

for (const i of 게시자) {
  console.log(i, 회사게시판.filter((e) => e === i).length);
} // 이호준 7 /김연하 2 / 최흥석 1 / 이나영 1

// key 따로 value(중복되는 값의 개수) 따로 저장
let map = new Map();
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1);
} // Map(4) {'이호준' => 7, '김연하' => 2, '최흥석' => 1, '이나영' => 1}

// ------------------- //

// set 연습 //

let s1 = new Set('aabbbccccdd'); // {'a','b','c','d'}
s1.size; // 4
s.has('a');
s.has('f');
s.add('z'); // {'a','b','c','d','z'}

for (const i of s) {
  console.log(i);
}

let s2 = new Set('aabbbccccdd'.split(''));
let s3 = new Set(['a', 'a', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'd']);

// 교집합
// JavaScript에서는 교집합을 구하는 메소드가 따로 없어 이렇게 직접 만들어 줘야 한다.
let a = new Set('abc');
let b = new Set('cde');
// b 안에 a배열의 요소를 갖고 있는가?
let cro = [...a].filter((e) => b.has(e));

// 합집합
let union = new Set([...a, ...b]);
let union2 = new Set([...a].concat(...b));

// 차집합
let dif = [...a].filter((e) => !b.has(e));

// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 교집합의 갯수 구하는 문제
function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

function solution(s1, s2) {
  s1 = new Set(s1);
  s2 = new Set(s2);
  let cro = [...s1].filter((e) => s2.has(e));
  return cro.length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order) // '29423'
    .split('') // ['2', '9', '4', '2', '3']
    .filter((num) => mySet.has(parseInt(num))).length;
}
