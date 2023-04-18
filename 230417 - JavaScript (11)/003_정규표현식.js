'paullab CEO leehojun hello CEO';

// 문자열 '1개만' 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO');

// flag로 (global)을 주어 '전체' 매칭하여 변경
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO');
// 패턴을 찾아 Array로 반환
'paullab CEO leehojun hello CEO'.match(/CEO/g);
// 패턴으로 Split
'paullab CEO leehojun hello CEO'.split(/CEO/g);
// 패턴이 들어가 있으면 true 없으면 false
/CEO/g.test('paullab CEO leehojun hello CEO');

// 알고리즘 문제 풀이할 때 주의 사항
// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다
'!a!abc!abcd'.split('!');
'!!!'.split('!'); // 4개
'!a!a!a'.split('!'); // 4개
'a!a!a!'.split('!'); // 4개

'!a!a!a'.split('!').length - 1;

// ------------ //

// 1번 문제
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120826?language=javascript
function solution(my_string, letter) {
  return my_string.split(letter).join('');
}
'BCBdbe'.split('B');
'BCBdbe'.split('B').join('');

// 오답 : 1개만 바꿉니다.
function solution(my_string, letter) {
  return my_string.replace(letter, '');
}
'BCBdbe'.replace('B', '');

// 오답 : 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해주어야 합니다.
function solution(my_string, letter) {
  return my_string.replace(`/${letter}/g`, '');
}
'BCBdbe'.replace('B', '');
let letter = 'B';
'BCBdbe'.replace(`/${letter}/g`, '');

// 정답
function solution(my_string, letter) {
  // new RegExp(패턴으로 사용할 문자열, 플래그)
  // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있습니다.
  let reg = new RegExp(letter, 'g'); // 정규표현식 메소드
  return my_string.replace(reg, '');
}
// new RegExp('B', 'g') 이렇게 사용하시거나 my_string.replace(/B/g, '')

// -------------- //

// 2번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120851
// 주어진 문자열에서 숫자만 뽑아내 더해 보자

// 정답 유형 1) : 슷자를 뽑아낼 거면 match
function solution(my_string) {
  return my_string.match(/[0-9]/g).reduce((a, b) => parseInt(a) + parseInt(b), 0);
}
'aAb1B2cC34oOp'
  .match(/[0-9]/g)
  .map((x) => parseInt(x))
  .reduce((a, b) => a + b, 0);

'aAb1B2cC34oOp'.match(/[0-9]/g).reduce((a, b) => parseInt(a) + parseInt(b), 0);

// 정답 유형 2) : 지울거면 replace
function solution(my_string) {
  return my_string.replace(/[0-9]/g, '').reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

// -------------- //

// 3번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120891

// 정답 유형 1) replace
function solution(order) {
  return order.toString().answer.replace(/[^369]/g, '').length;
}

// 정답 유형 2) match - 삼항연산자
function solution(order) {
  let answer = order.toString().match(/[369]/g);
  return answer ? answer.length : 0; // answer이 true면 length를 출력
}

//정답 유형 3) match - null연산자
function solution(order) {
  let value = order.toString().match(/[369]/g) ?? [];
  return value.length;
}
function solution(order) {
  return (order.toString().match(/[369]/g) ?? []).length;
}

//error
(163009).toString().match(/[369]/g);
// 실패인 이유 => 369가 포함되지 않은 숫자의 경우 match메소드를 돌렸을 때
// null값이 나온다. null인 경우 0이나 빈 배열값을 출력하도록 바꿔주어야 한다.

// ----------- //

// 4번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120913
function solution(my_str, n) {
  const answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n));
  }
  return answer;
}

//정규표현식 사용
'abc1Addfggg4556b'.match(/[a-zA-Z0-9]{4}/g);
'abc1Addfggg4556b'.match(/[a-zA-Z0-9]{3}/g);
'abc1Addfggg4556b'.match(/\w{3}/g); // 문자
'abc1Addfggg4556b'.match(/\d{3}/g); // 숫자
'abc1Addfggg4556b'.match(/\.{3}/g); // 모든 문자
''.match(/.{3}/g); // 주의 : null

// 오답
function solution(my_str, n) {
  const reg = new RegExp(`.{${n}}`, 'g');
  return my_str.match(reg);
}

// 정답
function solution(my_str, n) {
  const reg = new RegExp(`.{1,${n}}`, 'g');
  return my_str.match(reg);
}
function solution(my_str, n) {
  const reg = new RegExp(`\\w{1,${n}}`, 'g');
  // \\는 하나의 역슬래시 문자를 나타냅니다. 역슬래시를 두 번 사용하는 이유는, ``안에서 역슬래시를 인식하기 위함입니다.
  return my_str.match(reg);
}

// ------------ //

// 5번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120864
// 2번 문제 업그레이드
// 2번 문제 해답
function solution(my_string) {
  return my_string
    .replace(/[^0-9]/g, '')
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

// 오답
function solution(my_string) {
  return my_string.match(/\d+/g).reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

// 정답
function solution(my_string) {
  return (my_string.match(/\d+/g) ?? []).reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

'aAb1B2cC34oOp'.match(/\d/g);
'aAb1B2cC34oOp'.match(/\d+/g);
'aAb1B2c111C34oO123p'.match(/\d+/g);

// -------------------그룹 연습문제--------------------- //

// 6번 문제
'gogaooogogooo'.match(/(go)/g); // =>  ['go', 'go', 'go']
'gogaooogogooo'.match(/[go]/g);
// => ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']

// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오.
// '87a99b00fww89e' => ['87a', '99b', '00f', '89e']
'87a99b00fww89e'.match(/[0-9][0-9][a-zA-Z]/g);
'87a99b00fww89e'.match(/([0-9][0-9])([a-zA-Z])/g); // 숫자 그룹과 문자 그룹으로 나눕니다.
'87a99b00fww89e'.match(/([0-9]{2})([a-zA-Z])/g);
'87a99b00fww89e'.match(/(\d{2})([a-zA-Z])/g);

// 7번 문제
// 링크 : https://jsalgo.co.kr/?page=2#
'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g);
// ['r1', 'e3', 'v2', 'v1', 'v9']

// 아래처럼 r, e, v 뒤에 숫자가 10이 있을 경우 오답
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g);
// ['r1', 'e3', 'v2', 'v1', 'v9']

// 아래처럼 뽑으면 e가 33이 뽑히므로 오답
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev]\d+/g);

// ---------------- //

// reduce 보강설명
// reduce의 형태
array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

[10, 20, 30].reduce((accumulator, currentValue) => {
  console.log(currentValue);
  return accumulator + currentValue;
}, 0);

['a10', 'a20', 'a30'].reduce((accumulator, currentValue) => {
  console.log(currentValue);
  console.log(currentValue.slice(1));
  return accumulator + currentValue;
}, 0);

['a10', 'a20', 'a30'].reduce((accumulator, currentValue) => {
  console.log(currentValue);
  console.log(currentValue.slice(1));
  console.log(parseInt(currentValue.slice(1)));
  return accumulator + parseInt(currentValue.slice(1));
}, 0);

['a10', 'a20', 'a30'].reduce((accumulator, currentValue) => {
  return accumulator + parseInt(currentValue.slice(1));
}, 0);

['a10', 'a20', 'a30'].reduce((a, c) => a + parseInt(c.slice(1)), 0);

function solution(data) {
  let result = data
    .match(/([rev])(10|[0-9])/g)
    .reduce((a, c) => a + parseInt(c.slice(1)), 0)
    .toString();
  return `${result[0]}월 ${result[1]}일`;
}

const string = `호준, 이
길동, 홍
춘향, 최
순신, 이`;

let result1 = string.replace(/(\w+), (\w+)/gm, '$2 $1');
console.log(result1);
let result2 = string.replace(/(\w+), (\w+)/gm, '$2 $1!!$1!!$1');
console.log(result2);

const string = `hojun, lee
gildong, hong
hojung, choi
junho, lee`;

let result1 = string.replace(/(\w+), (\w+)/gm, '$2 $1');
console.log(result1);
let result2 = string.replace(/(\w+), (\w+)/gm, '$2 $1!!$1!!$1');
console.log(result2);

const string = `hojun, lee
gildong, hong
hojung, choi
junho, lee`;

let result1 = string.replace(/(\w+), (\w+)/gm, '$2 $1');
console.log(result1);
let result2 = string.replace(/(\w+), (\w+)/gm, '$2_$1');
console.log(result2);
let result3 = string.replace(/(\w+), (\w+)/gm, '$1님 안녕하세요.');
console.log(result3);
let result4 = string.replace(/(\w+), (\w+)/gm, '$2 $1!!$1!!$1');
console.log(result4);
