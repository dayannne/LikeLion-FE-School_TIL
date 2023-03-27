# 🌳 오늘 하루 정리

오늘로 4주차 끝…정말 실감이 안난다!

나는 과연 얼마나 늘었을까? 이제부터 진짜 시작인데 잘 나아갈 수 있을까?

이력서를 초반에 쓸 수록 좋은 건 알지만 막상 쓰려니 착잡한 맴이다.

니가 나를 모르는데 난들 나를 알겠느냐…하하하

그래도 해야지. 해야 취업을 하겠지????????

오늘 부트스트랩에 관해 수업을 들었다. 부트스트랩으로 외주 페이지를 많이 만드는구나…최대 한 거넹 몇천만씩…어쨌든 열심히 하다보면 먹고 살 길이 생기겠지 라는 위안이 생겼다.

이번주를 잘 마무리 해야 새로운 주차, 그리고 4월을 기쁘게 맞이할 수 있을 것 같다! 수고했고 앞으로도 이대로만 해보자!!!

- 이번주 할일 : 종찬님 과제 완성, CSS 복습, 부트스트랩 페이지 하나 만들기, 이력서 틀 작성, 자바스크립트 공부

# 오늘 공부한 내용 🌼

- 코딩컨벤션
- 부트스트랩

# 새로 알게된 내용 💡

### 코딩컨벤션

- HTML로도 해킹이 될 수 있다?! <`iframe`>을 통해 해킹 코드를 주입할 수 있어 정부기관 같은 곳은 iframe 사용을 자제한다고 한다.
- VS Code에 TODO로 하이라이트를 줄 수 있어 협업 시 해야할 일을 명시할 수 있다.
- 클래스 이름에 하이픈`-`을 주면 더블 클릭시 하이픈 기준 오른쪽 왼쪽을 나눠서 드래그를 잡고, 언더바`_`를 주면 언더바를 포함한 전체를 다 잡는다.

Bootstrap - Yes, 템플릿 구매해서 고치며 사용
Tailwind - Yes , 한땀한땀 만들며 사용

부트스트랩, 테일 윈드로 프로젝트를 하나 만들어 보면 좋다
D3 - Yes
Canvas - Yes
SASS - Yes

### 부트스트랩

- **grid - 부트스트랩의 그리드는 기본적으로 12개의 행과 열로 되어 있다. 열을 3개로 설정하면 4개씩 3등분하여 차지하고 있는 셈이다.**
  이를 부트스트랩 클래스로 만들어 보면 다음과 같다.
  ```
  <div class="container">
          <div class="row">
              <div class="col-md-4">hello</div>
              <div class="col-md-4">hello</div>
              <div class="col-md-4">hello</div>
          </div>
      </div>
  ```
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2703e7d9-7683-47f4-ac6a-223423f3b594/Untitled.png)
  - container 크기 설정
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/41d84705-d76f-4794-94c3-e66114e43f27/Untitled.png)
    - **md** - 화면 크기가 768px 미만이 될 시 일렬로 정렬이 바뀐다.
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7e1e2087-e230-4e8d-acac-366f6f18b9b8/Untitled.png)
    - md&sm 함께 주기
      ```
      <div class="row">
                  <div class="col-md-3 col-sm-12 b">hello</div>
                  <div class="col-md-3 col-sm-12 b">hello</div>
                  <div class="col-md-3 col-sm-6 b">hello</div>
                  <div class="col-md-3 col-sm-6 b">hello</div>
              </div>
      ```
      ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c92e6fd7-50d0-436a-b08b-7bd4967d708c/Untitled.png)
      ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96c2e1fe-7a1a-400f-b8af-4a50a5bff25d/Untitled.png)
- **타이포그래피** - 잘 안쓴다 템플릿을 구매하면 그리드 위주로 사용하기 때
- `**<kbd>Ctrl + k</kbd>**` 이뿌게 보인다.
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6853f783-2501-4dbe-8f17-ded10ba9b24d/Untitled.png)
- **img** - **`rounded`**
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5781915-b4ac-4e52-a4cd-ee32981ee8f9/Untitled.png)
  ```
  <div class="col-md-4">
                  <img class="img-fluid" src="./a.png">
              </div>
              <div class="col-md-4">
                  <img class="img-fluid rounded" src="./a.png">
              </div>
              <div class="col-md-4">
                  <img class="img-fluid rounded-circle" src="./a.png">
              </div>
  ```
- **테이블 table**
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c1f7f062-f896-4f6a-9f91-f55842d32bbf/Untitled.png)
  - \***\*`.table-striped`** Striped rows
  - \***\*`.table-hover`** Hoverable rows
  - `**.table-dark**` - 배경이 black이 됨
- **마진 주기** - `**mt-숫자` `mb-숫자` `ms-숫자`\*\*
  - `t` - for classes that set `margin-top` or `padding-top`
  - `b` - for classes that set `margin-bottom` or `padding-bottom`
  - `s` - (start) for classes that set `margin-left` or `padding-left` in LTR, `margin-right` or `padding-right` in RTL
  - `e` - (end) for classes that set `margin-right` or `padding-right` in LTR, `margin-left` or `padding-left` in RTL
  - mt,mb를 주면 자동으로 important가 들어가는데, 일반적으론 사용을 자제하는 것이 맞지만 부트스트랩의 경우 사용 가능하다.
- **fluid** - 그리드 양 옆 여백을 없애준다. (그리드, 이미지 두루두루 사용)
- 부트스트랩만 쓰지 않고 **Font Awesome**, **sweetalert, Datepicker** 등 다양하게 조합해서 사용하는 것이 효율적이다.
  [https://sweetalert2.github.io/](https://sweetalert2.github.io/)
  [Datepicker | jQuery UI](https://jqueryui.com/datepicker/)
  [Font Awesome](https://fontawesome.com/)
