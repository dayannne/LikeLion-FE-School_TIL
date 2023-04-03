# 🌳 오늘 하루 정리

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc7399ec-5b2b-4b31-bd26-6544aeafeb5c/Untitled.png)

강사님께서 자바스크립트 도서로 이렇게 세권의 책을 추천해 주셨는데 어쩌다보니 저 모든 책을 다 갖고 있는 나…ㅋㅋㅋㅋ

특히 혼공자 강의를 날짜별로 하나씩 들으면 자바스크립트 수업 맞춰서 끝낼 수 있다는 말을 듣고 어떻게든 시간내서 혼자 매일매일 하기로 했다~조금이라도 편하게 강의를 따라가기 위해서는 독학을 열심히 해야겠다고 생각했다. 하지만 벌서 하루가 지나가네요- 내일 화이팅….

# 오늘 공부한 내용 🌼

- number - `parseInt()`, `~~`(틸드는 코테에서만 추천)
- number 연산
  - 할당연산
  - 단항연산
  - 증감연산
  - 단락회로평가
  - 삼항 연산자
  - 드모르간 법칙
  - nullish 연산자
- Boolean
- NaN, undefine, null

# 새로 알게된 내용 💡

## var를 쓰면 안되는 이유

- ‘재선언’이 가능하다는 것이 문제 (var를 붙여 또 선언하면 덮어 씌워버린다.)
- `let`은 재선언이 불가하다는 점에서 유용하다.
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ad057d74-24ba-49a4-9436-dcbe8e6a908c/Untitled.png)

## number

### `**⭐ parseInt()`\*\*

- 실수는 정수로 변환한다
  ```jsx
  console.log(parseInt(10000)); // => 10000
  console.log(parseInt(10.5)); // => 10 소숫점이 없어짐, 권장
  console.log(~~10.5); // 역시 소숫점이 없어짐, 코테 정도에서만 권합니다.
  ```
- 10진법으로 변환해 줄 수 있다
  ```jsx
  console.log(parseInt(31, 2)); // -> NaN 2진법으로 바꾸는 것이 아니라 // 2진법으로 된 숫자를 10진법으로 바꾸는 것입니다. 그래서 에러가 납니다.
  console.log(parseInt(10000, 2)); // => 16
  console.log(parseInt(10000, 8)); // 8진법으로 된 숫자를 10진법으로 바꾸는 것입니다.
  ```
- `Number()`와의 차이

  - 텍스트가 숫자로 시작하지 않을 때 NaN을 출력
  - 텍스트가 숫자로 시작했을 경우 숫자 까지만 변환 가능

  ```
  console.log(parseInt(" ")) // NaN ** // 공백이라는 문자가 들어있다고 해석
  console.log(parseInt("")) // NaN **
  console.log(parseInt("hello")) // NaN
  console.log(parseInt("10 20")) // 10
  console.log(parseInt("10abc")) // 10 ****

  console.log(Number(" ")) // 0
  console.log(Number("")) // 0
  console.log(Number("hello")) // NaN
  console.log(Number("10 20")) // NaN
  console.log(Number("10abc")) // NaN
  ```

  - Boolean을 숫자로 인식하지 못한다.

  ```jsx
  console.log(parseInt(true)); // NaN
  console.log(parseInt(false)); // NaN

  console.log(Number(true)); // 1
  console.log(Number(false)); // 0
  ```

### `**⭐ .toFixed(3)**`

소수점 이하 자리수를 고정

```jsx
let n2 = 10.123123;
console.log(n2.toFixed(3)); // => 10.123
```

### `**⭐ Math**`

- `Math.abs()` 절대값
  ```jsx
  Math.abs(-10); // => 10
  ```
- `Math.ceil()` 숫자 올림
  `Math.floor()` 숫자 내림
  `Math.round()` 숫자 반올림
- `Math.sqrt()` 루트 square root
  ```jsx
  Math.sqrt(100); // square root, 루트 => 10
  ```
- `Math.max()` 최대값
  `Math.min()` 최소값
  ```jsx
  Math.min(1, 2, 3, 4, 5); // 1
  Math.min([1, 2, 3, 4, 5]); // error
  Math.min(...[1, 2, 3, 4, 5]) // '...' 전개구문으로 가능

      let values = [1, 2, 3, 4, 5];
      let values2 = [6, 7, 8, 11, 10];
      Math.max(...values)
      Math.max(...values, ...values2) //=> 11
      //  values와 values2 배열의 모든 요소를 하나의 배열로 합치고, 그 합친 배열에서 가장 큰 값을 반환
      ```

- `Math.random()` 0이상 1미만의 난수 생성

  ```
  // 0이상 ~ 1미만
  Math.random()

  // 1~10 까지 난수 생성
  parseInt(Math.random() * 10 + 1)
  // 0 이상 10 '미만'의 난수를 생성하게 되는데,
  // '+1'을 통해 이를 1부터 10 '이하'의 정수로 변환
  ```

### `**Infinity**`

```
Infinity // => Infinity
Infinity > 100 // => true
Infinity < 100 // => false
-Infinity // => -Infinity
```

### 부동소수점

- 컴퓨터에서 10진수 연산은 정확하지 않습니다.
- 0.1이 사실 Computer 입장에서 무한수라는 사실!

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6ac1a771-2758-446c-992e-11bb0a2cf152/Untitled.png)

```jsx
// 0.3 + 0.6
// 0.8999999999999999

// 문제가 되는 경우
let width = 0.3;
let height = 0.6;
if (width + height >= 0.9) {
  console.log('실행해!');
}
```

### `BigInt`

- JS에서 큰 숫자를 사용할 때에는 BigInt를 사용합니다.
- n을 붙이는 방법도 가능!

```jsx
BigInt(9007199254740991) + BigInt(1);
// 9007199254740992n

BigInt(9007199254740991) + BigInt(2);
// 9007199254740993n

9007199254740991n + 1n;
// 9007199254740992n

9007199254740991n + 2n;
// 9007199254740993n
```

### 상식으로 알아두기

- console.log로 문자열을 출력하게 되면 따옴표가 없습니다.

```jsx
let x = 10;
console.log(x.toString());
```

- 10.toString() // 10.까지 소숫점으로 인식하는 문제

```jsx
(10).toString();
```

## Number 연산

### 할당연산 `=`

### 단항연산 `+` `=`

```jsx
console.log(-2);
console.log(-(-2));
console.log(+-2);
console.log(+(+2));
console.log(+(+'2')); // => 2
// 1) 숫자형으로의 형변환
// 2) 양의 부호를 가지는 숫자형으로 형변환
```

### 증감연산 `++` `--`

### 단락회로평가 (`&&` `||` `!`)

- 논리곱 - 하나만 거짓이어도 모두 거짓
  - `False & OO` 볼 필요없이 왼쪽 False값 출력
  - `True && True` 왼쪽 True값 출력
  - `True && False` 오른쪽 False값 출력
- 논리합 - 하나만 참이어도 모두 참
  - `True || OO` 볼 필요없이 왼쪽 True값 출력
  - `False || True` 오른쪽 True값 출력
  - `False || False` 왼쪽 False값 출력
- 논리부정

### 삼항연산자 `(조건 ? 참 : 거짓)`

- 이중 삼항연산자
  ```jsx
  const price2 = 6900 // 이 값을 변경해보세요.
  const message = (price2 >= 9000) ? '비싸요' : ((price2 >= 7000) ? '적절해요' : '저렴해요')
  console.log(message) /=> 저렴해요
  ```

### 드모르간법칙

어떤 조건식에서
OR 연산자와 NOT 연산자,
AND 연산자와 NOT 연산자의 위치를 바꾸는 법칙

1. `!(x || y) === (!x && !y)`
2. `!(x && y) === (!x || !y)`

예를 들어, "커피를 좋아하거나 케이크를 좋아하지 않는다"는 문장을 논리식으로 표현하면 "A OR NOT B"가 됩니다. 여기서 드모르간 법칙을 적용하면 "NOT(NOT A AND B)"로 바꿀 수 있습니다. 이는 "A를 좋아하지 않고, B를 좋아한다"는 뜻으로 해석됩니다.

### nullish 연산자 `??`

좌측이 null일 경우 우측을 반환, 아닐 경우 그대로 좌측을 반환

```jsx
let firstName = null;
let lastName = null;
let nickName = 'licat';
console.log(firstName ?? lastName ?? nickName ?? '익명 사용자'); // licat
```

- nullish 연산자와 단락회로평가의 차이

```jsx
let height = 0;
console.log(height || 100); // (false || 100) => 100
console.log(height ?? 100); // (not null ?? 100) => 0

let height2;
console.log(height2 || 100); // (false || 100) => 100
console.log(height2 ?? 100); // (null ?? 100) => 100

let height3 = '';
console.log(height3 || 'hello'); //=> 'hello' // falsy한 값으로 판별
console.log(height3 ?? 'world'); //=> '' // nullish한 값으로 판별
```

### NaN (Not a Number)

- `NaN`은 "숫자가 아님"을 나타내는 값이기에,
  따라서 `NaN`은 자기 자신과도 동일하지 않다.
  ```jsx
  console.log(NaN == NaN); // false
  console.log(NaN === NaN); // false
  ```
- `NaN` 값은 비교 연산자(`==`또는 `===`)를 사용하여 다른 값과 같은지 비교할 수 없다. 따라서 `NaN`값이 있는지 확인하려면 `Number.isNaN()`함수를 사용해야 한다.
  ```jsx
  // 암기
  console.log(Number.isNaN(undefined)); // false
  console.log(Number.isNaN(null)); // false
  console.log(Number.isNaN(NaN)); // true
  ```

### Boolean

```
console.log(Boolean('hello')); // t
console.log(Boolean('')); // f
console.log(Boolean([1, 2, 3])); // t
console.log(Boolean([])); // 말도 안되게 t
console.log(Boolean({ one: 10, two: 20 })); // t
console.log(Boolean({})); // t
console.log(Boolean(0)); // f
console.log(Boolean(-1)); // t
console.log(Boolean(undefined)); //f
console.log(Boolean(null)); // f
console.log(Boolean(NaN)); // f
```

```jsx
let a2 = 'hello';
let b2 = '';
console.log(a2 && b2); / => ''를 출력

if (undefined) {
  console.log('hello');
}
let aa;
if (aa) {
  console.log('hello');
}
let aaa;
if (aaa > 100) {
  console.log('hello');
}
// 모두 출력하지 않는다. => undefined
```

### undefined

### null

# 오늘의 문제 ⚠️

- isNaN(undefined)랑 Number.isNaN(undefined)랑 뭐가 다른가? 뭘 쓰는 게 더 좋을까?
    <aside>
    💡 `**isNaN()`은** **사용하지 않는다**. 이는 숫자로 변환한 후 전달된 인수를 숫자로 변환한 후, 변환된 값이 `NaN`인지를 확인한다.
    전달된 값이 숫자로 변환될 수 있으면 변환하고, 변환된 값이 `NaN`인지를 확인하기에 예상치 못한 결과를 초래할 가능성이 있다.
    
    `**Number.isNaN()**`메서드는 전달된 인수를 숫자로 변환하지 않으며, 전달된 값이 정확히 `NaN`인 경우에만 `true`를 반환한다. 다른 비정상적인 값(예: 문자열, 객체, 배열 등)을 전달했을 때도 **`false`**를 반환다. `Number.isNaN()` 메서드를 사용하는 것이 더욱 정확한 결과를 얻을 수 있다.
    
    </aside>
    
    ```jsx
    // ES6에서 추가 도입(암기)
    console.log(Number.isNaN(undefined)); // false
    console.log(Number.isNaN(null)); // false
    console.log(Number.isNaN(NaN)); // true
    
    // isNaN() - XXXXXXX
    console.log(isNaN(undefined)); // true
    console.log(isNaN(null)); // false
    console.log(isNaN(NaN)); // true
    ```
