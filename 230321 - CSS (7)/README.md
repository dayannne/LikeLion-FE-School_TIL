# 🌳 오늘 하루 정리

회고조로 오랜만에 모여 이야기 나누는 시간을 가졌다.

조장님께서 엄청 배려해 이끌려 해주시는 부분이 무척 감사하고 좋았다…

지난 주 열렸던 CSS 캐릭터 만들기 경진대회에서 **최우수상**을 받았다…!!!!!!!

![2__.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7c746eee-6e1d-426f-be0d-b044bd0da5e4/2__.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6ac608aa-be5f-4945-957f-9d954d035ce0/Untitled.png)

내 큐트 뽀짝 **쿼카** 너무 기특해 우째….진짜 너무 기뻤다👼👼👼👼👼👼

그리고 오늘로 혜진 강사님과의 수업 끝….멋쟁이사자처럼에 들어온 것으로도 하나의 허들을 이미 넘었고, HTML/CSS 배울 수 있는 것은 다 배웠고 ‘예전에 했던 것 같은데?’ 하고 구글링 하는 정도로도 성공한 것이라고 너무 힘 들이지 말고 조급해 하지 않길 바란다는 격려의 말씀을 해 주셨다.

길게 고민 고민 해서라도 보이는 화면을 완벽하진 않아도 거의 똑같이 구현해 낼 수 있게 된 것 자체가 장족의 발전이라고 생각…멋사 아니면 HTML/CSS에 이토록 진심이 되진 못했을 것이다. 정말 감사할따름

총체적으로 멋사를 향한 애정이 뿜뿜 살아나는 하루였다. 최고!

# 오늘 공부한 내용 🌼

- 강사님과 함께 밴딩머신 만들기
- 커스텀 폼 만들기

# 새로 알게된 내용 💡

- 반응형을 만들 때 아예 기본 속성을 미디어 쿼리 안에 넣어도 된다.

```css
/* pc */
@media (min-width: 748px) {
  body {
    background: #eae8fe;
  }

  main {
    width: 748px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px auto;
    grid-template-areas:
      'section1 section2'
      'section1 section3';
    gap: 20px 28px;
  }
```

```css
 .section1 {
    grid-area: section1;
  }

  .section2 {
    grid-area: section2;
  }

  .section3 {
    grid-area: section3;
  }
  h1 {
    margin-bottom: 68px;
  }
}
```

- 클릭했을 때 스타일 주는 가상클래스 `:active`

```css
.btn-cola:active {
  box-shadow: 0 0 0 3px #6327fe;
}
```

- input에 집어넣는 min, max로 금액과 단위 설정하기
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/243b18e3-042d-41f9-8752-f03ef7b5a1e4/Untitled.png)
  1000부터 천 단위로 입력할 수 있다.
- 박스 안 요소 양쪽 끝에 배치하기 `justify-content: space-between;`

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e8a081b5-de07-4347-9972-c3cb03c9584f/Untitled.png)

- input이 체크되었을 때 label도 함께 스타일을 주는 방법 - `인접 형제 선택자`

```css
.custom-input:checked + label {
  font-weight: bold;
  color: royalblue;
}
```
