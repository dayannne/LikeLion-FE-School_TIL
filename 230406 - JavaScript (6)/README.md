# 🌳 오늘 하루 정리

오늘 아쉬운 점이 하나 있다면 오늘 회고조 모임 시간에 발표를 맡았는데 나의 발표…가 정말 아쉬웠다.

속으로 이게 아닌데…이게 아닌데 하다가 발표가 끝났고??? 대학생활이 끝나면서 뭔가 원점으로 초기화된 건지…? 다른 조원분들에게 부끄럽기보다 스스로에게 부끄러웠고 그래서 오히려 앞으로 더 발표 기회를 많이 만들어서 개선해 보고 싶다는 생각이 들었다. 진짜 졸업해도 여전히 말하는 감자예요..😭

저녁에 동료분이 직접 여신 특강을 들었는데 긴장하시면서도 Sass를 뚝딱! 다루시는 모습이 멋졌고, 진짜 유익했다. figma부터 교안까지 제대로 준비해 주셔서 따라하면서 완성해볼 수 있었다. 나도 사실 HODU 페이지를 만들려할 때 Sass를 사용...해보고 싶었으나 포기하고 그냥 CSS로 만들었는데, 만약 Sass를 붙잡고 만들었다면 결과물을 제대로 만들 수 있었을런지..특강으로 mixin 설정이 제일 중요함을 알았는데, 더 공부하고 적용해봐야겠구나 생각했다. 나도 멋즤게 Sass를 활용해보는 날이 올 수 있기를 꿈꿔보는...시간이었다😂
![](https://velog.velcdn.com/images/day_1226/post/9d4e9620-4fa5-4f81-9533-2caf9bc2f3a0/image.png)

이번주도 수고 많았고, 주말에 잠도 많이 자고 틈틈이 쉬며 충전하고 오자💊

# 오늘 공부한 내용 🌼

---

- vs Code 단축키
- JavaScript
  - switch
  - 반복문 for + 무한루프
  - 반복문 while + continue/break/label
  - 전개구문
- Sass로 자기소개 card 만들기 특강

# 새로 알게된 내용 💡

---

- vs Code단축키
  - 여러 줄 복붙하고 싶을 때 - `Art + Shift + **위아래 화살표**`
  - 자동정렬 - 전체 선택 후 `ctrl - k` `ctrl - f`
  - 같은 단어 한번에 선택 - `ctrl + shift - L`
  - 터미널
    - `cd 폴더명` : 파일위치 이동 (cd 폴더명/폴더명 하면 두단계 이동 가능)
    - `cd ..` : 전 상위 폴더 이동
    - `mkdir` 폴더명 : 폴더 생성
    - `touch 파일명 파일명` : 파일 생성
    - `ls` : 현재 폴더 파일 목록

## 조건문 - switch

- switch의 장점은 가독성 (속도는 X)
- 매 case마다(default에도) `break`를 넣어주는 것을 잊지 말아야 한다.
- 순차적으로 탐색하면서 조건에 맞는 case를 찾는다.
  - 조건에 맞는 case로 바로 jumping하는 것이 아니다.
- `default`가 항상 필수는 아니다.
  - case 값을 벗어나는 경우가 나올리 없는 경우 생략할 수 있으나(요일값 같이 예외없이 조건이(0-6)정해진 경우), 견고한 코드를 위해서는 써주는 것이 좋다.

## 반복문

### for

- for문 내에 선언되는 변수에는 `let`을 생략하면 안된다! 변수가 전역으로 생성이 되어버린다.
  ```
  ~~for (i = 0; i < 10; i += 2)~~
  ```
- 절대 작성해선 안될 `무한루프` 코드
  ```jsx
  ~~for(;;){
  console.log('실행하지 마세요.')
  }~~
  ```
  - 이러한 형식으로는 활용할 수 있다 - UP DOWN 게임!
    ```jsx
    let answer = Math.floor(Math.random() * 100);
    // 프로그래밍 언어에서 random은 seed라는 값을 주면 동일한 랜덤값이 나오는 수학 수식입니다.
    // ~~(Math.random()*100)
    let count = 0;

    for (;;) {
      count += 1;
      let userInput = parseInt(window.prompt('값을 입력해주세요!'));
      if (answer > userInput) {
        window.alert('UP!');
      } else if (answer < userInput) {
        window.alert('DOWN!');
      } else if (Number.isNaN(userInput)) {
        window.alert('다시 입력하세요!');
      } else {
        window.alert('Correct!');
        break;
      }
    }

    console.log(`${count}번째 맞추셨습니다!`);
    ```
- 문제 - <다음 user의 나이 평균을 구하세요>
  ```
  //
  let user = [
    {
      _id: '642e3071c61a23c70ae6076b',
      index: 0,
      age: 31,
      name: 'Hicks Garza',
      gender: 'male',
    },
    {
      _id: '642e3071ecd6f90a87d64731',
      index: 1,
      age: 32,
      name: 'Ayers Harrington',
      gender: 'male',
    },
    {
      _id: '642e3071cef9ddc131f047fb',
      index: 2,
      age: 39,
      name: 'Lamb Adams',
      gender: 'male',
    },
  ];

  let s = 0;
  for (let i = 0; i < user.length; i++) {
    s += user[i]['age'];
  }
  console.log(s / user.length);
  ```
  - 견고한 코드로 만들어 본다면 어떻게??
  1. age가 문자였다면?
  2. age가 입력되지 않았다면?
  3. age 필드가 없다면?(MongoDB의 경우)
  ```jsx
  let s1 = 0;
  for (let i = 0; i < user.length; i++) {
    s1 += parseInt(user[i]['age']);
  }
  // console.log(Math.floor(s / user.length))
  console.log((s1 / user.length).toFixed(2));
  ```

### while

while 문은 주어진 조건식이 참일 때 반복적으로 실행되는 반복문

- **do-while 반복문**
  do while 문은 참이든 거짓이든 일단 do를 먼저 실행하고 while을 반복한다.
  ```jsx
  // 기존 코드
  let num = 0;

  while (num < 11) {
    document.write(num, '<br>');
    num += 1;
  }

  // 바뀐 코드
  let num = 0;

  while (num < 11) {
    document.write(num, '<br>');
    num += 1;
  }
  ```

### **break & continue**

- `**break**`
  - 조건에 따른 종료 이전에 사용자의 개입으로 좀 더 빠른 종료를 원하면
    `break`를 사용하여 반복문에서 나올 수 있다.
  - `break`문으로 반복문이 종료되면 그 다음 코드가 차례로 실행
- `**continue**`
  - 반복문을 완전히 빠져나가는 `break`와 다르게 반복문의 다음 반복으로 이동
  - 한 반복 안에 남은 코드들을 뛰어넘어 다음 반복으로 이동하게 된다.

### label

label은 특정 코드 블록에 이름을 지정하는 방법

- 특정한 곳으로 ‘점프’하게 만든다.
- 그러나 가독성을 해치므로 잘 사용하지 않는다.
- 예시 - outer라는 `label` 을 사용해 보자
  ```jsx
  outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i + j === 3) {
        break outer;
      }
      console.log(i, j);
    }
  }
  ```
  if문을 통해 `i + j` 의 결과가 3이 되는 순간 바깥쪽 outer for문이 종료되면서 내부 for 문까지 한꺼번에 종료된다.

## 전개구문

배열이나 객체와 같은 데이터 구조를 확장할 때 사용하는 문법

이를 통해 배열이나 객체를 쉽게 복사하거나, 새로운 배열이나 객체를 생성할 수 있다.

### 배열의 전개 구문

```jsx
const 과일들 = ['사과', '파인애플', '수박'];
const 생선들 = ['조기', '갈치', '다금바리'];
const 합치면 = [...과일들, ...생선들]; // ['사과', '파인애플', '수박','조기', '갈치', '다금바리']
```

### 객체의 전개 구문

```jsx
const 위니브1 = { 개리: 1, 빙키: 2 };
const 위니브2 = { 라이캣: 2 };
const 위니브3 = { ...위니브1, ...위니브2 }; // {개리: 1, 빙키: 2, 라이캣: 2}
```

이미 있는 key의 value값은 내용이 변경되어 전개다.

```
// 객체의 전개구문 2
const 위니브임직원 = {
  개리: '재직중',
  빙키: '재직중',
  라이캣: '재직중',
  뮤라: '재직중',
  해골왕: '재직중',
};

const 위니브임직원2 = {
  ...위니브임직원,
  라이캣: '휴가',
  해골왕: '퇴사',
};

console.log(위니브임직원2);
/*
{  개리: '재직중',
  빙키: '재직중',
  라이캣: '휴가',
  뮤라: '재직중',
  해골왕: '퇴사',}
*/
```

## 디스트럭쳐링 = 구조분해할당

```jsx
for (const [i, j] of [
  [1, 2],
  [3, 4],
  [5, 6],
]) {
  console.log(i, j);
}
```

```jsx
const 위니브임직원4 = {
  개리: '재직중',
  빙키: '재직중',
  라이켓: '재직중',
  뮤라: '재직중',
  해골왕: '재직중',
};
Object.entries(위니브임직원4); // key와 value를 쌍으로 출력

for (const [i, j] of Object.entries(위니브임직원4)) {
  console.log(위니브임직원4);
}
```
