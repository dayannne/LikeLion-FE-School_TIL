# [TIL 230308] - HTML/CSS (5)

# 🌳 오늘 하루 정리

flex grid 딱 이거 둘 했는데 수업이 끝났네~ 그만큼 정말 딥했다.

세로정렬 짱짱맨 flex는 얼추 이해가 된 것 같고, 문제는 grid라…복습 해서 손에 익혀야 할 것 같다.

요즘 느끼는 건데 예전엔 공부할 때에는 항상 조용히 혹은 asmr도 안거슬리는 것으로만 찾아 들었는데 부트캠프 시작하고 나서는 음악 없으면 안 됨,,,공부랑 블로깅이 재밌어지고 능률이 훨씬 올라가는 늑낌이다  요즘 소확행(?) 봄 플레이리스트를 들으면서 방구석에서 봄느낌 내보기🌸

# 오늘 공부한 내용 🌼

---

- **flex -** 부모 요소를 **flex-container** 자식 요소 **flex-item**
    - **`flex-flow` :** flex-direction, flex-wrap
    - **`justify-content`**
    - **`align-items`**
    - **order**
    - **flex-item에 사용하는 단축속성 `flex`** : flex-grow, flex-shrink, flex-basis
- **grid** - 부모요소를 **grid-container** 자식요소를 **grid-item**

# 새로 알게된 내용 💡

- 코드에 주석처리(`ctrl`+`/`) 말고 새로 주석처리 : `Shift` + `alt` + `a`

- **flex**
    - 부모 요소를 **flex-container**, 자식 요소를 **flex-item** 이라고 부른다.
    - 1차원적 레이아웃(x축, 혹은 y축 둘 중 하나)을 위해 주로 사용
    
- **flex-container(컨테이너)에 사용하는 속성**
    - **flex-flow**
        - flex-direction, flex-wrap 의 단축속성
            
            ```css
            flex-flow: row wrap;
            ```
            
        - **`flex-direction`** : `row` `column` `row-reverse` `column-reverse`
        - **`flex-wrap` :** 한 줄, 여러 줄로 배치할 지를 결정
    - **`justify-content`** - 컨테이너 주축을 기준으로
        - `flex-start`: 왼쪽 정렬
        - `flex-end`: 오른쪽 정렬
        - `center`: 가운데 정렬
        - `space-between`: 요소들 사이에 동일한 간격
        - `space-around`: 요소들 주위에 동일한 간격 (양끝에도 간격을 줌)
    - **`align-items`** - 컨테이너 교차 축을 기준으로
        - `flex-start`: 꼭대기로 정렬
        - `flex-end`: 바닥으로 정렬
        - `center`: 세로선 상의 가운데로 정렬
        - `baseline`: 시작 위치에 정렬
        - `stretch`: 요소들을 컨테이너에 맞도록 늘림
    - **`align-content`** :  `flex-wrap:wrap` 인 상태에서 사용
    - **`align-self`** : 개별 요소에만 적용할 수 있는 align-items
    
- **flex-item(아이템)에 사용하는 속성**
    - **단축속성 `flex`** : flex-grow, flex-shrink, flex-basis
        
        ```css
        flex: 1 1 100px;
        ```
        
        - `**flex-grow**` : 아이템이 컨테이너 내부에서 할당할 수 있는 공간의 정도(비율)
        - `**flex-shrink**` : 아이템의 크기를 고정하거나 축소할 때 사용, 기본값은 1이다.
            - ‘0’을 줄 경우 줄어들지 않고 컨테이너 밖을 벗어날 수 있다.
        - `**flex-basis**` : flex-item의 초기 크기
            - px이나 em 등의 단위값을 사용하며, 그 외 0 말고는 다른 상숫값을 사용할 수 없다.
            - width/height 속성과 달리 **내부 콘텐츠에 따라** 크기가 가변적, 유동적으로 변할 수 있다.
            - `flex-basis` 값이 적용되어있다면 row일 경우 width 값이 무시, column일 경우 height 값이 무시된다.
    - **order**
        - flex-item들의 순서를 수의 크기로 결정. 수가 작을수록 더 우선순위
        - 음수`-`도 사용 가능

- **grid**
    - 웹페이지를 위한 **2차원 레이아웃(x축 & y축)** 시스템
        
        ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2618e9d9-3745-456d-80df-242b2f303cd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T091643Z&X-Amz-Expires=86400&X-Amz-Signature=3b3313734f3ebf0038a9e0d677ca091cf4d1c501061d2d7026ba8162993e6f1e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)
        
    - 부모요소를 **grid-container** 자식요소를 **grid-item** 이라고 부른다.

    - **grid** 컨테이너 : 그리드의 가장 바깥 영역
    - **grid** 셀 : 그리드의 한 칸 (개념적인 정의)
    - **grid** 아이템 : 그리드 컨테이너의 자식 요소들
    - **grid** 트랙 : 그리드의 행(row) 또는 열(column)
    - **grid** 트랙 : 그리드의 - 행(row) 또는 열(column)
    - **grid** 넘버 : 그리드 라인의 각 번호
    - **grid** 라인 : 그리드 셀을 구분하는 선
    - **grid** 갭 : 그리드 셀 사이의 간격(gap)
    - **grid** 에어리어 : 그리드 셀의 집합

- **grid-container**에 사용하는 속성
    
    ```css
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 200px 100px;
    
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    ```
    
    <aside>
    💡 **새로운 단위 `fr`**
    - fraction :분수
    - 컨테이너를 분할해줍니다. 
    - grid 컨테이너 안에서 트랙의 비율을 지정해주는 **유연한 길이** 단위입니다.
    - 1fr 1fr 1fr은  1:1:1 의 비율을 의미합니다.
    
    </aside>
    
    - flex와 달리 이렇게 컨테이너 설정을 해놓고 아이템 개별로 또 width를 설정할 수 있기에 직관적이고 구분하기 쉽다.
        
        ![Untitled](%5BTIL%20230308%5D%20-%20HTML%20CSS%20(5)%20c9876b09f7734207bee43abf42412063/Untitled%207.png)
        
    - **grid-container - 단위 대신 쓰는 함수**
        - repeat()
            - `repeat(반복 횟수, 반복할 값)`
            - row 혹은 column 방향으로 grid-track 의 사이즈를 좀 더 간단한 형태로 표현하도록 도와주는 CSS 함수입니다.
        - minmax()
            - `minmax(최소값, 최대값)`
            - 그리드에서 최소와 최대 사이의 범위를 설정하는 함수.
            - min 보다 크거나 같고, max 보다 작거나 같은 크기 범위를 정의합니다.
        - auto-fill & auto-fit
            - repeat() 함수를 사용할 때, 반복되는 카운트를 설정하지 않고 컨테이너의 넓이에 따라 **가능한 많은** 그리드-컬럼을 배치하고 싶을 때 사용
            - `auto-fill`:  가능한 많은 셀들을 만들어 낼려고 합니다. 빈공간이 생겨요
            - `auto-fit`: 그리드 컨테이너 내부에 공간이 남을 경우, 그 공간을 각 셀들이 나눠 갖는다.
    - **gap** - 셀과 셀사이의 간격을 설정할 때 사용 할 수 있는 속성, 복잡한 레이아웃 안에서 마진 대신 편리하게 간격을 설정

- **grid-item에 사용하는 속성**
    - `**grid-area`** - 숫자로 설정하기
        
        순서대로 `grid-column-start`, `grid-row-start`, `grid-column-end`,  `grid-row-end`
        
        ```css
         grid-area: 1/1/2/4;
         grid-area: 2/1/3/span 3; /*span 3 = grid-row 간격이 1~4만큼*/
        ```
        
        grid-template-areas를 사용하는 게 더 직관적이고 편하긴 하다~
        
        - **`grid-template-areas` / `grid-area`**
            
            [https://codepen.io/stronger-deer/pen/MWqovXw](https://codepen.io/stronger-deer/pen/MWqovXw)
            
        
    

# 오늘의 문제 ⚠️

---

- `**flex-grow`, `flex-shrink`, `flex-basis`** **헷갈려!**
    - 항상 flex : 1 이렇게만 써 왔는데 3개의 속성이 포함된 단축 속성이라는 것을 이번에 알게 되었다.
    - 내가 알던 비율로 설정하는 게 flex-grow이고, 아이템을 고정하거나 축소할 때 사용하는 데 shrink, width/height 처럼 설정할 수 있지만 **내부 콘텐츠에 따라** 크기가 가변적, 유동적으로 변할 수 있는 flex-basis
- `**align-items : stretch` 는 기본값인가?**
    
    기본값이 맞다! 설정 안해도 되어 있다~ 
    
    아이템에 값을 따로 설정해 놓지 않으면 기본적으로 컨테이너 크기에 맞추어 위아래/좌우로 쭉 늘어나 있음
    

- `**grid-auto-flow : dense` 는 어떤 설정일까?**
    - grid-area는 기본적으로 배경이 채어지게 되어 있는데, 이 설정을 grid-area사용 없이 할 때는 grid-template-column으로 바꾸고 container에 `dense`설정을 하면 좋다.
    
- **grid 셀`cell` 안에 따로 정렬을할 수 있을까?**
    
    ```css
    align-items: center;
    justify-items: center;
    ```
    
    컨테이너`container`에 이런 속성을 줘서 가운데 정렬을 할 수 있고,
    
    아이템`item`에 아래와 같은 속성(self)으로 개별적으로도 지정할수 있다~
    
    ```css
    align-self : center;
    justify-self: center;
    place-self: center;
    ```
    
    배경을 유지하면서 텍스트 자체를 가운데 정렬하고 싶다면 
    
    `item`에 flex 속성을 사용해 볼수도 있습니다! 여러가지 방법을 시도해보자~
    
- grid-area 관련 질문

![https://media.discordapp.net/attachments/1073462797645656110/1082944574848254022/00.png?width=1045&height=993](https://media.discordapp.net/attachments/1073462797645656110/1082944574848254022/00.png?width=1045&height=993)

# 궁금한 내용 / 부족한 내용 🧐

---

- 개구리 플렉스 게임 해보기 (✅)
    
    [Flexbox Froggy](https://flexboxfroggy.com/#ko)
    
- 그리드 가든 게임 해보기()
    
    [Grid Garden](https://cssgridgarden.com/#ko)
    
- Grid 정리
    
    [CSS Grid 완벽 가이드](https://heropy.blog/2019/08/17/css-grid/)
    
    [이번에야말로 CSS Grid를 익혀보자](https://studiomeal.com/archives/533)
