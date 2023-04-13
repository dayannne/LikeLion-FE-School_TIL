// - JSON.parse(): JSON문자열을 자바스크립트 객체로 변환합니다.(문자열 => 객체)
// - JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환합니다.(객체 => 문자열)

const json1 = '{"result":true, "count":42}';
const obj1 = JSON.parse(json1);
console.log(obj1);

const json2 = '[1, 2, 3]';
const obj2 = JSON.parse(json2);
console.log(obj2);

const json3 = '[1, 2, [1, 2, 3]]';
const obj = JSON.parse(json3);
console.log(obj);

const json4 = { result: true, count: 42 };
const s = JSON.stringify(json4);
s;

// 깊은 복사
let l1 = [10, 20, 30];
let a1 = JSON.parse(JSON.stringify(l1));
a1[0] = 1000;

console.log(l); // [10, 20, 30]

// error
let l2 = [10, 20, 30];
let a2 = JSON.parse(`${l2}`);
a2[0] = 1000;

console.log(l2);
