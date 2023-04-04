const x = 10;
const y = 20;
console.log('x 값은 10이고 y값은 20이고 두개를 곱한 값을 200입니다.');
console.log('x 값은 ', x, '이고 y값은 ', y, '이고 두개를 곱한 값은', x * y, '니다.');

const x2 = 10;
const y2 = 20;
const result = x2 * y2;
console.log(`x 값은 ${x2}이고 y값은 ${y2}이고 두개를 곱한 값을 ${result}입니다.`);

const s = 'hello';
const ss = 'world';
const result2 = s + '\n' + ss;
console.log(result2);

// 가독성이 떨어집니다.
if (true) {
  if (true) {
    if (true) {
      console.log(`h
e
l
l
o
`);
    }
  }
}
