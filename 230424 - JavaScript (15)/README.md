# 오늘 공부한 내용 🌼

---

- 최적화
    - DOM접근과 업데이트는 가능한 적게
    - DocumentFragment
    - 메모리
- AJAX
    - 콜백지옥

# 새로 알게된 내용 💡

---

## 최적화

### DOM접근과 업데이트는 가능한 적게

- DOM 접근은 가능한 좁은 범위에서 적게 사용한다.
- 부모를 먼저 찾고 자식을 찾는 방법을 사용한다.
- 필요한 기능만 준다.
- 실습
    
    ```
    <article class="parent">
            <figure>
                <img class="figImg"
                    src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202112/13/e4725896-2596-44f0-8b95-ab3faaa76d7d.jpg"
                    alt="">
                <figcaption class="figCap">
                    유재석씨가 코로나에 돌파 감염되었다는 소식입니다.
                </figcaption>
            </figure>
        </article>
    ```
    
    ```jsx
    const parent = document.querySelector('.parent')
        const targetImg = parent.querySelector('.figImg')
        targetImg.setAttribute('src', 'https://file.mk.co.kr/meet/neds/2021/07/image_readtop_2021_654175_16256093474708254.jpg')
        const taegetText = parent.querySelector('.figCap')
        taegetText.textContent = '유느님께서 수상식에서 환하게 웃고 있다.'
    ```
    

![](https://velog.velcdn.com/images/day_1226/post/1aa48726-1fad-40ec-b1ea-3d4853d5c821/image.png)

![](https://velog.velcdn.com/images/day_1226/post/085e4330-1d15-4f62-908d-f1b327f8b5c9/image.png)

이런 식으로 템플릿 리터럴을 사용할 수도 있지만, 가능한 좁은 범위에서 적게 사용하기 위해 지양한다.

### DocumentFragment

가상의 DOM트리

객체 형식으로 불러오고, 자식들을 요소처럼 담을 수 있다.

요소에 붙이게 되면 사라지고 자신의 자식 노드만 붙이게 됩니다.

```html
<body>
<main>
</main>
<script>
    const parentEl = document.querySelector('main')
    const frag = document.createDocumentFragment()

    for (let i = 0; i < 10; i++) {
        const article = document.createElement('article')
        article.classList.add = 'parent'
        article.innerHTML = `
    <figure>
        <img class="figImg"
            src="https://file.mk.co.kr/meet/neds/2021/07/image_readtop_2021_654175_16256093474708254.jpg" alt="">
        <figcaption class="figCap">
            유재석씨가 수상식에서 환하게 웃고 있다.
        </figcaption>
    </figure>
`
        frag.append(article);

    }
    // article을 10개 달고 있던 frag가 parentEl에 붙는다.
    parentEl.append(frag)
</script>
</body>
```

### 메모리

메모리의 생명 주기

- 메모리 할당
- 메모리 사용
- 메모리 해제

메모리 누수와 Garbage Collection

- 메모리 누수 : 필요없는 메모리가 계속 낭비되고 있는 현상, 필요하지 않은 메모리 공간을 계속해서 점유하는 현상
- 메모리 삭제(Garbage Collection) : **참조 카운팅** (reference counting)으로 메모리에 존재하는 값을 몇개의 변수와 함수가 참조하고 있는지 살펴보며, 참조가 0이 되면 값을 메모리에서 삭제

## AJAX

```jsx
let result;
function xhrRequest() {

    const requestObj = new XMLHttpRequest();
    requestObj.open('GET', 'message.txt');
    requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4 && requestObj.status == "200") {

            result = requestObj.responseText;
            console.log(result); // 콘솔에 무엇이 찍히는지 확인해봅시다.
        }
    };
    requestObj.send();
}

xhrRequest();
console.log(result); // 콘솔에 무엇이 찍히는지 확인해봅시다.
```

xhr객체가 서버와의 통신하는 과정이 비동기처리로 이뤄져 있다.

`onreadystatechange` ⇒ 이벤트 리스너

`(requestObj.readyState == 4 && requestObj.status == "200"`

⇒ 4, 200으로 떨어지면 실행

해당 조건이 만족되면 서버와의 통신이 잘 연결 된 것이다.

### 콜백지옥

```jsx
const total = 비동기통신함수( 
        input,
        통신함수의결과를가공하는함수1 ( 
            result, 
            비동기통신함수2(
                통신함수의결과를가공하는함수2(
                    result, 
                    result2
                )
            ) 
        ) 
    );

// 이렇게 비동기 함수가 끝나기 전에 중간 중간에 필요한 콜백함수를 실행시키며 사용할 수 밖에 없었습니다.
```

그래서 통신이 끝난 다음에야 다음 함수가 실행되도록 콜백함수로 코드를 작성해야 한다.
결국 일반적인 동기식 코드처럼 비동기 함수 실행 후 다음 라인에서 다른 함수를 실행하는, 순차적으로 함수들을 나열하는 방식이 불가능하다. 비동기 코드가 끝나고 콜백으로 함수를 부르고, 다음 함수를 또 콜백으로 부르는 형태가 되야한다.

<aside>
💡 3개의 함수가 있으면 1번 함수가 끝나야 2번함수를 실행하고 2번함수가 끝나야 3번함수를 실행한다. 함수 하나가 실행되는 동안 그 뒤의 코드들을 블로킹된다. 그래서 이를 해결하기 위해 콜백함수를 사용하고, 대신 시간이 오래걸릴 수 있으니 메인 쓰레드에서 하지 않고 사이드 스레드에서 따로 실행을 시z킨다. 메인스레드에서는 해야할 코드들을 실행하고, 통신과 같은 함수들은 사이드 스레드로~

</aside>
