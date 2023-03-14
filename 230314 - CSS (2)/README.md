# 🌳 오늘 하루 정리

아 캐릭터 만들다 하루가 다 갔습니다…

애니메이션 기깔나게 넣고 싶은데 벌서 12시가 되어가서 후다닥쓰는 TIL

딱 1년 전 CSS 처음 배우면서 해본 실습이 캐릭터 만들기였는데 그때와 지금이 별 발전이 없는 기분은 무엇…구글링의 힘좀 빌려서 제대로 완성해야겠다.

# 오늘 공부한 내용 🌼

- 햄버거 메뉴 만들기
- `<table>`
- viedo, audio
- iframe
- form

# 새로 알게된 내용 💡

- 햄버거 메뉴 만들기
  - `span`태그를 사용했다 - span은 span끼리 묶어줄 수 있다.
  - `span`은 인라인 태그여서 부모요소의 크기를 주려면 `display:block`으로 바꾼다.
  - button에 기본적으로 padding값이 껴 있으므로 초기화를 해준다.
- **<table>**
  - `<caption>`
  - `<thead>, <tbody>, <tfoot>` - 머리/본문/바닥으로 구역을 나누는 요소로, 가독성을 위 명시적으로 사용하면 좋음
      <aside>
      💡 오늘 배우신 thead, tbody, tfoot을 안넣어도 보이는 화면은 크게 차이가 없으니 
      생략하시는 분들도 많으신데요. 나중에 JS로 이 table을 컨트롤 할 때 예를 들어 tbody를 컨트롤 할 때, thead가 없으면 문제가 됩니다. 따라서 꼭 써주세요. 😊
      
      </aside>

  - `<colgroup>` - 테이블 열 그룹을 만들고 싶을 때 사용(↔`<***rowgroup>`)\*\*\*
    - col - 테이블 열을 하나 이상 묶을 때 사용, col 별로 스타일 지정을 할 수 있게 해준다
    - col을 병합하니 가로로 합치는 모양세가 되는 것이고, row를 병합하니 세로로 합치는 모양세가 되는 것
  - `scope` - `th` 태그에 사용, 셀의 범위를 지정, 간단한 표에서는 지정X
    - 어떤 <th>를 scope=”col”로 설정하면 열 방향으로 읽으라는 의미가 된다.
  - `colspan, rowspan` - 셀병합 속성
    - `colspan`: 열 병합, `rowspan`: 행 병합
    ```jsx
    <table>
      <thead>
        <tr>
          <th scope="col">Purchase</th>
          <th scope="col">Location</th>
          <th scope="col">Date</th>
          <th scope="col">Evaluation</th>
          <th scope="col">Cost (€)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Haircut</th>
          <td>Hairdresser</td>
          <td>12/09</td>
          <td>Great idea</td>
          <td>30</td>
        </tr>
      </tbody>
    </table>
    ```
  - `id - headers` - 셀이 병합된 표거나 내용이 많아 복잡한 경우, 제목 셀이 2줄 이상이 되어 복잡한 경우 해당 속성으로 명확하게 연결하는 것이 좋습니다!
    - scope 속성과 headers 속성 중 하나만 선택하면 됩니다! 둘다 사용하지 않습니다!
    ```jsx
    <table>
      <thead>
        <tr>
          <th id="purchase">Purchase</th>
          <th id="location">Location</th>
          <th id="date">Date</th>
          <th id="evaluation">Evaluation</th>
          <th id="cost">Cost (€)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th id="haircut">Haircut</th>
          <td headers="location haircut">Hairdresser</td>
          <td headers="date haircut">12/09</td>
          <td headers="evaluation haircut">Great idea</td>
          <td headers="cost haircut">30</td>
        </tr>
      </tbody>
    </table>
    ```
  - table과 각 td&th의 border 중복 없애기
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d30c3cb9-22c7-4ce7-9b23-3e80e95e1f9f/Untitled.png)
    ```css
    table {
      border-collapse: collapse;
    }
    ```
- **iframe**
    <aside>
    💡 iframe은 이미지처럼 width:100%값만 주면 비율이 자동으로 맞춰지진 않는다.
    
    height값을 100vh를 주는 등 임의로 설정할 수도 있지만, 가장 좋은 방법은 `aspect-ratio`를 설정하기!
    
    </aside>

- **svg** - 확장 가능한 벡터 그래픽, 이미지처럼 사용 가능하지만 다른 점은 조작이 필요하다면 꼭 **인라인**으로! 그 외에는 img태그&배경으로 삽입하기
  1. 이미지 태그로 사용하기
  2. CSS `background` 배경으로 넣기
  3. 인라인으로 넣기 - svg파일 자체가 이렇게 HTML태그로 구성되어 있는데, 이를 가져와 복붙하는 방식

     ```html
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path
         d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
         stroke="#767676"
         stroke-width="2"
         stroke-linecap="round"
         stroke-linejoin="round"
       />
       <path
         d="M9 21V12H15V21"
         stroke="#767676"
         stroke-width="2"
         stroke-linecap="round"
         stroke-linejoin="round"
       />
     </svg>
     ```

# 오늘의 문제 ⚠️

<aside>
💡 `**top: 50%; left: 50%`을 주고 `translate(-50%)`를 하는 이유?**

- `translate(-50%)` 는 자신의 위치에서 x,y축으로 이동, 축을 따라 계산된 치수의 50%만큼 이 요소를 왼쪽 및 위쪽으로 이동"하는 것을 의미하는데, 추가로 이것을 쓰는 이유는
- `top: 50%; left: 50%` 이것은 **요소의 중심이 아닌 왼쪽 상단 모서리를 부모의 중심으로 이동하기 때문**이다. 요소의 중심은 부모 요소의 중심과 정렬되지 않는다.
- 컨테이너의 높이와 너비를 모르는 경우에도 여백을 사용하는 대신 요소를 중앙에 배치하는 깔끔한 방법이다.
</aside>
