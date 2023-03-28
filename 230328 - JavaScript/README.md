# 🌳 오늘 하루 정리

오늘은 연속으로 2개의 자바스크립트 온라인 강의를 들었다.

이렇게 온라인강의를 집중해서 들어본 건 정말 오랜만이었다…

~~수업 스트리밍 돌리기가 일상이던 추억이 새록새록…~~

강의는 자바스크립트 맛보기의 느낌치고는 결코 쉽지않은(!) 난이도였다. 예전에 들었을 때의 기억이 전혀 안났지만? 그래도 보다 한결 수월했고 여유롭게 완강을 찍었다✌️

내일부터 진짜 자바스크립트 시작-기대된다!

# 오늘 공부한 내용 🌼

- 일단 만드는 자바스크립트
- 세렝게티 동물 테스트 만들기

# 새로 알게된 내용 💡

- 세미콜론의 의미 `;` : 하나의 명령어가 끝났음

## 랜덤으로 숫자 뽑기

### JavaScript의 랜덤 함수 `Math.random()`

- 0~1사이의 실수형 자료가 랜덤으로 출력된다.

### 실수를 정수로 변환하기 `parseInt()`

- 1~45 사이의 정수를 랜덤으로 출력하기
  ```jsx
  parseInt(Math.random() * 45 + 1);
  ```

### 반복문 & 조건문

- 6개를 출력하는 반복문 & 랜덤번호 중복을 방지하는 조건문
- `.indexOf(값)` - 값이 있으면 위치, 없으면 -1을 출력
  ```jsx
  var lotto = [];
  while (lotto.length < 6) {
    var num = parseInt(Math.random() * 45 + 1);
    if (lotto.indexOf(num) == -1) {
      lotto.push(num);
    }
  }
  document.write(lotto);
  ```

### 번호를 오름차순 정렬하기

- `배열이름.sort()` - 사전 순 정렬 [1, 11, 2, 22, 3, 5]
- `배열이름.sort((a, b) => a-b)` - 오름차순 정렬

### **완성**

```jsx
<script>
        var lotto = [];
        while (lotto.length < 6) {
            var num = parseInt(Math.random() * 45 + 1)
            if (lotto.indexOf(num) === -1) {
                lotto.push(num)
            };
        }
        for (var i = 0; i < lotto.length; i++) {
            document.write("<div class='ball'>" + lotto[i] + "</div>");
        }
    </script>
```

## 자기소개서 글자수 계산기

### DOM

- **Document Object Model**
- HTML 코드를 쉽게 접근할 수 있도록 만든 Model

### DOM에 접근하기

- html 태그 값 가져오기
- `document.getElementById('ID값').value;`

### JavaScript로 태그 추가하기

- `document.getElementById('ID값').innerHTML=`

### Key를 누를 때마다 이벤트 발생시키기

- `onkeydown="함수"`

```jsx
<body>
  <h1>자기소개</h1>
  <textarea onkeydown="counter()" id="jasoseol">저는 인성 문제가 없습니다.</textarea>
  <span id="count">(0/200)</span>
  <script>
    function counter() {
      var content = document.getElementById('jasoseol').value;
      document.getElementById('count').innerHTML = "(" + content.length + "/200)"
      }
    </script>
</body>
```

### 글자수 넘칠 때 자르기

- `.substring(시작위치, 끝나는위치);`

```
var content = document.getElementById('jasoseol').value;
            if (content.length > 200) {
                content = content.substring(0, 200);
                document.getElementById('jasoseol').value = content;
            }
```

## 스타크래프트 만들기

### JQuery

- `$('선택자').행위`

```jsx
console.log($('#content').val());
```

- `$('선택자').val()` - `document.getElementById('ID값').value;`
- `$('선택자').click(hello)`
  ```jsx
  <body>
  	<button id="click" onclick="hello();">클릭</button>
  	<script>
  			function hello() {
  			  console.log('hello');
  		  }

  </body>
  ```
  - (응용) 익명함수 사용
  ```jsx
  $('#click').click(function () {
    console.log('hello');
  });
  ```

### 드론에 click 이벤트 주기

- **.fadeIn**으로 공격효과 주기 - `.fadeIn( [duration ] [, easing ] [, complete ] )`
  - duration - 시간 (’slow’/400)
  - easing - 사라지는 모양 (swing과 linear)
  - complete - 지정한 요소가 나타난 다음 불러올 함수가 들어간다.
  ```jsx
  $('#drone').click(function () {
    $('#spit').fadeIn(); // fadeIn 기본값들이 들어가 있
  });
  ```
- **.animate**로 애니메이션효과 주기
  - `.animate( properties [, duration ] [, easing ] [, complete ] )`
  - 오른쪽으로 250만큼 이동
  ```jsx
  $('#spit').animate({ left: '+=250' });
  ```
- **.fadeOut**으로 공격효과 사라지게 하기
  - `.fadeOut( [duration ] [, easing ] [, complete ] )`

## 기념일 계산기

### 객체(Object)

```jsx
var person = {
  name: 'dayeon',
  sayHello: function () {
    console.log('hello');
  },
};
console.log(person.name);
person.sayHello();
```

### Date 객체

- `new Date()` - 현재 시간을 기준으로 date 객체 생성
- `new Date('2023-03-28')` - 특정 날짜를 기준으로 date객체 생성

```jsx
//1. Date 객체 생성
var now = new Date();
//2. 연도를 가져오는 메서드 .getFullYear()
console.log(now.getFullYear());
//3. 월 정보를 가져오는 메서드 .getMonth() {0: 1월, 1: 2월, ... 10: 11월, 11: 12월}
console.log(now.getMonth());
//4. 일 정보를 가져오는 메서드 .getDate()
console.log(now.getDate());
//5. 1970년 1월 1일 00:00:00을 기준으로 흐른 시간을 밀리초로 표시하는 메서드 .getTime()
console.log(now.getTime());
//6. 특정 일의 Date 객체 생성
var birthday = new Date('1998-12-26');
console.log(birthday);
//7. 특정 ms의 Date 객체 생성var ms = new Date(2000); // 몇초가 흘렀는지 - 2초
console.log(ms);
```

### 사귄날 계산하기

```jsx
만난 밀리초 = 오늘.getTime() - 사귄날.getTime()
만난 일 = 만난 밀리초를 일로 환산
```

### 남은 기념일 계산하기

```jsx
남은 밀리초 = 기념일.getTime()-오늘.gerTime()
만난 일 = 만난 밀리초를 일로 환산
					(남은 밀리초 / (1000*60*60*24)+1)

```

## MBTI 테스트

### 나타나게 하기/사라지게 하기

```jsx
$('선택자').hide();
$('선택자').show();
```

### 태그의 value값 바꿔주기

```jsx
$('#type').val(q[num]['type']);
```

### 태그의 속성 바꿔주기

- style 속성에 width값 주기

```jsx
$('.progress-bar').attr('style', 'width: calc(100/12*' + num + '%)');
```

### HTML 요소 값 바꿔주기

```jsx
$('#title').html(q[num]['title']);
```

## 검색엔진 최적화 SEO

Search Engine Optimization

1. 내부 요소 최적화(HTML, 컨텐츠, 메타태그 등)
2. 외부 요소 최적화(백링크 개수 등)

# 궁금한 내용 / 부족한 내용 🧐

- **.sort((a, b) => a-b)** 의 원리는?
  → `배열이름.sort(function (a, b) { return a - b });`
