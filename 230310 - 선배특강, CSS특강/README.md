# 🌳 오늘 하루 정리

특강의 날~오늘하루는 마음 편하게 들었던 시간이었다.

날씨가 오늘 무척 좋아 점심시간에 밥을 후딱 먹고 산책 다녀왔다🚶‍♀️🚶‍♀️ 겉옷 안입어도 따뜻…

어제, 오늘 선배림 특강, CSS 장인이신 빔캠프 대표님의 CSS 특강 모두 어쩜 이리 유잼이실까….

특히 CSS…당연하게 생각했던 모든 것을 의심하여 접근해 보는 시간이었어서 혼란스러우면서 CSS를 다시본 느낌 그리고 종며든 시간이었습니다~😂😂😂

# 선배림 특강 - 멋사 200% 활용 설명 😎

<aside>
💡 저는 불안함, 불안감이 느껴지는게 더 잘하고 싶은 마음에 생긴다고 생각해요! 그런 마음이 들 때 마다 "와 나 이거 잘하고 싶구나!"라는 생각을 하면서 보다 긍정적으로 풀어가셨으면 좋겠습니당

</aside>

- 스케줄 관리

월요일부터 금요일까지만 스케쥴을 짜고 주중에 못한 것을 주말에

- 이력서

이력서를 쓸 때, 입사 후 포부 작성

개인적인 의견은 단순히 수 있다라고 말하기 보다 내 역량(기술, 경험)을 근거로 회사의 어떤 부분에 기여할 수 있다고 기술하면 좋은거 같습니다! 근데 막상 써보려면 막막해지는 경우가 있는데 그래서 많이 써보시고 피드백 받으시고 다시 써보셨음 좋겠습니다!!

# CSS 특강 - 빔캠프 이종찬 강사림

### Cascading

계단식, 위에서 아래로 흐름

### 전체적인 틀을 항상 먼저 생각하자.

- 웹페이지의 암묵적인 틀의 규칙, 머리가슴배 - **Header, Contents, Footer**
- 처음부터 HTMl 마크업을 왕창 할 생각을 버리자.
<img src="https://user-images.githubusercontent.com/105140201/224292212-dc2aede4-9854-4308-850f-6e83988c04a2.png" width="300px">
  이 정도로 충분하다.

### **CSS 기본특징**

- `div {}` - 타입 선택자, **타입 설렉터**
- `background-color` : **프로퍼티**, 속성
- ```<p ****align="center">` : **애트리뷰트**, 속성
- `*` : **Universal Selector** (애스터리스크)(전체 선택자)
- CSS는 프로퍼티에 초기값, **initial value**가 설정되어 있다.
  - `background-color:transparent;` - 배경색
  - `width:auto;` - 해당 요소의 직계 부모가 제공해주는 부모의 Contents 영역(**Containing Block)**의 크기만큼 채운다 (width랑은 다름)
  
    <img src="https://user-images.githubusercontent.com/105140201/224292384-082f1032-01fb-4926-b751-03a8c88f1381.png" height="100px">
    
      <aside>
      💡 `width` 
      넓이, 사용 가능한 공간을 채운다는 의미로, `width:400px`를 주면 사용가능한 공간을 전체 공간-400px만큼 남긴다
      
      </aside>

  - `height:auto;` - height 프로퍼티의 initial value. 콘텐츠 영역 높이
  - `position:static` - position의 initial value.기본적으로 요소가 좌측 상단에 위치하는 이유
  - `margin:0` : margin의 initial value (margin - 사용가능한 공간(margin)을 자동으로 계산해 여백으로 준다 )
    - ↔ `margin:auto` : 블록레벨 elements에 가운데 정렬
  - `text-align:start` - text-align의 initial value.
      <aside>
      💡 (글씨가 오른쪽이 기본인 아랍 국가의 경우 start가 오른쪽으로 되어 있다)
      
      </aside>

  - `align-items:stretch`

### Profile 만들기 작업 순서

<img src="https://user-images.githubusercontent.com/105140201/224292613-08ec2a39-9255-42e7-9f34-e70b49279466.png" width="400px">


1. 헤더/콘텐츠/푸터 HTML 마크업
   - 가장 큰 덩어리, `width, margin,border,background` 설정
2. header 설정 - `img`넣기, `background`설정
   - h1/p `margin:0` 설정
   - 가운데 정렬 - `text-align`
       <aside>
       💡 h1 태그의 ‘텍스트’가 정렬된 것이지 **h1 자체**가 정렬된 것은 아니다.
       
       </aside>

   - img 빈 공간 - `verticla-align:top` (img가 인라인 요소이기 때문 baseline)
   - header 세부 스타일 꾸미기
3. content에 동일한 클래스의 `div`2개 배치(스타일 설정이 같으므로)한 후 각각 `h2`값, `li`넣기
   - margin, padding 기본 설정
     ```css
     h1,
     h2,
     ul,
     p {
       margin: initial;
       padding: initial;
     }

     li {
       list-style-type: none;
     }

     img {
       vertical-align: top;
     }
     ```
   - `background-img` 넣기 : `background-repeat`, `background-position(right, 40px, center)`
   - 세부 스타일 설정

### 상속

부모 요소에 설정한 속성이 자식 요소가 물려받아 적용되는 것 (**inheritrance**)

프로퍼티마다 상속이 되는 것이 있고 안되는 것이 있는데, 부모에 영향을 받는 것은 모두 상속이다.

- width, height처럼 상속이 안되는 것은 `width:inherit`으로 강제로 적용할 수 있다.
- `width:100%`의 경우 부모 요소의 넓이를 상속하는게 아니라 가져오는것

### 설렉터(selector)=선택

- `.header h1` - header 클래스의 자손
  → `.header`와 `h1` 사이의 `' '`는 **descendant combinater**(후손 결합자)라고 부른다

### Selector Secificity **명시도,**특이도

명시도는 주어진 CSS 선언에 적용되는 가중치(weight)

<img src="https://user-images.githubusercontent.com/105140201/224293038-c603230c-9b1c-4341-9ed3-6db38944497c.png" height="200px">

<img src="https://user-images.githubusercontent.com/105140201/224293185-1958e7d5-bb56-4654-b7be-3f967ee17977.png" width="300px">

.wow.wow.wow 처럼 반복해 불러줘도 가중치가 더해질 수 있다.

`!important`는 property에 먹여주는 것이라 Secificity 가 더 세다
