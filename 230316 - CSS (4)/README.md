# 🌳 오늘 하루 정리

오늘은 새로운 강사님의 수업을 함께 들었다.

img 웹접근성을 위한 srcset속성과 picture태그, 그리고 perspective(원근법)으로 요소에 입체감을 주는 기법을 배웠는데, 수업전까지 실습 따라하기 허덕이던 어제보다 여유로운 시간이었다.

- 나보다 앞서 많은 사람들이 먼저 취업해서 버스를 놓친 것 같아도
  그만큼 퇴사하기 때문에 내 자리는 얼마든지 있습니다! 개발은 이직 시장이 활발하기 때문
- 연봉이 1000씩 오르는 맛에 이직을 한다고~카카오 들어가도 스타트업에서 꼬셔서 가는 경우도 많다.
- 그렇기에 타이밍이 중요한데, 중요한 것은 준비된 이력서…!!! 항상 언제든 날릴 수 있도록 가슴에 품고 있어야 한다

그동안 수업 집중을 못하다가 빡 집중하니 이렇게 재밌고 막힌 것이 빡 뚤렸다~~

헷갈렸거나 어려웠던 것들의 정답은 전에 배운 교안 안에 다 있었다는 사실…HTML/CSS 이번주 복습 정말 잘해야겠다~!

# 오늘 공부한 내용 🌼

- `<img>`태그 - srcset
- <picture>
- perspective (원근법)
- 미디어 쿼리 만들기 실습
- 영화 목록 

# 새로 알게된 내용 💡

## `<img>`

- **반응형 이미지를 위한 `srcset`**
  `srcset` 속성을 사용하면 여러 해상도에 대응하여 브라우저가 최상의 이미지를 로딩하는데 도움을 줄 수 있습니다. `srcset` 속성은 다양한 크기를 가지는 동일 이미지를 최소 2개 이상 사용할 때 사용하며, 브라우저에게 이미지의 선택권을 위임하는 속성입니다.
  - **x서술자**
    x서술자는 화소의 밀도(pixel density)를 나타냅니다. 디바이스의 화소 밀도에 따른 이미지를 로딩하도록 브라우저에 알려줍니다.
    ```html
    <img srcset="images/rabbit_300.png 2x, images/rabbit_500.png 3x" alt="귀여운 생명체" />
    ```
  - **w서술자**
    ```html
    <img
      width="200px"
      src="a.png"
      alt="test"
      srcset="img/logo_3.png 700w, img/logo_2.png 600w, img/logo_1.png 300w"
    />
    ```
      <aside>
      💡 w서술자와 x서술자는 동시에 사용할 수 없습니다. 또한 `src` 속성을 유지하는 것은 필수입니다. `srcset` 을 **사용할 수 없는 브라우저(Internet Explorer)를 대비**해 사용하는 이미지입니다.
      
      </aside>

  - **sizes 속성**
    `sizes` 속성은 뷰포트의 조건에 따라 이미지가 UI안에서 차지하게 될 사이즈를 브라우저에 알려줍니다. 조건에 따른 이미지의 크기를 설정함과 동시에 w서술자에 더해 브라우저에게 이미지를 선택할 수 있는 더 많은 힌트를 준다고 생각 할 수 있습니다.
    ```html
    <img
      src="a.png"
      alt="test"
      srcset="img/logo_3.png 700w, img/logo_2.png 600w, img/logo_1.png 300w"
      sizes="(min-width: 960px) 250px, /*960부터 250px로 적용*/
    			 (min-width: 620px) 150px, /*620~920까지 150px로 적용*/
    			 300px"
    />
    /*620 미만인 경우 300px로 적용*/
    ```
    브라우저에게 이미지 선택을 위임, 브라우저는 우리가 제공한 이미지의 원본 사이즈와 뷰포트에 따른 이미지의 사이즈 정보를 통합해 가장 적절한 이미지를 로딩하게 됩니다.
      <aside>
      💡 만약 `srcset`사이에 다른 이미지를 집어넣어도 같은 이미지만 보여준다.
      
      </aside>


## `<picture>`

~~익스플로러에서 동작하지 않는 새삥~~

<aside>
💡 picutre VS srcset

해상도에 따라 '다른 이미지(포멧 포함)' 중 하나를 보여주고 싶을 때에는 `picture`를,
‘같은 이미지’인데 해상도에 따라 더 높은 해상도 이미지를 보여주고 싶을 때에는 `srcset`을 사용합니다.

</aside>

```html
<picture>
  <source srcset="babies_large.jpeg" media="(min-width:960px)" />
  <source srcset="babies.jpeg" media="(min-width:620px)" />
  <img src="babies_small.jpeg" alt="귀여운 아기 팽귄들" />
</picture>
```

`<picture>` 와 `<source>` 요소 자체는 이미지를 표현하지 않습니다.

**`<picture>`**는 `<source>` 요소 안의 `srcset` 속성 값을 찾아 `<img>` 태그의 `src` 에 넣어 화면에 보여주게됩니다. 이러한 구조로 작동하기 때문에 `<img>` 요소가 없다면 이미지가 화면에 나타나지 않는다는 점에 주의하세요.

- **media 속성 :** `<picture>` 요소는 `media` 속성의 값을 통해 조건에 알맞는 이미지를 찾게 됩니다.
- type 속성
  ```html
  <picture>
    <source srcset="babies.webp" type="image/webp" />
    <source srcset="babies.avif" type="image/avif" />
    <img src="babies.jpeg" alt="귀여운 아기 팽귄들" />
  </picture>
  ```
  - 이미지의 포맷 타입을 브라우저에게 알려줍니다.
  - 위에서부터 차례대로 브라우저가 지원하는 포맷인지 탐색하며 만약 지원하지 않는 포맷이라고 판단되면 다음 `<source>` 요소로 넘어갑니다.
  - 크로스브라우징을 위해 img 삽입 시 `<picture>` 요소를 함께 사용 하는 것이 좋습니다.
    이러한 방식의 크로스브라우징 기법을 **‘점진적 향상기법’**이라고 합니다.
      <aside>
      ⭐ **점진적 향상기법(Progressive enhancement)**
      기본적으로 예전 기술 환경에서 동작할 수 있는 기능을 구현해두고, 최신 기술을 사용할 수 있는 환경에서는 최신 기술을 제공하여 더 나은 사용자 경험을 제공할 수 있는 방법입니다.
      
      </aside>
      
      <aside>
      ⭐ **이미지 포맷의 종류  (용량, 성능, 이미지최적화를 위해 알고 있어야 함)**
      **GIF**(Graphics Interchange Format) : 
      256색의 컬러만 표현 가능하기 때문에 선명하진 않지만 용량이 적게 듭니다. 투명은 표현 가능하지만 그 정도를 조절하는건 불가능하며, 때문에 그림자 표현도 불가능합니다. 애니메이션 처리가 가능합니다.
      
      **JPG/JPEG** (Joint Photographic Expert Group image): 
      매우 화소가 높고, 용량도 적지만 투명처리가 불가능합니다.
      
      **PNG** (Portable Network Graphics) : 
      왠만한 컬러는 모두 표현 가능하여 투명 영역을 처리 가능하지만 용량이 큽니다.
      
      **SVG** (Scalable Vector Graphics) : 
      SVG 형식의 벡터 이미지는 손실이나 품질 저하 없이 모든 크기에서 렌더링이 가능합니다.
      
      **WebP** (Web Picture Format) : 
      압축률이 좋다고 소문난 JPEG 이미지에 비해 무려 용량은 70% 수준으로 낮지만 더 뛰어난 색상을 지원하는 포맷입니다. 그럼에도 불구하고 PNG 처럼 투명도 표현 가능하며, GIF 처럼 애니메이션 표현도 가능한 만능 포맷입니다.
      
      **AVIF** (AV1 Image File Format) : WebP 처럼 뛰어난 색상표현, 애니메이션 지원, 투명도 표현 모두 가능하며 JPEG 이미지의 50% 수준인 용량을 자랑하는 차세대 이미지 포맷입니다. 아직 지원하지 않는 브라우저가 많음에 주의해야합니다.
      
      </aside>
      
      [이렇게 모바일 버전, pc 버전으로 로고를 다르게 적용할 수도 있다.](https://codepen.io/stronger-deer/pen/OJoVpVo)
      
      이렇게 모바일 버전, pc 버전으로 로고를 다르게 적용할 수도 있다.


## `perspective`

perspective 속성은 컨테이너로 하여금 자식들에게 원근감을 부여하는 효과가 있습니다.

```css
.cont-card {
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 800px;
}
```

translate3d와 함께 사용한다.

```css
.box {
  perspective: 500px;
  /* Chrome 개발자 도구 열어서 수치를 증가시켜보세요. */
  transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
```

<aside>
💡 **translate3d**
translate 속성의 3D 버전입니다. 한번에 x, y, z 축을 모두 설정하는 것이 가능하며 3D 환경을 랜더링 하는 성능이 기존의 translate 속성보다 뛰어납니다. 참고로 scale, rotate 속성역시 scale3d, rotate3d 가 존재합니다.

</aside>

```css
<head>
		<style>
        .원본 {
            perspective: 400px;
        }

        .회전패널 {
            background: aqua;
            transform: rotateY(45deg);
        }
    </style>
</head>
<body>
    <div class="원본">
        <div class="회전패널"></div>
        <div class="회전패널"></div>
        <div class="회전패널"></div>
        <div class="회전패널"></div>
        <div class="회전패널"></div>
        <div class="회전패널"></div>
    </div>
</body>
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ea54fe05-1667-4a8f-9d0b-20781d76e989/Untitled.png)

왜 같은 각도로 움직였는데 똑같은 박스로 나오지 않았을까요? 이는 **소실점(vanishing point)을 바라보고 틀어지는 각도가 다르기 때문**입니다. 이때 **소실점은 정 중앙입니다.**

**소실점**을 조정하고 싶다면 perspective-origin을 사용합니다. perspective-origin은 perspective 속성이 적용된 요소를 보는 사람의 위치를 나타내는 속성입니다. 초기 값은 `perspective-origin: 50% 50%;` 입니다.

```css
.원본:nth-child(1) {
  perspective: 400px;
  perspective-origin: 0px 0px;
}

.원본:nth-child(2) {
  perspective: 400px;
  perspective-origin: 100px 100px;
}

.원본:nth-child(3) {
  perspective: 400px;
  perspective-origin: 200px 200px;
}

.원본:nth-child(4) {
  perspective: 400px;
  perspective-origin: bottom right;
}
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bf1c7a6d-7273-4512-90dc-d10f988b0eda/Untitled.png)

## 미디어 쿼리 구현 실습

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5a5ed1ff-69a2-4af1-96c6-81c8b7acb746/Untitled.png)

- 접근성을 위해 H2를 만들고 a11y-hidden 주기

```css
body,
h1,
p {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit; /* a태그 특유의 보라 컬러 없앰 */
}
```

- grid
- flex

```css
.container {
  display: grid;
  grid-template-areas:
    'a b'
    'a c';
}

.grid-a {
  grid-area: a;
}

.grid-b {
  grid-area: b;
}

.grid-c {
  grid-area: c;
}

@media (max-width: 768px) {
  .container {
    grid-template-areas:
      'a a'
      'b c';
  }
}
```

```css
.container {
  display: flex;
}
.container.section-text {
  flex-grow: 1;
}
.container2 {
  display: flex;
  flex-direction: column;
```

# 오늘의 문제 ⚠️

- 요소를 뒤집어 회전시킬 때 **앞 뒤면이 따로 존재할까?**
  → 아니다! 기본적으로 앞 뒤면이 같이 존재하려면 두께가 있어야 하는데, 기본적으로는 존재하지 않는다. 앞/뒤 역할을 하는 다른 요소를 붙여서 앞면과 뒷면이 있는 것처럼 만들어야 한다.

# 궁금한 내용 / 부족한 내용 🧐

- picutre VS srcset

[반응형 이미지 - Web 개발 학습하기 | MDN](https://developer.mozilla.org/ko/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- perspective 쉽게 살펴보기

[CSS Perspective Explained with Example 3D Transform in CSS](https://imjignesh.com/how-css-perspective-works/)

- background 복습하기
  ```css
  .grid-b {
    background: url(./img/background1.jpg) no-repeat 0 0 / cover;
  }
  ```
  순서대로 url / 반복 안함 / 포지션 위치 0, 0 / cover - 이미지를 다 덮겠다(↔contain)
  (그리고 `/` 가 들어가는 것은 포지션이랑 다른 속성이 헷갈리지 않게 이어주기 위함)
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c07bd803-712f-4d4c-958e-00de639432a3/Untitled.png)
