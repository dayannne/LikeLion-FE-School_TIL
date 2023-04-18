# 오늘 공부한 내용 🌼

---

- Date
- 이벤트 실습 - 설렉트 박스 만들기
- preventDefault()
- stopPropagation()

# 새로 알게된 내용 💡

---

## Date

### 캘린더 만들기

- 무슨 요일에 시작하는지 알아내기
- 해당 월에 날이 며칠이나 있는지 알아내기

```jsx
function calendar(newYear, newMonth) {
  // 1. 무슨 요일에 시작하는지 알아야 한다.
  const time = new Date(newYear, newMonth - 1, 1); // 년 월 1일의 정보를 원해
  // -1을 해주는 이유 원래 인덱스 위치 기준으로 계산하기 위해
  // => Sat Apr 01 2023 (요일을 제공하게 된다!)

  // 2. 해당 월에 날이 며칠이나 있는지!
  //const timeLength = 32 - new Date(newYear, newMonth - 1, 32).getDate()
  const timeLength = new Date(newYear, newMonth, 0).getDate();
} // 0 => 4월의 마지막 날을 불러온다.
```

- 날짜가 들어가지 않은 빈공간 채우기 및 초기화

```jsx
for (let i = 0; i < days.length; i++) {
  days[i].innerHTML = '&nbsp';
}
```

- 시작요일 + 며칠이나 있는지를 기준으로 채워넣는다
  - 4월의 시작요일이 토요일(=6)이고 총 30일이므로 6부터 36 이전까지 for문을 돌린다.
  ```html
  for (let i = day; i < day + timeLength; i++) { // 6일부터 36일 이전까지 days[i].textContent =
  date++; }
  ```
- 버튼 클릭 시 다음달/이전달로 넘어가는 기능

콜백함수 안에 캘린더 함수를 넣어도 괜찮은 걸까?

```jsx
const btns = document.querySelectorAll('button');
btns.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('prev')) {
      calendar(year, --month); // 연도는 자바스크립트가 자동으로 변환
    } else {
      calendar(year, ++month);
    }
  });
});
```

캘린더 함수가 실행되기 전 클릭이벤트가 실행되지 않았기에 괜찮습니다.

자바스크립트 실행 전 자바스크립트 엔진은 함수 안에 무엇이 있는지 신경쓰지 않습니다. 실행 될 때 비로소 신경을 씁니다. 그러므로 콜백함수 안에 함수를 넣어 놓아도 괜찮습니다.

## event

### 설렉트 박스 만들기

```jsx
let selectBtn = document.querySelector('.btn-select');
selectBtn.addEventListener('click', function () {
  selectBtn.classList.add('on');
});
let languageBtns = document.querySelectorAll('.list-member li');
languageBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    selectBtn.textContent = btn.textContent;
    selectBtn.classList.remove('on');
  });
});
```

### preventDefault()

브라우저의 기본 이벤트 동작을 취소합니다.

라우저의 기본 동작을 중지하고 자바스크립트를 통해 기능을 처리하고자 할때 사용

- **preventDefault** **실습**
  이벤트 타입 contextmenu를 이용해 브라우저 오른쪽 버튼 이벤트 막고 '해당 페이지에서는 오른쪽 클릭을 제한합니다.’ 경고 띄우기
  ```jsx
  window.addEventListener('contextmenu', () => {
    alert('해당 페이지에서는 오른쪽 클릭을 제한합니다.');
    event.preventDefault();
  });
  ```

### stopPropagation()

preventDefault를 통해 브라우저의 기본 이벤트 동작을 취소해봤지만 이때 우리가 앞에서 배웠던 이벤트 흐름, 즉 이벤트 전파(이벤트 프로파게이션)를 막지는 못한다.

이벤트 전파를 막고 싶다면 `event.stopPropagation()` 코드를 추가해 사용

```jsx
<form action="">
	<button type="submit" class="submit">제출</button>
</form>

<script>
	const submit = document.querySelector('.submit');
	submit.addEventListener('click', (event) => {
	    console.log('clicked');
	    event.preventDefault();
			// event.stopPropagation();
	});

	document.body.addEventListener('click', () => {
	    console.log('event still alive!');
	});
</script>
```

- **stopPropagation() 실습**

```html
<h1>나의 todo list</h1>
<p>1. 오늘 저녁에는 부대찌개를 끓여 먹겠다.<button type="button">삭제</button></p>
<p>2. 후식으로 슈팅스타를 먹겠다.<button type="button">삭제</button></p>
<p>3. 자기 전에 반드시 내일 아침 메뉴를 생각해두겠다.<button type="button">삭제</button></p>
```

위와 같은 HTML코드 구조가 있을 때

1. P 태그를 클릭하면 p 태그의 컨텐츠를 출력하는 alert 창을 띄워주고
2. 삭제 버튼을 클릭하면 삭제할 것인지를 물어보는 confirm 창을 띄워주고, 확인을 누르면 P태그를 삭제합니다.

```jsx
const deleteBtn = document.querySelectorAll('button');
const contents = document.querySelectorAll('p');

contents.forEach((text) => {
  text.addEventListener('click', () => {
    alert(text.childNodes[0].nodeValue.trim());
  });
});
deleteBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (confirm('삭제하시겠습니까?')) {
      btn.parentNode.remove();
    }

    event.stopPropagation();
  });
});
```
