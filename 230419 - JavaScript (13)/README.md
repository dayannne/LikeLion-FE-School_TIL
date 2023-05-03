# 오늘 공부한 내용 🌼

---

- 객체지향 프로그래밍
    - 생성자
    - 사용자정의 타입
    - 프로토타입
    - 객체의 상속
- 클래스
    - 클래스 상속받기

# 새로 알게된 내용 💡

---

## 객체지향 프로그래밍

객체지향은 프로그래밍 방법론중 하나로, 프로그램을 작성할 때 객체들을 만들어 서로 소통하도록하는 방법

- **자바스크립트 객체**가 키,값 쌍으로 이루어진 데이터의 묶음이라면, **객체 지향의 객체**는 우리가 표현하고자 하는 구체적인 사물을 추상적으로 표현한 것
- 로객체는 ‘**행동**’과 ‘**상태**’를 가진다. 여기서 행동은 메소드, 상태는 프로퍼티 정도로 볼

```jsx
const me1 = {
    name : '차다연',
    address : '경기도 수원시 권선구',
		lang: ['python','c++','JavaScript']
		major: 'Japanese' 
    phoneNum : '010-6266-7421',
    introduce : function(){
        console.log('미래의 주니어 프론트엔드 개발자입니다🌲');
    }
}
```

```jsx
const student = {
    level: 1,
    levelUp : function(){
        this.level++;
    }
}
```

**객체지향 프로그래밍**은 각기 존재하는 객체와 객체가 메소드를 통해 상호작용하도록 만들 수 있다!

```jsx
me.teaching(student);
```

짜잔-🌟

- 그러나 문제는 있다. 우리가 만들어낸 객체는 한번 생성하고 나면 끝이기에 동일한 프로퍼티를 가지는 객체를 생성하기 위해서는 아래처럼 코드를 받복하는 수밖에 없다.

```jsx
const me2 = {
    name : '차다연',
    address : '경기도 수원시 권선구',
		lang: ['python','c++','JavaScript']
		major: 'Japanese' 
    phoneNum : '010-6266-7421',
    introduce : function(){
        console.log('미래의 주니어 프론트엔드 개발자입니다🌲');
    }
}
```

```jsx
const me3 = {
    name : '차다연',
    address : '경기도 수원시 권선구',
		lang: ['python','c++','JavaScript']
		major: 'Japanese' 
    phoneNum : '010-6266-7421',
    introduce : function(){
        console.log('미래의 주니어 프론트엔드 개발자입니다🌲');
    }
}
```

me를 2개 만들어본다. 이 객채들은 안에가 똑같음에도, 서로 같은지를 비교해보면 false가 나온다.

### 생성자

객체를 만들 때 new 연산자와 함께 사용하는 함수로,

```jsx
let myArr = new Array(1,2,3);
const now = new Date();
```

`new Array()` `new Date()` 같은 것들은 자바스크립트에 내장되어 있는 내장 생성자라고 한다.

- 생성자의 장점은 생성자를 통해 생성된 객체는 같은 **프로퍼티**와 **메서드**를 **공유**할 수 있다는 것

```jsx
let myArr = new Array(1,2,3);
let myArr2 = new Array(4,5,6);

myArr2.length // Array의 프로퍼티 사용
myArr.length // Array의 프로퍼티 사용

myArr.forEach(item=>{ // Array의 메소드 사용
    console.log(item);
})

myArr2.forEach(item => { // Array의 프로퍼티 사용
    console.log(item);
})사용
```

### 사용자정의 타입

원시타입과 참조타입처럼 사용자가 직접 만든 **생성자**를 통해 생성된 **인스턴스**

- 자바스크립트에서의 생성자는 **함수이기 때문에** 함수를 만드는 것과 동일하게 시작!

```jsx
function Factory(){}
```

- 이렇게 만든 생성자는 **new 키워드를 붙여 객체를 생성** 및 실행한다.

```jsx
function Factory(){}
let result1 = Factory(); // -> undefined
let result2 = new Factory(); // -> Factory(){}
```

new가 빠져 있으면 단순 함수에 불과하고 new를 붙이면 생성자가 된다.

Factory를 단순히 함수로 실행하면 반환값(return)이 없기 때문에 undefined만 반환되나, 
**new 키워드**가 앞에 붙게 되면 실행되었을 때 **자동적으로 객체를 생성하고 반환**한다.

- 이렇게 **반환되어 만들어진 객체**를 **인스턴스(instance)** 라고 한다.

```jsx
function NewFactory(name){
[this.name](http://this.name/) = name;
this.sayYourName = function(){
console.log(삐리비리. 제 이름은 ${this.name}입니다. 주인님.);
}
}
```

```jsx
let robot1 = new NewFactory('브랜든');
let robot2 = new NewFactory('브랜든');
let robot3 = new NewFactory('브랜든');
```

this는 robot1을 가리켰다가, robot2를 가리켰다가, robot3을 가리킨다.

### 프로토타입

- 위와 같은 기본 인스턴스 생성 방식에는 문제가 있다.
    
    ```jsx
    this.sayYourName = function(){
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
    const robot1 = new NewFactory(1);
    const robot2 = new NewFactory(2);
    ```
    
    우리는 손쉽게 객체를 생산할 수 있지만, 객체의 메서드를 등록 할때마다 새로운 함수를 생성하고 있다. 100개의 객체를 생성할때마다 역시 100개의 함수를 새로 만들어서 할당하고 있는 것이다.
    
- 이를 위해 등장한 것이 **프로토타입(prototype)**이다.

```jsx
function NewFactory2(name){
    this.name = name;
}

NewFactory2.prototype.sayYourName = function(){
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);

```

- 생성자 함수 안의 `prototype` (프로토타입)
- 인스턴스 안의 `__proto__` (프로토객체)
    - 보통 생성자 함수가 인스턴스를 생성하게 되면 그 안에는 숨겨진 프로퍼티인 `[[Prototype]]` 이 존재하게 된다. 이것이 코드상으로는 `__proto__`로 표현된다.
    - `__proto__` 프로퍼티는 자신을 만든 생성자 함수의 `prototype`을 참조(연결)(접근)하는 역할을 한다.
        
        ```jsx
        function Test(){};
        
        const obj = new Test();
        
        console.log(obj.prototype); // undefined
        // __proto__를 통해 prototype을 참조할 수 있기 때문에 
        // 해당 코드는 참조(연결)(접근)되지 않은 상태이므로 false이다.
        console.log(obj.__proto__ === Test.prototype);  // true 
        ```
        
    - 생성자 함수의 `prototype`에 접근하여 필요한 여러가지 값과 메서드를 사용할 수 있다.
    
    new 키워드를 통해 생성자 함수의 `prototype`과 인스턴스의 `__proto__` 가 연결된다.
    
    ```jsx
    function Test(){};
    
    const obj = new Test();
    
    console.log(obj.prototype);
    ```
    
    **→ Test를 아무리 불러와도 함수가 새로 생성되지는 않는다.**
    

- 이렇듯 프로토타입은 모든 인스턴스가 하나의 메서드를 공유하도록 만들어 자원을 더 효율적으로 사용하도록 도와준다.

### 객체의 상속

자바스크립트의 상속은 기본적으로 **prototype**을 통해 일어난다.

```jsx
const obj = {
  name: 'test'
}

console.log(obj.hasOwnProperty('name'));

const arr = [1,2,3];

console.log(arr.hasOwnProperty('name'));

arr.__proto__ = Array.__proto__
```

Array 함수의 `__proto__` 가 Object 함수의 `__proto__` 를 기본적으 참조하고 있기 때문에 
Array의 `prototype`에 존재하지 않는 Object 객체의 프로퍼티와 메서드를 사용할 수 있다.

→ 자기 자신에게 존재하지 않는 프로퍼티나 메서드를 프로토타입을 통해 추적하는 과정을 **프로토타입 체이닝**이라고 한다.

![image](https://user-images.githubusercontent.com/105140201/235486792-50b2a5e2-f3e9-4bd3-936a-92eff3a854f6.png)
![image](https://user-images.githubusercontent.com/105140201/235486817-cbcf0f9e-9be4-4537-b602-1a6055cb1b2e.png)

<aside>
💡 자바스크립트의 타입들은 기본적으로 Object 타입을 상속받고 있습니다.

</aside>

- 직접 생성한 생성자 함수를 통해 상속을 받아보자.
    1. 먼저 부모의 역할을 할 생성자 함수를 만들고,
        
        ```jsx
        function Parent() {
            this.name = '재현';
        }
        Parent.prototype.rename = function (name) {
            this.name = name;
        }
        Parent.prototype.sayName = function () {
            console.log(this.name);
        }
        ```
        
    2. 자식 역할의 생성자 함수를 만듭니다.
        
        ```jsx
        function Child() {
            Parent.call(this);
        }
        
        Child.prototype = Object.create(Parent.prototype);
        Child.prototype.canWalk = function () {
            console.log('now i can walk!!');
        }
        ```
        
        위의 코드에서 call 함수는 Child 함수의 this가 Parent 생성자 함수의 this를 바라보게 만듭니다. 즉, Child 를 통해 생성된 인스턴스의 this 가 Parent 함수안의 프로퍼티에 접근할 수 있게합니다.
        
        그리고 Object.create 함수는 주어진 인자를 Child.prototype에 연결하는 역할을 합니다. 즉 Parent 객체의 프로토타입을 Child 객체의 프로토타입이 참조하게 합니다.
        
        위의 두 가지 과정을 통해 Child 객체는 Parent 객체의 모든 것을 상속받게 됩니다.
        

## Class 클래스

함수로 인스턴스를 만드는 것은 자바스크립트가 유일한데,

자바스크립트는 인스턴스를 **클래스**를 이용해 만든다!

- 붕어빵을 찍는 틀과 같다.🐟 찍어 나온 것이 인스턴스.

```jsx
// function Robot(name) {
//     this.name = name;
// }

// Robot.prototype.sayYourName = function () {
//     console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
// }

class Robot {
    // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다. 
		// 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
    constructor(name) {
        this.name = name;
    }

    // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}
```

```jsx
const robot = new Robot('다연')
```
![image](https://user-images.githubusercontent.com/105140201/235486944-bd6c98c6-2395-4746-8277-ccf3e0e896f2.png)


class에 프로토타입을 전혀 사용하지 않았음에도 prototype이 담겨져 있는 것을 알 수 있다.

- `constructor()` - 프로퍼티(변수)를 이 곳에 담아준다.
- 그 후 자유롭게 함수를 밑에 추가하여 클래스를 만든다.

### class 상속받기

- 클래스의 상속은 `**extends`** 키워드를 사용
- 부모 클래스의 프로퍼티를 상속받기 위해 `**super**`함수를 사용, 이때 super는 부모 생성자를 참조
- 부모 클래스의 메소드를 상속받기 위해 `**this**`를 사용, 이때 this는 부모를 의미
- 상속을 받는 클래스는 ‘파생 클래스’(derived classes)라고 부른다.
- **super 사용시 주의할 점**
    - 만약 파생 클래스에 생성자 함수를 사용하고 싶다면 반드시 생성자 함수안에서 super 함수를 사용해야합니다.
    - 파생클래스에 생성자 함수*(constructor)*가 없다면 super 함수가 자동으로 호출되어 부모 클래스의 프로퍼티를 상속 받게 합니다.
    - 생성자 함수에서 this 값을 사용할 경우 super 함수는 반드시 this 보다 먼저 실행되어야 합니다.
    - 파생 클래스가 아닌 클래스에서 사용하면 에러가 발생합니다.

[**부모 클래스](https://www.notion.so/TIL-230419-JavaScript-13-d4f100535b224d4390132d4984256747)☝️**

```jsx
class BabyRobot extends Robot {
    constructor(name) {
        super(name);
        this.ownName = '아이크';
    }

    sayBabyName() {
				// 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
        this.sayYourName(); // 여기서의 this는 부모를 의미.
        console.log('Suceeding you, Father!');
    }
}
```

// 오버로딩

담을 수 있는 정보다 더 많이 담는 것, 같은 이름의 생성자 또는 메소드를 여러 개 선언하는 것

자바스크립트 언어에 오버로딩 존재하지 않는다. 담을 수 있는 것보다 적게 담아도 알아서 고려해서 실행해 준다. (파라미터가 3개 필요한 함수에 아규먼트를 1개만 담아도 ㄱㅊㄱㅊ)

// 오버라이딩

### 비공개(private) 프로퍼티

비공개 프로퍼티는 객체 안의 중요한 정보를 안전하게 보호하여 프로그램이 뜻하지 않게 변경되는 것을 막는 역할을 합니다.

중요한 데이터를 조심스럽게 다뤄야 할 경우, 그래서 이런 데이터를 외부에서 함부로 수정할 수 없게 만들고 싶을 때 우리는 비공개 프로퍼티로 데이터를 변경할 수 있습니다.

```jsx
class Robot {
#password
constructor(name, pw) {
    this.name = name;
    this.#password = pw;
}

sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
}

getPassword() {
    return this.#password
}

setPassword(pw) {
    this.#password = pw;
}
```

이제 #password 의 값에 접근하고 수정하려면 반드시 해당하는 기능을 하는 메서드를 만들어야합니다.

<aside>
🧐 사용자 정의 타입으로는 어떻게 비공개 프로퍼티를 만들 수 있을까요?

</aside>

이때 값을 불러오는 메서드를 getter 메서드, 값을 수정하는 메서드를 setter 메서드로 부릅니다.

get, set 키워드를 이용해 아래처럼 코드를 좀 더 단순화 할 수 있습니다.

```jsx
class Robot {
    #password

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }

    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    get password() {
        return this.#password
    }

    set password(pw) {
        this.#password = pw;
    }
}

const bot = new Robot('재현', 1234);

bot.password = 5678;
console.log(bot.password);
```

이렇게 get과 set 키워드를 사용하면 마치 객체의 프로퍼티에 접근하듯 값을 다룰수 있게 됩니다.

하지만 이렇게 비공개 프로퍼티에 접근하기 위해 사용한다면 비공개의 의미가 사라져 버리는데 주의합시다! 😂

<aside>
🧐 get 과 set을 사용할 때 주의할 점!
get과 set을 사용하면 마치 객체의 프로퍼티를 수정하는것 같은 간편함을 느낄 수 있습니다. 하지만 해당 코드를 직접 작성하지 않은 협업자들에게는 오해를 일으킬 소지가 있습니다. get, set 안에 어떤 로직이 들어있는지 파악하지 못하고 단순히 객체의 프로퍼티를 수정한다는 착각을 일으킬 수 있기 때문입니다.
때문에 협업 시에는 주석이나, 가이드 문서를 만들어 충분한 정보를 제공해주는것이 좋습니다.

</aside>
