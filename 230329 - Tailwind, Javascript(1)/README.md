# 🌳 오늘 하루 정리

Tailwind를 배웠다!

flex,grid가 태그 내 클래스 설정만으로 뚝딱 이뤄진다는 것이 너무 편했고, 미디어쿼리 역시 몇단어 추가하기만 하면 뚝딱이라 Sass보다 더 좋아하게 될지도… 실습 때 20분만에 틀을 만드는 시간이 있었는데 각 속성에 대한 단어들이 가독성이 좋아 기억하기가 쉬워서 단어를 생각해내기가 쉽고 만들기도 편했다. 처음 접해보는 것을 거부감 없이 오히려 관심을 가지며 받아들일 수 있었다는 것에 기쁘다.

그리고 또 오늘은 종찬님 마지막 특강🥹 + 과제 검사(?) 받는 날. 기억에 남는 코멘트는 디자인 하셨냐는 칭찬을 들었돠b 다른 분들 결과물 보면서 다 적용시키고 싶어졌다…특히 카드에 hover 효과 준 분들 센스가 너무 좋타 난 왜 그 생각을 못했지 하고 이마를 탁 치면서 배워간 시간.

회고를 쓰다 문득 이런 생각이 들었다. 새삼스럽지만 벌써 5주째 꾸준한 생활을 하고 있는데,
내가 과연 꾸준히 할 수 있을지 가늠이 안되는 시작이 어렵지, 하루하루 해 나가다 보면 어느새 꾸준한 과거가 ‘남겨진다’는 것. 그게 또 오늘 하루를 열심히 보낼 원동력이 되고 결국 중요한 것은 ‘오늘’이라는 깨달음을 얻는 요즘인 것 같다.

그래서 항상 미래를 걱정하던 나였지만? 요즘 드는 고민은 앞으로도 잘 할 수 있을지 없을지보다도 점점 커지는 욕싐과 열정에 반비례한 나의 컨디션…(!) 점점 바빠지겠지만 몸과 마음 모두 지치지 않도록 자주 나가고 운동도 열심히 해야겠다고 생각하며...오늘 회고 끝!

# 오늘 공부한 내용 🌼

- Tailwind
  [Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/)
  - 클래스명을 따로 지정하지 않아도 된다!
  - CSS 왔다갔다 하며 설정하지 않아도 된다! HTML파일에서 모두 해결!
  - 유지보수에 용이하다!

## 자바스크립트

- 단기간(10일)만에 만들어졌다.
- 고칠 수 없는 오류가 있다.
- let보다 const가 훨씬 중요하다. (var는 안씀)
- 자바스크립트를 넣을 수 있는 곳은 단 세 곳 - 내부, 외부, 인라인
- ECMA Script(에크마 스크립트) - 표준화된 자바스크립트

# 새로 알게된 내용 💡

## Sizing

- **padding, margin**
  - `pt-4` `mt-4`

<aside>
💡 여기서의 ‘4’는 %/px값이 아닌 수치로, **4 * 0.25rem = 1rem** 이라는 뜻이다.
px가 작성되지 않은 값은 모두**`*0.25rem`**을 준 **rem값**에 해당한다.

</aside>

- **width**
  - `w-96`
  - `96 * 0.25rem` 이라는 의미
- **space-between**
  - `space-y-1` `space-x-1` : 각 요소의 간격
    ```jsx
    				margin-left: 0.25rem /* 4px */ - space-x-1
    				margin-top: 0.25rem; /* 4px */ - space-y-1
    ```
  - css에서는 flex만의 속성이나 여기선 flex 지정 없이 가능

## Color

- **text-color**
  - `text-gray-300`
- **background-color**
  - `bg-red-200` : red color 숫자가 높아질수록 진해짐

## box-shadow

- `shadow` : 그림자 (sm,md,lg,xl)

## text

- `text-xs`,`text-sm`,`text-base`,`text-lg`…

```html
text-xs text-sm text-base text-lg text-xl text-2xl
```

```css
font-size: 0.75rem; /* 12px */
line-height: 1rem; /* 16px */

font-size: 0.875rem; /* 14px */
line-height: 1.25rem; /* 20px */

font-size: 1rem; /* 16px */
line-height: 1.5rem; /* 24px */

font-size: 1.125rem; /* 18px */
line-height: 1.75rem; /* 28px */

font-size: 1.25rem; /* 20px */
line-height: 1.75rem; /* 28px */

font-size: 1.5rem; /* 24px */
line-height: 2rem; /* 32px */
```

## 임의의 값(albitrary value)

- 원하면 사이즈를 커스터마이징할 수 있다.
  - `text-[14px]`
  - `mt-[17px]`
  - `bg-[#ff0000]`

## flex

- `flex`
- `flex flex-col`
  ![image](https://file.notion.so/f/s/9ace331d-4109-4647-8259-6d5c3e818f76/Untitled.png?id=7407f7d8-d01a-4bfc-bb5a-c8b099249b7a&table=block&spaceId=3317110b-440d-483f-947a-2d0877613e61&expirationTimestamp=1680176484062&signature=iKVzGw9zIuDU588yY5fBJUEo4n_U5b1l8Fp_0MBzuPc&downloadName=Untitled.png)
- `flex flex-wrap`
  ![image](https://file.notion.so/f/s/1ddbff6b-93ea-49de-8ad6-9e49826040c8/Untitled.png?id=512a534e-f0f8-4404-9ba1-dbc898bd6a62&table=block&spaceId=3317110b-440d-483f-947a-2d0877613e61&expirationTimestamp=1680176460321&signature=wSDs1O1gloWQGZeR6WU-UYZhtXjdzF0uCnbPjwF26bM&downloadName=Untitled.png)
- `flex flex-row-reverse`
  ![image](https://file.notion.so/f/s/5cdf7d8f-0662-4c36-bd1e-a92b4606ee33/Untitled.png?id=7ef1ca3b-3d4a-44f1-8562-81958ab632db&table=block&spaceId=3317110b-440d-483f-947a-2d0877613e61&expirationTimestamp=1680176410297&signature=oMMorJn98xIr543QPwhO7T6KyOC46yFrW3FgEjQPnH8&downloadName=Untitled.png)
- gap 설정 - `gap-6`

```css
				justify-content: center        - justify-center
        justify-content: space-between - justify-between
        align-items: flex-start        - items-start
        align-items: center            - items-center
        align-self: auto               - self-auto
        align-slef: flex-start         - self-start
        align-slef: flex-end           - self-end
        flex: 1 1 0%                   - flex-1
        flex: 1 1 auto                 - flex-auto
        flex: 0 1 auto                 - flex-initial
        flex: none                     - flex-none
				gap: 1px                       - gap-px
				column-gap: 1px                - gap-x-px
				gap: 0.25rem                   - gap-1
				negative-margin : -0.25rem     - -ml-1
```

### 접근성과 모바일 고기

- `md:` - 데스크톱 크기
- `sm:` - 패드 크기
- **기본값** - 모바일 크기

```html
<div class="flex md:flex-row flex-col border-4 border-red-300 m-3"></div>
```

```html
<div
  class="w-16 h-16 bg-red-300 sm:w-20 sm:h-20 sm:bg-blue-300 md:w-32 md:h-32 md:bg-green-300"
></div>
```

## grid

- `grid`
- `grid-cols-1` `grid-rows-1`

## peer-cheked

- 클릭 시 스타일 변경

```html
<label>
  <input class="sr-only peer" name="size" type="radio" value="xs" checked />
  <div
    class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white"
  >
    XS
  </div>
</label>
```

# 궁금한 내용 부족한 내용 🧐

- Tailwind flex/grid 연습하기
