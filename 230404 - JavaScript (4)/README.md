# 오늘 공부한 내용 🌼
- 객체타입 - Array
- 객체타입 - Object
# 새로 알게된 내용 💡



0차원, 1차원, 2차원, 3차원, 다차원

```jsx
const a = 10; // 스칼라
const b = [10, 20, 30]; // 벡터
const c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 메트릭스
const d = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
]; // 텐서(3차원 이상의 다차원)
```

## 객체타입 - Array

- 값 자체가 아닌 값의 위치(배열 자체)가 저장됨
- const를 사용할 수 있다!
- 프로퍼티를 추가할 수도 있다.

### **push()와 pop()**

- `.push()` 배열의 끝에 요소를 추가
- `.pop()` 배열의 마지막 요소를 꺼내고(제거) , 꺼낸 값을 반환(return)

### unshift()와 shift()

- `.unshift()` 배열의 첫 번째 요소로 새로운 요소를 추가
- `.shift()` 배열에서 첫 번째 요소를 꺼내고(제거) , 꺼낸 값을 반환(return)

### splice()

- `.splice(start, deletecount, items)`
- `start`번째에, `deletecount`만큼 삭제하고, `items`를 넣겠다
- 메서드 체이닝은 불가능, splice는 추가 삭제를 진행한 array가 아닌 삭제된 값을 반환하기 때문

```jsx
const arr = [1, 2, 3];
arr.splice(1, 0, 4); // arr에 1번째에, 아무것도 삭제하지 않고, 4를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, [10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, [10, 20, 30]를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, ...[10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, 10, 20, 30); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.
```

### slice()

```jsx
let tip9 = [1, 2, 3, 4, 5];
console.log([tip9.slice(0, 2), 1000, tip9.slice(2, 5)]); // => 0: [1, 2] 1: 1000 2: [3, 4, 5]
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)]); // => [1, 2, 1000, 3, 4, 5]
```

### 원본을 건드리지 않고 값을 얻어내고 싶을 때

```jsx
let tip1 = [1,2,3,4,5]

// [1,2,3,4] 값과 [5]라는 값을 얻어내고 싶을 때
console.log([...tip1].pop())
let tip2 = [...tip1]
console.log(tip2.pop())
console.log(tip2)

```

### 다차원 배열에서 최솟값, 최댓값 찾기

- `flat()` 다차원 배열을 1차원 배열로 평탄화하는 메소드

```jsx
const tip = [
[1,2,3],
[4,5,6],
[7,8,9]
]

Math.max(...tip.flat()) // 괄호를 벗긴다.
```

- 3차원 이상으로 들어간다면?

```jsx
const tip = [
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]]
]

tip6.flat(1) // == tip6.flat()
tip6.flat(2) // 중첩된 배열까지 평탄화
tip6.flat(Infinity) // 다 펼쳐지면 스톱해 준다
```

### foreach()

- `배열.forEach(function(item, index)`
- 배열의 각 요소에 대해 주어진 함수를 실행한다.
- 함수는 인자로 배열 요소, 인덱스를 받습니다.

```jsx
const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push('💖' + item + '💖');
});
```

### map()

- `arr.map(function(currentValue, index, array) {}`
    - `currentValue`: 현재 처리되고 있는 요소
    - `index`: 현재 처리되고 있는 요소의 인덱스
    - `array`: 현재 배열
- foreach와 다르게 새로운 배열을 생성한다.
- 그래서 return을 항상 명시해 줘야 한다.
- 들어가는 값은 foreach와 같다.

```jsx
const arr = [1,2,3]
arr.map(function(x){ // x == currentValue
	return x ** 2
}) // => [ 1, 4, 9 ]
```

### filter()

특정 조건을 만족하는 요소들만 추출하여 새로운 배열을 만듦

```jsx
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1) // => '_' 는 사용하지 않을 것임을 명시. 배열 요소 값이 필요하지 않기 때문에 _를 사용하여 해당 매개변수를 무시
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}
```

### reduce()

```jsx
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 15
```

- `acc` = 합산하여 누적되는 공간(**`accumulator`)**
- `crr` = 현재 처리되는 배열 요소(0,1,2,3…)(**`initialValue`)**
- `0` = 초기값, 0을 꼭 넣어주기

### sort()

- 기본형은 사전식 정렬
    
    ```jsx
    [1, 11, 2, 23, 3, 7,9...)
    ```
    
- 오름차순 정렬
    - `sort((a,b) ⇒ b - a))`
    - a가 b보다 크면 양수, 작으면 음수, 같으면 0이 나오게 됩니다. 이 값을 기준으로 정렬
    - 가장 작은 값이 배열의 가장 앞에 위치하게 되고, 배열의 오른쪽으로 갈수록 값이 커지게 됩니다.

## 객체(Object)

- 키 - 값이 쌍으로 이뤄진 것이 특징
- 값 가져오기
    - `Object.keys(객체)`
    - `Object.values(객체)`
- ~~유사배열객체를 만들 수 있다. 실무에서도 사용하지 않기 때문에 잊어버려도 됨~~
    
    ```jsx
    ~~const arr = {
      0: 10,
      1: 20,
      2: 30,
      length: 3,
    };
    arr[0];
    // 10
    arr[1];
    // 20
    arr[2];
    // 30
    arr.length;
    // 3~~
    ```
    

## 함수

- 파선아실 (파라미터는 선언 아규먼트는 실제값)
- 파라미터 - 매개변수
- 아규먼트 - 전달인자
- 콜백함수 : 함수명을 별도로 만들지 않고, 다른 함수의 인자로 전달되어 실행되는 함수
    - 일반적으로 익명 함수(anonymous function)으로 작성
    - 함수를 아규먼트로 전달해서, "너를 언젠가 사용해줄게”
        - 나중에 호출되어 비동기 처리에서 결과를 알려주는 용도로 사용
        - 콜백함수가 전달된 함수가 비동기 작업을 수행하고 그 작업이 끝난 후에 실행될 때, 즉시 실행되지 않고 나중에 호출될 것이라는 것을 의미
    
    ```jsx
    const arr = [1, 2, 3];
    
    arr.forEach(function(item, index) {
      console.log(`인덱스 ${index}에 있는 요소는 ${item}입니다.`);
    });
    // 함수 안에 쓰는 함수로 생각하면 될 것 같다.
    ```
    
- 화살표 함수
    
    ```
    let 함수1 = (x, y) => x + y
    
    // 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
    let 함수2 = x => {return x + 10}
    
    // 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
    let 함수3 = x => x + 10
    ```
