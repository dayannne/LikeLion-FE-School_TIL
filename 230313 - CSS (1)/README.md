# 🌳 오늘 하루 정리

오늘은 아침부터 스프린트 회고시간을 갖고 CSS를 마저 배웠다.

그리고  점심 때 재현님의 조언 타임이 있었는데,

<aside>
💡 비교하지 말자 어렵고 머리에 안들어오고 바로 까먹고…머리때문이 아니라 당연한 거다

중요한 것은 머리가 아니라 시간이다. 부트캠프가 끝나자마자 취업하는 사람은 이미 우리보다 더 많은 시간을 써왔기에 실력이 뒷받침이 되어 있는 사람일 것이다. 

</aside>

‘모르고 부족한 게 당연하다’라고 말해주는 사람이 있다는 것에 감사하게 되는 하루하루이다.

또 오늘 디코에 ‘나만모르는거아님’ 게시판이 생겼는데, 사소한 질문 같아서, 나만 모르는 것 같아서 질의응답 채널에 질문 올리기 부끄러운 사람들을 위해 개설해 주신 채널인데 진짜 어떻게 학생들 맘을 잘 아실까😢 운영진 분들 정말 열일해 주심에 감사합니다…멋사 끝나는 게 벌써 아쉬울 정도(?)😭

그에 반해 그동안 중 레전드 집중 못하고 비효율적으로 하루를 보낸 나…목요일까지 캐릭터 과제가 주어졌는데, 정말 잘 만들고 싶은 마음에 오늘 수업끝나고 피그마만 만지다 하루가 다 갔어요…레전드네 커밋이라도 제대로 하고 자야겠어요…에효

# 오늘 공부한 내용 🌼

---

- `button`
- **CSS 선택자(동적 가상 선택자)**
- **CSS 선택자(속성 선택자)**
- **실습 - 버튼 만들기**
- **transform -** scale, rotate, translate, skew
- **웹페이지 렌더링**
- **transition**
- **animation**

# 새로 알게된 내용 💡

---

- **button의 타입**
    - `button`: 클릭했을 때 아무것도 하지 않음, JavaScript와  연결하여 사용
    - `submit`: 서버로 양식 데이터를 제출
    - `reset`: `<input type="reset">` 과 같이 초깃값으로 되돌림
    - `disabled`: 누르거나 클릭하는 것을 비활성화
        - ex) 필수 입력정보를 다 입력하지 않았을 땐 disabled, 입력한 후 해제 처리
    - `**<a>` vs `<button>`**
        
        [https://codepen.io/stronger-deer/pen/oNPwyrO](https://codepen.io/stronger-deer/pen/oNPwyrO)
        
        **오른쪽 마우스 클릭, shift + click, ctrl+ click** 이 다르다.
        
        |  | a | button |
        | --- | --- | --- |
        | 역할 | 하이퍼링크 | 사용자의 동작 실행을 위한 트리거 |
        | 기능 | 다른 페이지 혹은 페이지 내의 특정 영역으로 이동 | 브라우저 기본동작 없음.
        JS를 이용하여 동작 추가
        (submit: form 전송 / reset: form 초기화) |
        | 키보드 | 엔터 | 스페이스, 엔터 |
        | 주의 | href 값 없이 JS로 동작하게 하면 안됨! | JS로 동작 |
    
    <aside>
    💡 접근성 측면에서, 버튼의 최소 44x44px 크기를 권고
    운동 조절 장애, 마우스가 아닌 터치스크린과 같은 정확하지 않은 입력 도구를 사용하는 사용자에게 도움이 될 수 있습니다!
    
    </aside>
    
- **CSS 선택자(동적 가상 선택자)**
    - `:active` - 버튼을 클릭해 계속 누르고 있는 동안 활성화
    - `:visited` - 사용자가 이미 방문한 링크일 경우 해당 상태에 만족
        
        ![image](https://user-images.githubusercontent.com/105140201/224854912-db17c233-da8d-40b2-b0f7-c27bd599a8f9.png)
        
    - `isabled` - 비활성화 된 요소를 선택
    - `:hover` - 마우스 커서를 요소에 올려두었을 때
    - `:focus` - focus 받은 상태
    
- **CSS 선택자(속성 선택자) - 이해만 하고 쓰고 싶을 때 쓰면 된다**
    - `**[속성이름]**` - 해당 속성을 가진 요소 모두 선택
    - `**[속성이름~="속성값"]**` - 특정 문자열로 이루어진 단어를 포함하는 요소를 모두 선택
        
        ```css
        [class~="btn"]{
        	text-decoration:underline;
        }
        
        class="btn"
        class="btn reset"
        class="reset btn"
        class="btn-negative"
        class="btn-positive"
        ```
        
    - `**[속성이름|="속성값"]**` - 특정 문자열을 포함하거나, 특정 문자열로 시작하면서 바로 하이픈 `-` 기호가 있는 태그
    - `**[속성이름^="속성값"]**` - 특정 문자열로 **시작**하는 요소를 모두 선택
    - `**[속성이름$="속성값"]**` - 특정 문자열로 **끝나는** 요소를 모두 선택
    - `**[속성이름*="속성값"]**` - 특정 **문자열을 포함**하는 요소를 모두 선택
        
        ```css
        [class*="btn"]
        
        class="btn-a"
        class="a-btn"
        class="eeebtneee"
        ```
        
    
- 실습 - 버튼 만들기
    
    ![image](https://user-images.githubusercontent.com/105140201/224854821-d7155646-4ce2-46cb-8bb6-7f15c15d601a.png)
    
    박스 안에 줄 하나 더 만들 때 `box-shadow: inset | offset-x | offset-y | color`
    
- 웹페이지 렌더링
    
    [브라우저 렌더링](https://www.figma.com/file/XNBFc5GjsUUfPLlKdhBpEs?node-id=0:1)
    
    1. 파싱 - html 파일을 DOM으로 변환(파싱), 오타/잘못된 문법 예외처우우
    2. 스타일 계산 -  CSS를 CSSOM으로 파싱
    3. 레이아웃
    4. 페인트
    5. 컴포지팅

- **position vs transform** : 정적인 사이트에서 요소의 위치를 단순 배치하는것은 position을 사용해도 괜찮지만, 애니메이션이나 혹은 동적으로 요소의 위치를 이동해야 하는 경우 transform 속성을 사용하는 것이 성능에 좋습니다.

- **transition**
    
    ```css
    transition: width 2s linear 1s;
    ```
    
    - width 속성을  / 2초 동안 / 처음부터 끝까지 일정한 속도로 / 1초 지연시킨 뒤에  transition 효과가 일어나는 것을 의미합니다.
    - 
- **animation**
    - transition vs animation : `transition`의 경우 요소의 상태가 변경되어야 애니메이션을 실행할 수 있지만, `animation` 속성은 요소의 상태 변화와 관계없이 애니메이션을 실행할 수 있습니다.
        
        ![image](https://user-images.githubusercontent.com/105140201/224854854-b913d8d2-52e3-450f-9d84-028db061929b.png)
        

# 궁금한 내용 / 부족한 내용 🧐

---

- **웹페이지 렌더링**
- **CSS 애니메이션**
