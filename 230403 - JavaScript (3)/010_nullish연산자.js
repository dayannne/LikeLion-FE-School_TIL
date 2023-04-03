// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이(최신 문법을 구식 부라우저에서도 사용할 수 있도록 해주는 것) 필요합니다.

let firstName = null;
let lastName = null;
let nickName = 'licat';

// 좌측이 null일 경우 우측을 반환
console.log(firstName ?? nickName); // licat
console.log(firstName ?? lastName ?? nickName); // licat
console.log(firstName ?? lastName ?? nickName ?? '익명 사용자'); // licat

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c); // 10

// 단락회로평가와 nullish 연산자의 차이
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

let height2;
console.log(height2 || 100); // 100
console.log(height2 ?? 100); // 100

let height3 = '';
console.log(height3 || 'hello'); // 'hello' // falsy한 값으로 판별
console.log(height3 ?? 'world'); // '' // nullish한 값으로 판별

// 제가 지금 주석으로 다는 내용은 지금 여기서는 모르셔도 괜찮습니다.
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined
