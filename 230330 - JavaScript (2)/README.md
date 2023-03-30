# 🌳 오늘 하루 정리

자바스크립트 둘째날이지만 찐 본격적인 시작이었던 오늘 수업,
자습 시간에는 멘토님과 처음 커피챗 시간도 가졌다.

오늘 배운 자바스크립트는 생각보다 진도가 빠르고 개념은 핵심만 짚고 관련 메소드를 위주로 배우는 수업 스타일에 살짝 당황했다(!) 조큼이라도 혼자 개념 공부를 해보고 있던 것이 다행이었다. 벌써 정규표현식을 다룰 줄은 몰랐어요 슨생님…생각보다 공부를 해본 분들도 많은 것 같아서 의기소침 반🥹 동기부여 반🔥

그리고 점심시간을 틈타 40분 정도 자전거를 타고 왔는데, 오히려 좀더 컨디션이 살아나길래
틈틈이 자주 나가야 겠다고 생각하며 오늘 TIL 끝-

# 오늘 공부한 내용 🌼

- DOM
- BOM
- 변수
- 산술/논리/비교

# 새로 알게된 내용 💡

## **DOM (document를 컨트롤)**

```jsx
document.write('hello');
```

## **BOM (browser를 컨트롤)**

```jsx
window.alert(); //: 브라우저에 메세지 다이얼로그를 띄웁니다.
window.prompt(); //: 브라우저에 사용자의 데이터를 입력받을 수 있는 입력 창을 띄웁니다.
window.confirm(); //: true 혹은 false 값을 반환하는 다이얼로그를 띄웁니다.

console.log(); //: 콘솔창에 로그 메세지를 보여줍니다.
console.error(); //: 콘솔창에 에러 메세지를 보여줍니다.
console.table(); //: 콘솔창에 데이터를 테이블 형태로 제공합니다.
```

<aside>
💡 console.log로 HTML 요소를 출력할 수 있다?!

```jsx
console.log('%chello world%chello', 'color:red;font-size:32px', 'color:blue;font-size:16px');
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e57ca88f-48cb-4cf7-8327-cffc04256d34/Untitled.png)

</aside>

- console.table()
  - 배열/Object를 테이블 형태로 출력할 수 있다.
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1cc75bab-91e7-41e5-aa79-6bec96e6634f/Untitled.png)
- console.group()
  ```jsx
  console.group('위니브');
  console.group('디자인');
  console.log('DE/OOO');
  console.log('DE/OOO');
  console.groupEnd();
  console.groupEnd();
  ```
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a4b2e471-7ad4-4672-9d28-37089d1f86ac/Untitled.png)

## 변수

- 변수는 **포스트잇**과 같이 가리키는 것
- 지정된 값을 바꾼다는 것 - **가리키는 값이 바뀌는 것**
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a37cce83-8d0d-4677-94ab-caebb90fb409/Untitled.png)
- **변수명**
  - 첫 문자는 **소문자**로, 그 외 $/\_ 사용
    (대문자로 시작하는 경우는 class)
  - 앞에 **$** 붙이는 경우 - document요소라는 것을 표현하기 위함
  - 한글이 안되긴 하지만 영어로 표현이 어려운 고유명사를 한글로 허락하는 곳도 있음
  - 예약어는 예를 드는 것도 불경하니 절대 쓰지 마세요.
- **변수의 특징**

  - 변수 - `var`, `let`
  - 상수 - `const` (파이, DOM요소)
  - var 키워드는 생략이 가능하다(!) 그러나 생략하면 안되고,
    모던자바스크립트에서는 var 키워드를 권하지 않는다.
    <aside>
    💡 제일 좋은 변수 선언은 `**const**`

        - 의도하지 않은 값의 변경을 방지할 수 있다.
        - 가독성을 높일 수 있다.
        </aside>

  - 지역변수 scope

    ```jsx
    if (true) {
      const x = 100;
      console.log(x); // -> 100
    }

    // -> Uncaught ReferenceError: x is not defined
    ```

  - 가리키는 값을 변경할 때를 고려해 적절히 **let**을 사용한다.
      <aside>
      💡 `const a = []` 처럼 배열을 `const`로 선언할 수 있는 이유?
      
      배열 내의 값이 아닌 **배열 자체**를 가리키기 때문에 가능한 것이다.
      변수를 가리키는 값의 의미로 바라보니 이해가 되는 군!
      
      </aside>

## 산술/논리/비교 연산

- **산술 연산** - `+` `-` `/` `*` `**` `%`
- **논리 연산**

  - 논리곱 논리합 - `&&` `||`
  - Not 연산자 - `!` `!!`
      <aside>
      💡 `!!` 를 쓰는 이유 → 참인지 판별하기 위함
      
      </aside>

  - 비트 연산자
    - (`&` `|`) **중요하지 않음**
    - 부정연산 (`~` `~~` `parseInt`)

- 비교 연산
  - `>` `<` `>=` `<=` `==` `===` `!=` `!==`
      <aside>
      💡 `===` **를 권장하는 이유!**
      
      1. 견고한 코딩
      2. 성능상의 이점
      </aside>

## 자료형

타입 확인하기 - `typeof 요소` (띄어쓰기 넣을 것)

### 원시타입

- `string` `number` `bigint` `boolean` `undefined` `symbol` `null`

### 객체타입

- `function` `object`(array & object)

### 형변환

- number 형변환
  - `⭐ parseInt('10')`
  - `⭐ parseFloat('10.1')`
  - `+'10'`
  - `Number(문자열)` - **권하지 않습니다.**
- string 형변환
  - `⭐ .toString()`
    - 주의! `10.toString()` 이면 `10.`까지를 소숫점으로 봅니다.
  - `⭐ '' + 10`
- boolean 형변환

```
console.log(Boolean(-1))
console.log(Boolean(0))
console.log(Boolean(1000))
console.log(!!1000)
```

## String

### String 자르기 메소드

- `.slice(시작인덱스, 종료인덱스)`
  - 시작인덱스부터 종료인덱스 - 1번째 까지 반환합니다.
- `.substring(시작인덱스, 종료인덱스)`
  - 시작인덱스부터 종료인덱스 - 1번째 까지 반환합니다.

<aside>
💡 `.slice`와 `.substring`의 차이

```jsx
let txt = 'abcdefghij';

console.log(txt.slice(1, 3)); // start, end(-1) // ->bc
console.log(txt.slice(3)); // start // -> defghij
console.log(txt.slice(3, 1)); // -> 안됩니다.

console.log(txt.substring(1, 3)); // ->bc
console.log(txt.substring(3)); // -> defghij
console.log(txt.substring(3, 1)); // 작동합니다. // -> **bc**
```

</aside>

- 공백 없애기
  - `.trim()`
  - `.replaceAll(' ', '')`
    ```
    let test = '                 hello world    '
    console.log('                 hello world')
    test.replaceAll(' ', '')
    test.trim()
    ```

### String 교체하기 메소드

- `.replace('기존 문자열', '바꿀 문자열')`
  ```jsx
  console.log(txt2.replace('CEO', 'COO'));
  console.log(txt2.replace(/CEO/g, 'COO'));
  ```
- `.replaceAll('기존 문자열', '바꿀 문자열')`
  ```jsx
  console.log(txt2.replaceAll('CEO', 'COO'));
  ```

### 대문자 ↔ 소문자

- `.toLowerCase()`
- `.toUpperCase()`

```
console.log(txt2.toLowerCase())
console.log(txt2.toUpperCase())
```

### String 추가하기

- `.includes(’문자열')`

```
console.log(txt2.includes('CEO'))
```

- `.padStart(추가한 후의 전체 길이, 추가할 요소(숫자도 가능))`
- `.padEnd(추가한 후의 전체 길이, 추가할 요소(숫자도 가능))`

```jsx
let str1 = '99';
console.log(str1.padStart(5, '0')); // -> 00099

let str2 = '99';
console.log(str1.padEnd(5, '-')); // -> 99---
```

### String 나누기

- `.split('나누는 기준')`

```
// 어디서나 정말 많이 사용되는 메서드 입니다.txt2.split(' ')

let text1 = 'aa bb cc dd'
let text2 = 'aa-bb-cc-dd'
let text3 = 'aa,bb,cc,dd'
let text4 = 'aa,bb-cc-dd' // 중급자 분들만 하세요.// ['aa', 'bb', 'cc', 'dd']

console.log(text1.split(' '))
console.log(text2.split('-'))
console.log(text3.split(','))
console.log(text4.split(/[,-]/g))
console.log(text4.replace(',', '-').split('-'))
```

### 메소드 채이닝

연결연결~

```
txt2.replace('CEO', 'CDO').includes('CDO').toString().toUpperCase()
```
