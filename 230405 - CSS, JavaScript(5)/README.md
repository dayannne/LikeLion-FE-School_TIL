# 오늘 공부한 내용 🌼

- CSS Sprite 기법

# 새로 알게된 내용 💡

## CSS Sprite 기법

여러 이미지 파일을 하나의 이미지 파일 안에 모아놓아 이미지로드 부담을 줄이는 방법

- 단, 변경시 유지보수가 어렵다. 넣은 이미지가 많아지면 계속 늘리는 것보다 새로 만들어 짜는 것이 좋다.

[CSS Sprites Generator Tool | Toptal®](https://www.toptal.com/developers/css/sprite-generator/)

## 레티나 디스플레이

특정한 시야 거리에서 인간의 눈으로는 화소를 구분할 수 없는 화소밀도(300PPI가 넘음)를 가진 애플 LCD제품의 브랜드

- PPI - 1인치 안의 픽셀 개수, 단위 길이당 얼마나 조밀하게 표현되는가
- 레티나(고해상도 화면)로 넘어오면서 논리픽셀(css에서 표현하는 화소의 기본 단위)과 물리픽셀(디바이스가 실제로 처리할 수 있는 화소의 기본 단위)의 차이가 발생하는데, 브라우저는 css에서 정의한 픽셀만큼 이미지를 렌더링 해야하기 때문에 원래는 물리픽셀에 맞게 렌더링된 이미지가 논리픽셀 만큼 커져버리게 됩니다.
- 기존 노트북과 레티나 노트북을 비교했을 때, 레티나 화면에서 이미지가 흐려보이는 현상이 발생한다.
- 레티나에 대응하는 유일한 방법은 더 큰 이미지를 사용하는 것이다.

![](https://velog.velcdn.com/images/day_1226/post/e4fc1712-8d4b-4688-ab93-e08e6c7c435c/image.png)
![](https://velog.velcdn.com/images/day_1226/post/db0a42ac-e724-4113-9d6c-11c38e4482c6/image.png)

## 반응형 백그라운드 이미지

- 비법은 size 설정이 아닌 `position` 설정!
- `background position : **center**`

```jsx
background: url(""https://i.postimg.cc/Wzx86CnB/didi-9.jpg") center /cover no-repeat;
```

[https://codepen.io/Da-Youn/pen/QWZLaRo](https://codepen.io/Da-Youn/pen/QWZLaRo)

## 반응형 동영상

- _많은 개발자들이 잘 모르는 CSS 매직! `ㄴㅇㄱ`_
  ⇒ _`padding-top`, `padding-bottom` 속성의 `%` 값은 **부모 요소의 넓이**에 비례한다. (종횡비)_

<aside>
💡 *예를 들어 부모의 이가 1200px 이라면 
자식요소의 padding-top=50% 의 값은 600px 와 같다.*

```css
.cont-video {
  position: relative;
  padding-top: 56.25%;
}
```

</aside>

- `vedio`

```css
<video class="full-screen-vid" controls autoplay muted loop src="nextlevel.mp4"></video>
```

- `iframe`

```css
<iframe class="video-next-level"
            src="https://www.youtube.com/embed/4TWR90KJl84?autoplay=1&mute=1&loop=1&playlist=4TWR90KJl84&controls=1"
            title="YouTube video player" frameborder="0" allowfullscreen></iframe>
```

## 조건문

<aside>
💡 문제

1. 성적이 90점 이상이면 "A",
2. 80점 이상이면 "B",
3. 70점 이상이면 "C",
4. 60점 이상이면 "D",
5. 그 외에는 “강해져서 돌아와라”를 출력합니다.

</aside>

실무에서는 예외처리가 중요하다.

```
const score = parseInt(prompt("성적 입력하세요", "성적"));
if (score > 100) {
    alert("값이 너무 커요!")
} else {
if (score >= 90) { console.log("A") }
  else if (score >= 80) { console.log("B") }
  else if (score >= 70) { console.log("C") }
  else if (score >= 64440) { console.log("D") }
  else { console.log("강해져서 돌아와라") }
}
```

```
const score = parseInt(prompt("성적 입력하세요", "성적"));
   (score >= 90) ? console.log("A") :
       (score >= 80) ? console.log("B") :
           (score >= 70) ? console.log("C") :
               (score >= 60) ? console.log("D") : console.log("강해져서 돌아와라")
```

# 오늘의 문제 ⚠️

- **백그라운드 이미지를 codepen 예제로 만들어보려고 했는데 codepen 에서 이미지가 안불러와지는 문제 발생**
  → 아래 이미지 호스팅을 돕는 사이트에서 이미지 주소를 변환시키니 해결되었다!
  [Postimages — 무료 이미지 호스팅 / 이미지 업로드 사이트](https://postimages.org/ko/)
