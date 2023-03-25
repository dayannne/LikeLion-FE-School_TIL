# 🌳 오늘 하루 정리

주말에 열린 특강을 듣게 되면서 처음으로 주말 TIL을 작성해 보는 오늘이다.

html에서 쉬운듯 헷갈리는 것들을 천천히 자세하게 짚어주신 시간. 어떤 붙흐캠프가 주말 시간을 쓰시면서 모르는 것들을 짚고 넘어주시려고 노력하는가…

정말 한명도 놓치지 않고 이끌어 주시려는 것이 보여 감사하다.

항상 어려운게 당연하다, 모르는게 당연하다고 마음을 다잡아 주셔서 한달 동안 지치지 않았던 것 같아 감사하고 남은 세달도 잘 부탁드림미다…물론 내가 그만큼 화이팅해야 하지만ㅎ

주말동안 할 일이 많아 처음으로 조금 과부하 걸렸었는데 특강을 듣고 나니 한결 뿌듯하다~~~

# 오늘 공부한 내용 🌼

---

1. 시멘틱 태그 - 시멘틱 태그를 사용할때 어떻게 결정해야할까?
2. 마진 컬랩싱 현상과 마진과 패딩의 사용에 관하여
3. position & transform

- 시멘틱 태그 구조짜기 실습

- **article**과 **section**
  - `<article>` : **독립적**으로 구분하거나 재사용할 수 있는 구획
    페이스북 같은 SNS 피드 사이 갑자기 껴드는 광고나, 친구추천 같은 요소들
    독립적으로 존재해서 어디서든 갑자기 뿅뿅 등장해도 상관없는 것들을 article이라는 요소로 구획지어서 표현하시면 될 것 같아요.
    ![모바일로 생각하면 위젯같은 것들!](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9f1ac212-bc8f-4c1b-a844-d64f6d746609/Untitled.png)
    모바일로 생각하면 위젯같은 것들!
  - `<section>` : **연관성** 있는 문서의 구획
    다른 서비스에 가져다 놓으면 이상한 것들
    ![오늘의 상품 추천 ](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a44bd4ff-2508-4790-a60b-2f16dd9e2e29/Untitled.png)
    오늘의 상품 추천
- **_마진 겹침 현상 (margin collapsing 마진 컬랩싱)_**
  1. 요소와 요소의 사이에 마진 탑(margin-top) 혹은 마진 바텀(margin-bottom)의 공간이 있을 경우 더 높은 값의 마진 값이 적용되는 현상
  2. 부모 요소와 자식 요소가 존재할 때, 자식 요소의 마진 탑 혹은 마진 바텀 값이 부모의 높이에 영향을 미치지 않는 현상
  3. 부모 요소 안에서 자식 요소의 여백을 설정하고 싶었으나 부모요소를 기준으로 여백이 생기는 현상

     ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4dcb039-487d-4af8-943a-cb8caa1a6ba1/Untitled.png)

     ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0d2ca83a-0e84-4c45-b15e-edbf75d7b6af/Untitled.png)

1. 부모 요소에 `display : inline-block`, `vertical-align:top` 주기 (width크기를 주지 않으면 콘텐츠크기만큼만 크기가 작게 정해져버리는 문제)

![주의) 3개 요소가 모두 inline-block으로 작성된 경우 - 각각 줄바꿈이 되어 여백이 생긴다.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b7eb602-b75f-4144-8fef-4a9c5dea3ecc/Untitled.png)

주의) 3개 요소가 모두 inline-block으로 작성된 경우 - 각각 줄바꿈이 되어 여백이 생긴다.

2. 부모 요소에 `overflow:Dhidden` 주기 (자식요소가 부모 크기를 넘으면 잘려버리는 문제)

3. 부모 요소에 `border` 지정해주기 (스타일 때문에 꼭 지정할 순 없다…)

4. 부모 요소에 display 속성으로 flow-root을 사용합니다. (IE 지원 불가)

- relative와 absolute
  - relative - ‘원래 자신이 있어야 하는 위치’에 상대적. 자신이 원래 있던 자리를 기억하는 친구로, 본인의 원래 static 자리를 기준으로 이동
  - absolute
    - 부모 요소 position이 static일 때 → my way
    - 부모 요소가 static을 제외한 position 속성값을 가졌을 때 → 가장 가까운 부모의 박스 내를 기준으로 위치\
