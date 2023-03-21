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

![image](https://user-images.githubusercontent.com/105140201/226617926-415fb51b-b666-4d69-8ef0-9089c5718a06.png)
![image](https://user-images.githubusercontent.com/105140201/226618080-d8fdd43c-9e35-47dd-980b-49fba532ffda.png)


# 오늘의 문제 ⚠️

- 배경 이미지를 가상요소로 위치까지 잘 설정했는데 나타나질 않는다?

![image](https://user-images.githubusercontent.com/105140201/226617976-3c6fd90b-5f2b-4c0a-8f86-a79ff76bcb25.png)
![image](https://user-images.githubusercontent.com/105140201/226618024-7831c637-050d-4aa2-91f4-ac4b00f317a8.png)


`display:inline-block` 을 넣어보고 `background`단축 속성 내 `position`설정 체크할 것
