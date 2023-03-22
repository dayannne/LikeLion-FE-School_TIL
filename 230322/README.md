# 🌳 오늘 하루 정리

오늘 정말 은근 한 게 많은 하루다. CSS 수업 내 실습, 코테스터디, CSS 야간특강…JS 공부 못했어도 나름의 핑계가 있다(!)

수업 시간 실무적인 CSS 기법을 배웠다.

‘텍스트 숨김처리’에 대해 다음, 네이버는 어떻게 처리하는지 등 다양한 방법에 대해 배웠고, ‘CSS sprite 기법’이라고 스티커모음처럼 이미지들이 모여있는 하나의 이미지요소를 조각조각 잘라 쓰는 방법을 배웠다.

뭔가 HTML/CSS는 하면 할수록 잔머리 굴려서 하는 방식이 사실효율적인 방식인 경우가 많은 것 같다. 가장 코드를 덜쓰고 용량을 덜 차지하고 덜 번거롭게 만드는 것이 최고! 왜 개발자는 귀차니스트여야 한다는 건지 점점 와닿는다. 이런 부분에서 아주 나랑 잘맞는듯.🤗

그리고 실습을 한 후 코드 리뷰를 해보면서 다른 사람들은 어떻게 만들고 있는지 확인해 볼 수 있어서 신기한 시간이었다. 똑같은 것을 만드는데 한명한명 코드가 다 다른 것도 신기하고 배워갈 부분이 많았다. CSS 보다도 HTML 방법론에 대해 배울 점이 많았다. 접근성을 높이고 의미있는, 가치있는 태그를 작성하는 것…HTML 이 친구 알고보면 절대 만만히 봐서는 안될 친구다.ㅋ

CSS 특강에서는 코드리뷰와 함께 우리가 쩔쩔매었던 flex 이미지 배치나, margin요소, list style 등에 대해 종찬쌤께서 속시원히 뚫어주신 시간이었다. 이제 빛종찬님과의 시간이 1번 밖에 안남았다니 벌써 섭섭한데요…이번 과제도 홧팅이닷🦊🔥

# 오늘 공부한 내용 🌼

- input, select
- **IR**(Image Replacement) 테크닉
- **CSS Sprite 기법**
- 로그인 화면 만들기 실습 (input 활용)

# 새로 알게된 내용 💡

- `**position:absolute**`는 `position:static`이 아닌 부모요소(relative/fixed)를 기준으로 움직인다.
- focus에 스타일을 줄 땐 `**outline**`! `outline-offset`(콘텐츠 여백)까지 주면 펄펙트
- `**:focus-visible`\*\*
- **IR**(Image Replacement) 테크닉
  - 디자인적으로는 보이지 않지만 스크린리더나 브라우저를 위해 정보를 전달하는 텍스트를 html 곳곳에 숨겨두는 방법
  - `text-indent:-9999px;` 들여쓰기 (지금은 사용하지 않음)
  - 페이지에서 메뉴 바를 텍스트가 아닌 이미지로 넣는 이유
    - 폰트도 이미지 단위인데 폰트 자체의 용량이 크기 때문
    - 페이지 로딩이 빨리 이뤄질 수 있도록 한다.
    - 대신 만약 이미지 로딩에 실패해도 이미지가 뜰 수 있도록 대체텍스트를 넣어준다.
  - 중요한 이미지 대체텍스트로 이미지 off 시 에도 대체 텍스트를 보여주고자 할때
    - `z-index:-1;`
  [https://mulder21c.github.io/2019/03/22/screen-hide-text/#visibility-이용](https://mulder21c.github.io/2019/03/22/screen-hide-text/#visibility-이용)
- **CSS Sprite 기법**
  여러가지의 이미지를 하나의 이미지 파일안에 배치하여 이미지로드 부담을 줄이는 방법

# 오늘의 문제 ⚠️

- **폰트를 root에 넣는 게 좋을까 body에 넣는게 좋을까?**

```css
:root {
  font-familly: 'Montserrat', sans-serif;
  font-weight: 500;
}
button {
  font: inherit;
}
```

폰트는 어차피 상속받을 수 있기 때문에 \*로 일일이 전역변수에 넣어줄 필요는 없다.

필요 시 button에 추가로 넣어주는 정도?

- **header는 여러번 나와도 되는가?**
  각 섹션 지정 시 섹션마다의 헤더가 되므로 상관 없다
- **실습에서 `flex-basis:26%`이 충분히 표현이 안된 이유?**

  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1efa81c0-edd8-43db-8a7d-3af6157333af/Untitled.png)

  flex-item들은 flex-shrink라는 속성이 기본값 1로 이미 지정된 상태로,

  이로 인해 원하는 사이즈로 지정했어도 상황이 여의치않으면(상대 콘텐츠 양이 많거나 적으면) 늘어나거나 줄어들 수 있다.

  그렇기 때문에 flex-basis로 크기를 원하는 대로 표현하고 싶다면 `flex-shrink`를 꼭 줄 것!

- **리스트 스타일을 가상요소로 만들어 주려면?**
  flex로 정렬해 하는 것도 좋지만 비추천, 좋은 방법은 **`text-indent`**!
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5eeef28f-93b3-4876-b23c-dbb86f522aa6/Untitled.png)
  ```css
  .card-text ul li {
    list-style: none;
    text-indent: -20px; /* 왼쪽으로 들여쓰기한 후 */
    padding-left: 20px; /* pdding으로 list style과 텍스트 간 여백주기*/ */
  }
  .card-text li + li {
    margin-top: 6px; /* li 사이 여백 주기 */
  }

  .card-text ul li::before {
    content: ' ';
    background: var(--sub-purple);

    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
  }
  ```

# 궁금한 내용 / 부족한 내용 🧐

- `**:focus-visible`\*\*
