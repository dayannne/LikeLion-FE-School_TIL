# 오늘 공부한 내용 🌼

---

- set
- this

# 새로 알게된 내용 💡

---

### Set

Set은 모든 타입의 값을 저장하는 객체자료형의 한 종류로 객체 안의 값은 중복을 허용하지 않는다는 특징이 있다.

```
let s = new Set('aabbbcccddd')
s
```

image.png

<aside>
💡

![](https://velog.velcdn.com/images/day_1226/post/25bb0c88-fbb3-44b8-adc9-8b4aae3276c0/image.png)

![](https://velog.velcdn.com/images/day_1226/post/a6e1a36a-e99b-4c9a-a135-cf55dce4a915/image.png)

</aside>

- JavaScript에서는 교집합을 구하는 메소드가 따로 없어 직접 만들어 줘야 한다.

### 교집합

- `filter()` 메소드 사용

```jsx
let a = new Set('abc');
let b = new Set('cde');
// b 안에 a배열의 요소를 갖고 있는가?
let cro = [...a].filter((e) => b.has(e));
```

### 합집합

- 전개구문
  ```jsx
  let union = new Set([...a, ...b]);
  ```
- concat()
  문자열을 이어붙여서 새로운 문자열을 만들어 반환하는 JavaScript의 내장 함수
  ```jsx
  let union2 = new Set([...a].concat(...b));
  ```

### 차집합

```jsx
let dif = [...a].filter((e) => !b.has(e));
```

## this

this는 아래 두 경우에서 객체를 가리키는 자기 참조 변수이다.

1. 자신을 호출한 객체
2. 자신이 생성할 객체

```jsx
function a() {
  console.log(this);
}
a();
```

- 다음을 살펴보자

      ```jsx
      function sayMyName() {
        console.log(this);
      }

      var c = {
        hello: 'world',
        say: sayMyName,
      };

      var b = {
        c: c, // var b = {c}
      };
      var a = {
        b: b, // var a = {c}
      };
      ```


      - say가 가리키는 것은 sayName이 아니라 sayName이 가리키는 값


      - button1의 에는 c를 담고 있다고 하자. 이 button1은 myobj를 가리키는 게 아니라, 함수를 실행하는 a라는 주소를 직접 가리킨다.

  button1은 myobj.**func1**을 직접 가리킨다.

[https://youtu.be/PAr92molMHU](https://youtu.be/PAr92molMHU)

- 객체를 타고 올라가는 경우가 아닌 예시
  ```
  function a() {
    function b() {
      console.log(this);
      function c() {
        console.log(this);
      }
      c();
    }
    b();
  }
  a();
  ```
  a(), b(), c() 모두 window에 해당하여, window가 출력된다.

## JSON

프론트엔드와 백엔드가 데이터를 주고받는 방식 중 하나.

( 다른 하나는 태그 형식의 xml이 있다.)

### **JSON 의 기본적인 형태**

- 홑따옴표를 허락하지 않는다.

```jsx
{
  "squadName": "슈퍼히어로",
  "members": [
    {
      "name": "아이언맨",
      "age": 29,
      "본명": "토니 스타크"
    },
    {
      "name": "헐크",
      "age": 39,
      "본명": "부르스 배너"
    }
  ]
}
```
