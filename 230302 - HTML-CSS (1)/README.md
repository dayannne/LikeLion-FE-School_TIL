# 📒 today’s I Learned

---

- HTML 기본 적인 용어&속성 - 그동안 당연한 듯 패스했던 `<!DOCTYPE html>` 이라던지, `charset`, `viewport`등 의미와 용도를 체크해 보았다.
- HTML 기본 태그 - 알고 있던 태그가 더 많았지만 새로운 태그들도 은근 많았고 쓰임새가 신기했다. 알고 있던 태그는 진짜 자세히 들여다 보는 시간이었다.
- css 선택자가 이렇게 많고 활용할 수 있는 방법도 생각보다 더 다양했다.

# 새로 알게된 내용

---

- **코드스니펫**
- **웹 접근성 - 스크린 리더** : 그동안 웹 접근성을 일반인 위주로만 생각했던 것에 반성…디자인대로 그대로 만들어 내는 것이 아니라 사용자 입장에서 정말 모든 사람들이 편하게 사용할 수 있는 웹을 만드는 것이 프론트엔드의 역할. 더 멋지다는 생각이 들고 그러한 점에서 다른 이들에게 도움이 될 수 있도록 기여하고 싶다. (대비 - 국민 사이트 네이버이지만 적합한 대비율을 지키고 있지 않다?)
- HTML 태그 - <wbr>, <code>, <pre>, <q>, <blockquote>, <cite>, <adress>, <mark>, <abbr>
- css - 특성 선택자`[]`, 복합 선택자 (자손[ ``], 자식[`>`], 일반 형제[`~`], 인접 형제[`+`])
- 단위 - vw, vh / vmin, vmax

이 문서는 HTML/CSS에 대한 내용을 다루고 있습니다. CSS는 Cascading Style Sheets의 약자로, 스타일을 적용할 때 우선순위에 따라 적용됩니다.
CSS를 적용하는 방법에는 인라인 방식, 내부 스타일, 외부 스타일, 다중 스타일 시트가 있습니다. 외부 스타일을 사용하는 것이 권장됩니다.
CSS 선택자에는 전체 선택자, ID 선택자, 클래스 선택자, 특성 선택자, 그룹 선택자, 자손 선택자, 자식 선택자, 일반 형제 선택자, 인접 형제 선택자가 있습니다.
CSS에는 상속되는 속성과 상속되지 않는 속성이 있습니다. `inherit`, `initial`, `unset` 키워드를 사용하여 속성값을 지정할 수 있습니다.

# ❓today’s Problem

---

- section 태그 안에 넣은 h1/h2 태그 크기가 동일하게 출력되는 이슈가 있었다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/104af269-6cc4-4d17-80da-812e2b6c5ba4/Untitled.png)

h1은 보통 header 안에 넣어 주는 것이므로 section 안에 쓸 일이 없기에 h1 크기가 다른 것이라고 했다.

- CSS 선택자
  [CSS Speedrun | Test your CSS Skills](https://css-speedrun.netlify.app/)
  선택자 테스트 해봤는데 한 3문제 빼고 다 힌트로 풀었다😋
  nth-child, first child, div > p 까지는 알겠는데
  `:not(클래스명)` `a[속성] ex) data-item` 은 생소하네
  앞으로 더 익숙해져 보자ㅎㅎㅎㅎ
