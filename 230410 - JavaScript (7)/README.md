# 🌳 오늘 하루 정리

오늘은 자바스크립트 희망편??👼

DOM이 참 재밌게 느껴지는군

DOM을 배우며 느끼는 것이, 다른 프로그래밍 언어들과 달리 JavaScript는 HTML을 연결해 가져와 언어 안에서 뚱땅뚱땅 만들어내는 부분이 흥미롭다.

단순한 콘솔에서의 코드출력만이 아닌 하나의 페이지로 결과물을 볼 수 있다는 점도!

null이 Object라는 이상한 모순들만 빼고는…자바스크립트와 프론트엔드를 선택하길 참 잘했다는 생각이 든다.

오늘 저녁 조원분께 알고리즘 설명? 코드풀이를 해보았다. 내 코드 풀이에 대해 질문해 주셔서 준비 없이 알려드렸는데 뿌듯했다- 횡설수설이 아니었다는 것에 만족했고, 스스로도 설명하면서 다시 한번 이해하게 되고 매우 좋았다. 회고 끝!

# 오늘 공부한 내용 🌼

---

- 스프린트 회고
  - JD에서 확인한 중요한 키워드 중 우리가 알고 있는, 배운 1가지 키워드에 대해서 “잘”하기 위한 시도와 경험을 정리해보기
  - HMTL/CSS
    - 가독성있는 마크업과 구조, 클래스 네이밍 신경쓰며 작성합니다. (div 남발 금지)
  - Git, GitHub
    - GUI보다 CLI에 익숙해지기 위해 터미널을 통해 커밋합니다.
    - 커밋 메세지를 신경쓰며 작성합니다.
  - 알고리즘
    - 코드 작성 전 과정을 글씨로 일단 적어보고 구체화하는 연습을 합니다.
- JavaScript - DOM

# 새로 알게된 내용 💡

---

## DOM (Document Object Model)

### DOM 이란?

HTML 문서의 내용을 트리형태로 구조화하여 웹페이지와 프로그래밍 언어를 연결시켜주는 역할

이때 각각의 요소와 속성, 콘텐츠를 표현하는 단위를 **'노드(node)'**라고 한다.

## DOM 트리에 접근하기

```jsx
// 해당하는 Id를 가진 요소에 접근하기
document.getElementById();
// 해당하는 모든 요소에 접근하기
document.getElementsByTagName();
// 해당하는 클래스를 가진 모든 요소에 접근하기
document.getElementsByClassName();
// css 선택자로 단일 요소에 접근하기
document.querySelector('selector');
// css 선택자로 여러 요소에 접근하기
document.querySelectorAll('selector');
```

## DOM 제어 명령어

### 이벤트 삽입 `addEventListener`

- `target.addEventListener( type, listener )`
- 이벤트의 타입에는 click, mouseover, mouseout, wheel 등 다양한 이벤트를 감지
- listener 함수의 인수에는 이벤트에 대한 정보가 담겨있다.

```jsx
const myBtn = document.querySelector('button');

myBtn.addEventListener('click', function () {
  console.log('hello world');
});
```

### 클래스 제어 `classList`

- `remove` - 클래스를 제거
- `add` - 클래스를 추가
- `toggle`- 클래스를 토글, 없으면 넣어주고 있으면 제거

### **요소 제어**

- 요소를 새롭게 생성하고, 위치하고, 제거할 수 있다.
- **요소 제어**
  - `document.createElement(target)` - target 요소를 생성
  - `document.createTextNode(target)` - target 텍스트를 생성
  - `element.appendChild(target)` - target 요소를 element의 자식으로 위치
  - `element.removeChild(target)` - element의 target 자식 요소를 제거

# 오늘의 문제 ⚠️

---

- 버튼을 누르면 캔버스의 색깔이 바뀌는 코드를 만들어보자!

![](https://velog.velcdn.com/images/day_1226/post/ec053b22-a26c-4ed9-9407-2c7fb77e5ec4/image.png)

```jsx
<body>
    <div class="canvas"></div>
    <ul class="btn_list">
        <li><button type="button" class="btn-red">빨강</button></li>
        <li><button type="button" class="btn-yellow">노랑</button></li>
        <li><button type="button" class="btn-green">초록</button></li>
    </ul>
</body
```

**1) toggle 사용(X)**

**2) `remove`, `add`사용(O)**

```jsx
const box = document.querySelector('.canvas');
const colorBtn = document.querySelectorAll('button');
const redBtn = document.querySelector('.btn-red');
const yellowBtn = document.querySelector('.btn-yellow');
const greenBtn = document.querySelector('.btn-green');
redBtn.addEventListener('click', function () {
  box.classList.toggle('red');
});
yellowBtn.addEventListener('click', function () {
  box.classList.toggle('red');
});
greenBtn.addEventListener('click', function () {
  box.classList.toggle('red');
});
```

차례로 누를 때엔 잘 작동하나 기존의 배경색 class가 지워지지 않고 덮여쓰여진 상태여서 초록 → 빨강, 초록 → 노랑 으로 변경되지 않는 문제가 있다.

```jsx
const box = document.querySelector('.canvas');
const colorBtn = document.querySelectorAll('button');
const redBtn = document.querySelector('.btn-red');
const yellowBtn = document.querySelector('.btn-yellow');
const greenBtn = document.querySelector('.btn-green');
redBtn.addEventListener('click', function () {
  box.classList.remove('yellow');
  box.classList.remove('green');
  box.classList.add('red');
});
yellowBtn.addEventListener('click', function () {
  box.classList.remove('red');
  box.classList.remove('green');
  box.classList.add('yellow');
});
greenBtn.addEventListener('click', function () {
  box.classList.remove('red');
  box.classList.remove('yellow');
  box.classList.add('green');
});
```

정상적으로 작동하지만 코드가 반복되어 비효율적이다.

**3) `foreach()`, `remove`, `add` 사용(O)**

4**) `slice()` `foreach()`, `remove`, `add` 사용(O)**

```jsx
const canvas = document.querySelector('.canvas');
const btns = document.querySelectorAll("button[class^='btn']");

btns.forEach((item) => {
  item.addEventListener('click', () => {
    canvas.classList.remove('yellow', 'red', 'green');
    if (item.classList.contains('btn-red')) {
      canvas.classList.add('red');
    } else if (item.classList.contains('btn-yellow')) {
      canvas.classList.add('yellow');
    } else {
      canvas.classList.add('green');
    }
  });
});
```

```jsx
const box = document.querySelector('.canvas');
const colorBtn = document.querySelectorAll('button');

colorBtn.forEach((btn) => {
  btn.addEventListener('click', function () {
    canvas.classList.remove('yellow', 'green', 'red');
    canvas.classList.add(btn.className.slice(4));
  });
});
```

제일 간단한 버전!

# 궁금한 내용 / 부족한 내용 🧐

---

- **요소 제어**
  - `document.createElement(target)` - target 요소를 생성
  - `document.createTextNode(target)` - target 텍스트를 생성
  - `element.appendChild(target)` - target 요소를 element의 자식으로 위치
  - `element.removeChild(target)` - element의 target 자식 요소를 제거
