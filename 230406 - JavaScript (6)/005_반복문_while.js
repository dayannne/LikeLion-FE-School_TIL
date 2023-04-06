let x = 0;
while (x < 10) {
  console.log('start');
  console.log(x);
  x += 1;
  console.log('end');
}

/////

let input1;

do {
  input1 = prompt('숫자를 입력하세요.');
} while (isNaN(input1));

console.log('입력한 숫자는 ' + input1 + '입니다.');

/////

let input2;

do {
  input2 = confirm('다음에도 저희와 함께 하시겠습니까?');
} while (!input2);

console.log('감사합니다.');

/////

// 암기코드 1
// 구구단 for
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

let i = 2;
while (i < 10) {
  let j = 1;
  while (j < 10) {
    console.log(`${i} x ${j} = ${i * j}`);
    j++;
  }
  i++;
}

// 구구단 while
let i1 = 2;

while (i <= 9) {
  let j1 = 1; // 이 코드를 넣으셔야 정답이 됩니다.

  while (j1 <= 9) {
    console.log(`${i1} x ${j1} = ${i1 * j1}`);
    j1++;
  }

  i1++;
}

/////

// 암기코드2
// 문자열 역순출력
let s = 'hello world';
let result = '';
for (let i = 0; i < s.length; i++) {
  // result = result + s[i]
  result = s[i] + result; // dlrow olleh
}

console.log(result);

//암기코드2- while
let s1 = 'hello world';
let result1 = '';
let count = 0;
while (count < s1.length) {
  result = s1[i] + result; // dlrow olleh
  count++;
}

console.log(result1);

/////

//암기코드 3
// 팩토리얼(!)
// 암기코드 3
// 팩토리얼
// 5! = 5 * 4 * 3 * 2 * 1
let s2 = 1;
for (let i = 1; i < 6; i++) {
  s2 *= i;
}
console.log(s2);

// s = s  *  i // 1 * 1
// s = 1  *  2
// s = 2  *  3
// s = 6  *  4
// s = 24 *  5

let s3 = 1;
i = 1;
while (i < 6) {
  s3 *= i;
  i += 1;
}

console.log(s3);
