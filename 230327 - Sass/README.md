# 🌳 오늘 하루 정리

Sass를 배운 날. 전날 늦게까지 미리 인강을 들어 놓은 보람이 있다.

어제까지만 해도 Sass가 뭔지 전혀 몰랐는데 알고보니 재밌고 진자 띠용할 정도로 유용한 친구였다.🤩 CSS에서 계층구조를 볼 수 있다니…!

Sass를 지금 당장 깊이 익히는 것보다 취준하면서 공부해 놓으라는 강사님 말씀에 따라 좀더 파보기 보단 지금은 자바스크립트에 조금 더 집중하는 것으로…사실 어제 인강 들으면서도 느낀 것이 자바스크립트 문법이랑 비슷한 부분이 많아서 자바스크립트를 많이 배워놓고 보면 좀더 쉽게 이해하며 공부할 수 있을 것 같다.

일단 내일 자바스크립트가 두려워…작년에 멋사동아리 하면서 강의를 이미 들어 봤음에도 더 두려워….진짜 당시에는 ???의 연속이었는데 이번에는 어떨지 허허 내일은 정말 빡공 해야겠구만요

# 오늘 공부한 내용 🌼

- Sass

# 새로 알게된 내용 💡

- **Sass를 사용할 수 있는 방법은 두가지 Rails, Node**
  - Vs Code에서 Rails Sass를 사용한다.
  - Sass를 나중에 다루게 될 때 Node Sass가 더 편하니 사용을 권장!
- **주석** - 한 줄 주석(`//`)은 컴파일해도 CSS에 안들어간다. 들어가게 하려면 두줄 두석(`/**/`)을 사용!
- **중첩(Nesting)** - html의 계층구조 방식과 동일하게 CSS를 중첩하여 작성
  - 선택자 Nesting
  - 속성 Nesting
  - ampersand 앰퍼샌드 - 상위 부모 선택자를 가리킴
- **변수**
  - 선언 `$`
  - 사용 type `numbers, strings, color, booleans, lists, maps, null`
  - list 관련 내장함수 - `nth(list, n)` 기억하기
  - map관련 내장함수- `map-get(map,key)` 기억하기
  - 지역변수 선언 가능 (클래스 내 변수 선언) - but 권장하지 않습니다.
  - 연산자 사용 가능
  - 논리 연산자
  - 산술 연산자
    +) 막간 AND OR 설명
    true = 1, false = 0, and = 곱하기, or = 나누기
    `true and false ⇒ false` (**1\*0 = 0**)
    `true or false ⇒ true` (**1+0 = 1**)
- **Mixin**

  ```jsx
  @mixin 이름(매개변수) //생성
  @include 이름(인수)  //사용
  ```

  선택자 내부에서 사용하지 않는 것을 권장

  - 기억해야 할 중요한 부분 - if문과 기본값 설정

  ```
  @mixin box($value) {
    width: 100px;
    height: 100px;

    @if ($value == 'circle') {
      border: 1px solid black;
      border-radius: 50%;
    }

    @if ($value == 'rect') {
      border: 1px solid black;
      border-radius: 10%;
    }
  }

  // blue
  .card {
    @include box('circle');
    background-color: blue;
  }

  // red
  .profile {
    @include box('rect');
    background-color: red;
  }
  ```

- **Mixin과 Extend의 차이**
  - 사실 없다.
  - Extend는 관계 있는 선택자들의 동일한 소스코드 적용시 사용하고,
  - Mixin는 ~~(관계 없는) 선택자에서 조금 다른 스타일을 적용할 때 사용한다~~고 되어 있는데, 사실 **관계 있는 선택자에서도 사용가능**하기 때문.
