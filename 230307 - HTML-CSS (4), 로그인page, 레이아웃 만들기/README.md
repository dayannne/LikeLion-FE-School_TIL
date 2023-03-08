# 🌳 오늘 하루 정리

오늘 실습이 많아 재밌었고 시간이 금방갔다.

레이아웃은 재밌다…😋 하지만 div만 연발하다 웹접근성을 이용한 article, section, nav를 적절히 고려하려니 고민이 많이 되었다. 하나하나 적합한 사용방법을 익혀야 겠다.
실습문제 더 풀어보고 싶다…!

# 오늘 공부한 내용 🌼

- **Layout** - table로 레이아웃을 짜던 때도 있었다… > frame > div > flex, grid
- **Sections** - header, footer, nav, main, article, section, aside, hr (스타일 용 - div, span)
- **HTML** **레이아웃 구조 짜보기**
<img src="https://user-images.githubusercontent.com/105140201/223361880-47819a97-1a87-4f56-bc72-efefaccebc9a.png" width=50%>
<img src="https://user-images.githubusercontent.com/105140201/223361924-a627292f-3f71-4162-aad2-d4a2ed2357d1.png" width=50%>
<aside>
"💡  HTML 구조를 짜는게 너무 막연하다면 
사용자에게 뭔가를 알려주는 소설이나<br> 블로그 포스트,
목차를 쓴다고 생각하면서 작성해보세요🙂”

ex) 레이아웃은 확실히 관공서 페이지가 잘 되어있다.<br>
그에 반해 삼성, 애플 페이지의 접근성은 알고보면 목차 등 마이너스가 존재!😂<br>
→ 면접 기업 웹 페이지를 분석해 입사한 사례가 있다?!

</aside>

- **float**

1. **float로 레이아웃 만들기**

<img src="https://user-images.githubusercontent.com/105140201/223362377-0fd52698-dd46-4dc4-97aa-8d09e202804a.png" width=50%>



2. **로그인 페이지 만들기**

![image](https://user-images.githubusercontent.com/105140201/223362523-2c2a9976-10b1-4393-8d57-6f1faf80985f.png)

- **flex**

# 새로 알게된 내용 💡

- **Layout - Sections**
  - `article`
    - (따로) 독립적으로 구분, 챗봇처럼 제거해도, 어느 사이트에 있어도 상관없는
  - `section`
    - (묶음) 앞뒤 문맥과의 흐름이 있음, 구분지으면서도 연결성이 필요할 때 사용
    - 제목 요소를 자식으로 포함해야 함
  - `aside` - 문서의 주요 내용과 간접적으로 연관된 부분, 각주/광고/배너
  - `hr` - 구분선 ,<p> 내에서 사용하지 않는다!
- **float**
  - float 해제하기 - `clear:both`
  - 자식 요소들이 모두 float 속성을 가지게 되면, 컨테이너 요소의 높이에 자식 요소들의 높이가 포함되지 않는다.
    - 부모에게 (강제로) 높이 값 미리 지정하기
    - 자식에게 `overflow:hidden` 주기 - 넘치는 요소들이 없어지거나 잘리는 문제가 생길 수 있다.
    - [가장 많이 쓰는 방법] clear-fix 방법 - 부모 요소에 `::after` 사용하기
    ```css
    부모::after {
      /* 태그 뒤에 내용이 빈(content: '') 블럭을(display: block) 만들고 */
      content: '';
      display: block;
      /* float: left를 초기화 시키겠다는 뜻이다.*/
      clear: left;
    }
    ```
- **숨김 처리**
  - `display:none` or `visibility:hidden` - 스크린리더가 읽지 않음.
  - `width:0px; height:0px;` 0픽셀 조절 방법 -스크린리더가 읽지 않음.
  - `text-indent: -9999px;` 콘텐츠를 왼쪽으로 밀어내는 방법 - 스크린리더가 읽음.
  - `clip: rect(1px, 1px, 1px, 1px);` `clip-path: inset(50%);`
  - CSS 클립 방법 ‘**a11y -hidden’**
    - `clip`은 이제 더이상 권장되지 않고 최신 속성인 `clip-path`로 대체되었다.
    - clip은 구 버전의 브라우저 대응을 위해서, clip-path는 최신 버전의 브라우저를 위해서 두개다 기입한다.
    ```css
    /*a11y-hidden*/
    .sr-only {
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
    }
    ```
- **flex**
  - 1차원적 레이아웃(x축 or y축)을 위해 사
  - 부모 요소를 `flex-container` 자식 요소를 `flex-item` 이라고 부른다.
  - justify-content : `flex-start`, `flex-end`, `center`, `space-between`, `space-around`

# 궁금한 내용 / 부족한 내용 🧐

- **Sections** - 다시 훑어보기
- flex & grid - 미리 예습 해보기
  [flexngrid](https://flexngrid.com/)
