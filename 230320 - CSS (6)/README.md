# 🌳 오늘 하루 정리

모두가 꼬박 걸려 만든 밴딩머신을 1시간 만에 만드실 수 있다는 강사님…

순간 주눅든 모두에게 다급해지는 혜진님의 토닥임이 웃겼다ㅋㅎㅎ…🥲

벌써 다음주면 자바스크립트에 들어간다니 그리고 한달차라니...실감이 안나는 걸....?!
진자 첫날부터 느낀 거지만 벌써 아쉽군요...1달차가 되었을 때의 나는 HTML/CSS를 깔끔히 보내주고 반갑게 자바스크립트를 맞을 준비가 되어 있기를

# 오늘 공부한 내용 🌼

- 검색엔진 최적화(SEO)
- 파비콘 만들기 - 페이지 타이틀 옆에 붙는 아이콘
- 영화 목록 만들기

# 새로 알게된 내용 💡

- 검색엔진 최적화(SEO) : 최상단에 노출될 수 있도록 웹사이트에 적용하는 것

  - 메타 태그
  - 마크업 적절히 활용하기
  - robot.txt 파일작성
  - sitemap.txt 파일 작성 - 웹사이트 내 모든 페이지의 목록을 나열한 파일
  - Lighthouse 검사

- 파비콘 만들기

[ConvertICO.com - Convert PNG to ICO and ICO to PNG files](https://convertico.com/#google_vignette)

위와 같은 페이지에서 이미지 파일을 ico파일로 변환하여 다운 받은 후,

파비콘을 집어넣은 HTML 파일 <head>태그 안에 다음과 같이 삽입한다.

```jsx
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
```

- 범위 이미지 주기

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c96c1f30-b605-4574-9567-9a1476b51fb8/Untitled.png)

# 오늘의 문제 ⚠️

- 배경 이미지를 가상요소로 위치까지 잘 설정했는데 나타나질 않는다?

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec0b49e6-3b16-450d-b3cc-1f924bf02c6a/Untitled.png)

`display:inline-block` 을 넣어보고 `background`단축 속성 내 `position`설정 체크할 것
