###230306

# 🌳 오늘 하루 정리

분명 열심히 들었는데 왜 돌아서면 까먹는가…뭔가 예전에 배웠던 것과 지금 배우는 것이 바로 연결되지 않아서 스런 것 같다. 엄청 deep하게 들어가기 때문에 머릿 속에서 재정리가 필요하다!😱

카드 UI 만들기 실습에서 자잘한 것 신경쓰다가 너무 오래걸렸다. 물론 TIL 쓰는 지금은 버전2까지 다 만들었지만…! 무조건 복습복습 열심히, CSS 정복하고 말 것.🚩

# 오늘 공부한 내용 🌼

- CSS - Box Model을 마저 배우고, 박스꾸미기 실습에서 내가 해본 방법 외에 사용할 수 있는 다양한 방법을 배웠다.
- **`display`**속성
- 웹접근성과 시멘틱에 관심을 갖기. 누군가는 소외감을 느끼지 않도록 사명감을 갖기..!
  - 장애인 분들도 사용할 수 있는 사이트
  - 키보드 접근성(Tab 버튼 이동)을 올릴 수 없을까?
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3611237-9fb5-4c63-acd3-7c9ebd3f7be6/Untitled.png)
    - 네이버 검색창에 포커싱한 상태에서 tab을 누르다보면 뉴스스탠드 영역으로 이동할 수 있는 버튼이 뜬다.
- **`<img>`** - 캡션달기, 이미지 비율을 유지/조정하는 방법
- **`position`** 속성 - `static/relative/absolute/fixed/sticky` , z-index

- 카드 UI 만들기

1. 나는 오늘 밖에 나간 적이 있다.
2. 지금쓰고 있는 안경에 도수가 없다.
3. 나는 여름보다 겨울을 더 좋아한다.

# 새로 알게된 내용 💡

- **background**
  - `background-attachment` (스크롤 시 배경 고정여부), `background-clip` (배경 적용 범위 설정, text 배경 적용도 됨), `background-origin` (배경 시작위치, clip과 달리 padding, content로 적용해도 시작 부분부터 border 끝까지 적용), `background-image` (중복 가능), `background-size` (contain, cover, 잘림/찌그러짐 방지)
  - 이미지가 별다른 정보 제공의 역할 없이 시각적인 스타일의 기능만을 하거나 최적화를 고려할 정도의 크기가 아니라면 `<img>` 대신 `background` 으로 넣는 것을 권장한다.
- **opacity** - 불투명도
- **outline** 은 보통 `:focus` 로 버튼에 포커싱했을 때 효과를 주는 데에 사용한다. 만약 스타일로 사용하게 되었을 때 포커스가 감춰져 사용자가 길을 잃을 수 있기에 사용 주의!
- **box-shadow**의 다양한 예제를 확인할 수 있는 사이트 신세계다✨

[Beautiful CSS box-shadow examples - CSS Scan](https://getcssscan.com/css-box-shadow-examples)

- **<img>**
  - - 기본적으로 인라인으로 display 설정이 되어 있어서 하단에 빈 공간이 생기게 되는데, 이 `vertical-align : top/middle/bottom`을 설정해 해결할 수 있다.
  - `<figure>` & `<figcaption>` : 이미지에 캡션을 달고 싶을 때 사용한다.
  - **이미지 비율을 유지/조정**하려면
    1. `aspect-ratio`로 가로세로 비율을 설정 (2/1, 4/3…)

       → 여러개의 카드페이지 등 다양한 크기의 이미지를 동일 비율로 만들 때에 사용한다.

    2. `padding-top/bottom` `%` 값 이용하기 : padding의 top과 bottom의 %값은 부모의 가로너비를 기준으로 이용한다.
- **position 속성**
  - `fixed` : 뷰포트 기준, 스크롤을 내리거나 올리면 화면 위치 그대로 유지하며 따라 옴
    - header, 하단 top 버튼에 사용
    - `transform`, `perspective`, `filter` 이 none이 아니면 조상을 기준으로 할 수 있는데, 실무에 잘 쓰지 않는다.
  - `sticky` : 조상 위치 기준. 스크롤을 내리면서 원래 위치에 계속 있다가 페이지 상단에 닿으면 그 다음 상단에 붙어 위치를 유지한다. (상단 배너 등에 사용)
  - `z-index` : 쌓아 올리는 순서, 값이 클수록 제일 위로 배치된다

# 오늘의 문제 ⚠️

- **background-clip을 아래에 주는 이유?**
  단축속성을 적을 때 후자 원칙에 의해 개별 속성을 아래에 준다.
  ```css
  border : 10px dashed #000
  backgroung : red
  background-clip : padding-box
  ```
  [단축 속성 - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/Shorthand_properties)
- **body 안에 태그가 하나만 있을 때,** 이것은 first-child이면서 **last-child**도 될 수 있을까?
  ```html
  <body>
    <div></div>
  </body>
  ```
  body 바로 밑에 하나만 있으니 브라우저에서 애매하다고 판단해 last-child로 인식하지 않는 것 같다.
- 박스 꾸미기 - **가상요소**를 사용해 어떻게 하지?

# 궁금한 내용 / 부족한 내용 🧐

- div 자손 설정하는 부분 다시 한 번 문서 보기! (div :xx, div:xx) (띄어쓰기 차이)
- **background** 속성들 MDN 문서에서 예시 다시 보기, (`background-attachment` - 살짝 헷갈림)
- **box-sizing** - `content-box`, `border-box`
- 박스 꾸미기 - **가상요소**를 사용해서 어떻게 할까?
- **object-fit**
