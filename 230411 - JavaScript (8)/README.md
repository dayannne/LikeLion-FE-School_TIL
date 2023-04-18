# 오늘 공부한 내용 🌼

- 이벤트

---

# 새로 알게된 내용 💡

---

- `parentElement.insertBefore(위치 시키고 싶은 대상, 위치)` - ‘위치’의 이전으로 이동

## JavaScript 문자열을 사용해 element, text 노드를 생성/추가하기

DOM api를 이용하면 요소 안의 값에 접근하여 값을 가져오거나, 변경할 수 있다.

api - 어플리케이션, 이거 쓰라고 정보를 제공해 주는 것 ex) <canvas>

브라우저가 제공하는 기능(윈도우X)

```jsx
<p></p>
<input type="text">
<button>Write Something!</button>
```

```jsx
const myInput = document.querySelector('input');
// input 요소에 'input' 이벤트를 연결하면 실시간으로 값이 반영되게 만들 수도 있습니다.
myInput.addEventListener('input', () => {
  myP.textContent = myInput.value;
});

myP.innerHTML = "<strong>I'm Strong!!</strong>";
```

- `innerHTML` 은 요소(element) 내에 포함된 HTML 마크업을 가져오거나 설정합니다.

  - 스타일 속성, 태그를 인식하여 마크업한다.
    <aside>
    💡 웹 페이지에 텍스트를 삽입하는 `innerHTML` 의 특징으로 사이트의 공격 경로가 되어 잠재적 보안 위험이 발생할 수 있다.
    1. `innerHTML = “<script><script>”` 스크립트 태그가 들어갈 때

    → 이를 위해 HTML5는 `innerHTML`이 `<script>`태그를 실행하지 않도록 지정되어 있다. 2. `<script>` 태그를 사용하지 않고도 자바스크립트를 실행하는 방법이 있다.

    ```jsx
    const name = "<img src='x' onerror='alert(1)'>";
    el.innerHTML = name; // shows the alert
    ```

    ⇒ 결론: 일반 텍스트를 삽입할 때에는 `innerText` , `textContent` 를 사용하자

    </aside>

- `innerText` 속성은 요소의 **렌더링된** 텍스트 콘텐츠를 나타냅니다.
  - **렌더링된**에 주목! `innerText`는 텍스트 내에 문법적으로 처리가 가능한 텍스트가 있으면 처리가 끝난 결과물을 텍스트로 전달합니다.
- `textContent` 속성은 노드의 텍스트 콘텐츠를 표현합니다. 컨텐츠를 단순히 텍스트로만 다룹니다.

```jsx
<h3>원본 요소:</h3>
<p id="source">
  <style>#source { color: red; }</style>
아래에서<br>이 글을<br>어떻게 인식하는지 살펴보세요.
  <span style="display:none">숨겨진 글</span>
</p>
<h3>textContent 결과:</h3>
<textarea id="textContentOutput" rows="6" cols="30" readonly>...</textarea>
<h3>innerText 결과:</h3>
<textarea id="innerTextOutput" rows="6" cols="30" readonly>...</textarea>
```

```jsx
const source = document.getElementById('source');
const textContentOutput = document.getElementById('textContentOutput');
const innerTextOutput = document.getElementById('innerTextOutput');

textContentOutput.innerHTML = source.textContent;
innerTextOutput.innerHTML = source.innerText;
```

![](https://velog.velcdn.com/images/day_1226/post/fd8b030f-1cc2-4876-ac95-77a791c93377/image.png)

## 속성 제어하기

### 요소의 스타일을 제어하는 `style` 객체

```jsx
const target = document.querySelector('p');
const txtColor = target.style.color; // 현재 스타일 정보를 가져옵니다.
target.style.color = 'red'; // 현재 스타일 정보를 변경합니다.
target.style.fontWeight = 'bold'; // 현재 스타일 정보에 font-weight 속성이 없다면 추가합니다.
target.style.color = null; // 현재 스타일 정보를 제거(초기화)합니다.
```

<aside>
💡 **style 객체의 속성 식별자 규칙**

- 속성 이름이 한 글자라면 그대로 사용합니다. (`height`, `color` …)
- 속성 이름이 대쉬(-) 를 통해 여러 단어로 나눠져있는 경우는 카멜케이스로 사용합니다. (`background-image` ⇒  `backgroundImage`)
- `float` 속성의 경우 이미 자바스크립트의 예약어로 존재하기 때문에 `cssFloat`으로 사용됩니다.

style 객체를 통해 설정된 스타일은 **CSS inline 스타일과 동일한 가중치**를 가집니다. 때문에 CSS를 통해 수정의 여지가 있는 스타일에는 많이 사용되지 않는 편입니다. 이럴경우 `classList`를 이용한 클래스 제어가 더 효과적입니다.

</aside>

### 속성에 접근하고 수정할 수 있는 Attribute 메소드

1. `getAttribute` 메소드는 요소의 특정 속성 값(이름)에 접근한다.

   ex) `const idAttr = target.getAttribute('id')` → ID의 이름을 가져온다.

2. `setAttribute` 메소드는 요소의 특정 속성 값에 접근하여 값을 수정=

   ```jsx
   myimg.setAttribute('src', 'https://img.wendybook.com/image_detail/img159/159599_01.jpg');
   ```

### 요소에 데이터를 저장하도록 도와주는 data 속성

`data-***` 속성을 사용하면 HTML 요소에 추가적인 정보를 저장할 수 있다.

```jsx
<img
  class="terran battle-cruiser"
  src="battle-cruiser.png"
  data-ship-id="324"
  data-weapons="laser"
  data-health="400"
  data-mana="250"
  data-skill="yamato-cannon"
/>
```

- 접근할 때는 `target.dataset` 으로 입력한다.
- 개별로 접근 시에는 `data-health` → `target.dataset.health`

```jsx
<script>console.log(target.dataset); console.log(target.dataset.shipId);</script>
```

![](https://velog.velcdn.com/images/day_1226/post/0cc001c3-f0e4-4195-9dea-e8aaf289626d/image.png)

## **더 인접한곳(**Adjacent**)으로 정밀하게 배치하기**

### `insertAdjacentHTML`

- 요소 노드를 대상의 인접한 주변에 배치합니다. (인설트어제이슨HTML)
- `beforebegin` - 열린태그 앞(벗어남)
- `afterbegin` - 열린태그 뒤(안에 위치)
- `beforeend` - 닫힌태그 앞(안에 위치)
- `afterend` - 닫힌태그 뒤(벗어남)

<aside>
💡 `begin` 은 여는 태그를, `end` 는 닫는 태그를 의미

</aside>

## **더 인접한곳(**Adjacent**)으로 정밀하게 배치하기**

```jsx
<!-- 주석입니다 주석. -->
<article class="cont">
    <h1>안녕하세요 저는 이런 사람입니다.</h1>
    <p>지금부터 자기소개 올리겠습니다</p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt voluptates laudantium fugit, omnis
    dolore itaque esse exercitationem quam culpa praesentium, quisquam repudiandae aut. Molestias qui quas ea iure
    officiis.
    <strong>감사합니다!</strong>
</article>
```

```jsx
const cont = document.querySelector('.cont');
console.log(cont.firstElementChild); // 첫번째 자식을 찾습니다.
console.log(cont.lastElementChild); // 마지막 자식을 찾습니다.
console.log(cont.nextElementSibling); // 다음 형제요소를 찾습니다.
console.log(cont.previousSibling); // 이전 형제노드를 찾습니다.
console.log(cont.children); // 모든 직계자식을 찾습니다.
console.log(cont.parentElement); // 부모 요소를 찾습니다.
// 자기 자신부터 시작해 부모로 타고 올라가며 가장 가까운 cont 클래스 요소를 찾습니다. 단, 형제요소는 찾지 않습니다.
console.log(cont.querySelector('strong').closest('.cont').innerHTML);
```

![](https://velog.velcdn.com/images/day_1226/post/41e437c6-d215-4549-9be3-5ffe691f5d17/image.png)

`Element`가 들어가면 요소를 찾고 `Element`가 빠지면 노드리스트를 찾는다.

## 이벤트 객체

이벤트에서 호출되는 **핸들러(이벤트리스너, 콜백함수)**에는 이벤트와 관련된 모든 정보를 가지고 있는 매개변수가 전송됩니다. 이것이 바로 이벤트 객체입니다!

```jsx
<article class="parent">
  <ol>
    <li>
      <button class="btn-first" type="button">
        버튼1
      </button>
    </li>
    <li>
      <button type="button">버튼2</button>
    </li>
    <li>
      <button type="button">버튼3</button>
    </li>
  </ol>
</article>
```

```jsx
const btnFirst = document.querySelector('.btn-first');
btnFirst.addEventListener('click', (**event**) => {
    console.log(**event**);
});
```

![](https://velog.velcdn.com/images/day_1226/post/8e5699b0-2e12-4fca-b70a-3f6e79d9a04e/image.png)

## 이벤트 흐름

브라우저 화면에서 이벤트가 발생하면 브라우저는 가장 먼저 이벤트 대상을 찾기 시작합니다.

![](https://velog.velcdn.com/images/day_1226/post/46d61d49-d487-426d-8ef1-ccf9591bfb1c/image.png)

브라우저가 이벤트 대상을 찾아갈 때는 가장 상위의 window 객체부터 document, body 순으로 DOM 트리를 따라 내려갑니다. 이를 **캡처링 단계**라고 합니다.

이때 이벤트 대상을 찾아가는 과정에서 브라우저는 중간에 만나는 모든 캡처링 이벤트 리스너를 실행시킵니다. 그리고 이벤트 대상을 찾고 캡처링이 끝나면 이제 다시 DOM 트리를 따라 올라가며 만나는 모든 버블링 이벤트 리스너를 실행합니다. 이를 이벤트 **버블링 단계**라고 합니다.

그리고 이러한 과정에서 이벤트 리스너가 차례로 실행되는것을 **이벤트 전파**(event propagation)라고 합니다.

![](https://velog.velcdn.com/images/day_1226/post/846b6b58-60cf-4768-8986-e62376604487/image.png)

## 이벤트 위임

### 이벤트 `target`, `currentTarget`

부모부터 자식까지 일련의 요소를 모두 타고가며 진행되는 이러한 이벤트의 특징 덕분에 이벤트 객체에는 `target`, `currentTarget` 이라는 속성이 존재한다.

- **`target`** 속성에는 이벤트가 발생한 진원지의 정보가 담겨 있다.(마지막 자식이 아님!) `target` 속성을 통해 이벤트 리스너가 없는 요소의 이벤트가 발생했을 때도 해당 요소에 접근 할 수 있다.
- **`currentTarget**` 속성에는 이벤트 리스너가 연결된 요소가 참조되어 있다.

### 이벤트 위임

차례로 대상을 찾고 실행하는 이벤트 전파에 따라, 이벤트 리스너가 없는 요소의 이벤트가 발생했을 때도 해당 요소에 접근 할 수 있다.

⇒ 이벤트 리스너가 없어도 마치 리스너가 있는 것 처럼 사용 할 수 있다.

- 부모에게만 이벤트 리스너를 달았는데 자식에게 적용된다?!
  자식인 버튼요소를 클릭했을 때 ‘버튼4’로 이름이 바뀌도록 한다.

![](https://velog.velcdn.com/images/day_1226/post/89cd9c29-0a4f-4d00-a8a6-a33ca30ec315/image.png)

![](https://velog.velcdn.com/images/day_1226/post/bc1597c6-65f9-4494-ac8c-63aa40ab2a6a/image.png)

```jsx
<body>
    <article class="parent">
        <ol>
            <li><button class="btn-first" type="button">버튼1</button></li>
            <li><button type="button">버튼2</button></li>
            <li><button type="button">버튼3</button></li>
        </ol>
    </article>

    <script>
        const parent = document.querySelector('.parent');
        parent.addEventListener('click', function (event) {
            console.log(event.target);
            if (event.target.nodeName === "BUTTON") {
                event.target.innerText = "버튼4";
            }
        })
    </script>
</body>
```

- JavaScript에서 input의 valid한 값 찾기
  target.validity.valid
