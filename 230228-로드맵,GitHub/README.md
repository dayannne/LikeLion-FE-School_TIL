# [TIL 230228] - 로드맵, 깃허브 기초

# 🌳 오늘 하루 정리

---

![image](https://user-images.githubusercontent.com/105140201/221791221-b96409e0-526f-4a3b-b2d8-7286caf63232.png)

Git에 제대로 눈 뜬 날

이 쉬운 걸 그동안 이해하지 못해 Source Tree만 써왔다고….Source Tree 이제 바이다

천천히 아주 쉽게 설명해 주신 강사님 덕분이다.😂

# 📒 today’s I Studied

> *“뛰어난 선수와 보통 선수의 차이는 무엇인가요?”
”지루함을 견디는 것입니다. 매일매일 훈련하다 보면 어느 시점 지루해집니다. 보통 선수는 이 지루함을 이기지 못하고 훈련을 소흘히 하기 시작합니다.”*

<아주 작은 습관의 힘, 비즈니스북스, 제임스 클리어, 2019>
> 

- **Cheatseet**
- **1일 1커밋**

## FE 로드맵

![image](https://user-images.githubusercontent.com/105140201/221791712-575804b9-1a0f-4369-93cd-db975aa011f9.png)

웹을 구성하는 4대요소 HTML/CSS/JS/Web Asesembly

**모르는 것은 유튜브 등으로 알아보자(예방주사)**

- [ ]  next.js
- [ ]  리눅스
- [ ]  TDD
- [ ]  웹팩
- [ ]  프로그래머 도구

<aside>
💡 효율적으로 시간을 사용해 주세요.
알고 있으면 그 시간에 다른 거 하기

</aside>

## VS Code

- Terminal : `Ctrl + Shift + `` (백틱, 틸트, 템플릿리터럴)
- Sidebar : `Ctrl + B`
- 새 파일 생성: `Ctrl + N`
- 동시 수정 : `Ctrl` + `Alt` + `방향키(상, 하)`, `Alt + Click`
- 들여쓰기 : `Ctrl + ]`, `tab`
- 내어쓰기 : `Ctrl + [`, `shift + tab`
- 주석 : `Ctrl + /`
- 코드 이동 : `Alt + 방향키(상,하)`

확장자 : 해당 파일을 실행시킬 소프트웨어를 연결짓는 역할을 함.

→ 어떤 것으로 편집을 해도 됨. (메모장으로 편집해도 가능)

### 자주 사용하는 Extension

- live server (추천) : 서버 구동
- auto rename tag (추천) : 태그 닫기 자동 수정
- indent-rainbow (추천) : 들여쓰기마다 색 다르게

## 기초  상식

<aside>
💡 [www.naver.com](http://www.naver.com/) -> DNS -> 223.130.195.200 -> Server -> 웹 브라우저에 표시
</aside>

- **URL**(이름)만으로 이동되는 것이 아님, URL(이름)과 **IP**(주소)가 맵핑(매칭)되어야 이동이 되는 것
- **PORT** = 문
    `80 = HTTP 웹페이지 전송`
    `443 = HTTPS(Secure)`

###동영상 배속 꿀팁!
<aside>
💡 document.getElementsByTagName("video")[0].playbackRate = 2.5;

</aside>

## Git & GitHub 기본 개념

[[무료] 30분 요약 강좌 시즌4 : 알잘딱깔센 GitHub - 인프런 | 강의](https://inf.run/tTd6)<br>
[[무료] 2022 30분 요약 강좌 시즌 1 : HTML, CSS, Linux, Bootstrap, Python, JS,  jQuery&Ajax - 인프런 | 강의](https://inf.run/zLvi)

용량이 큰 파일을 왔다갔다 하는 불편함 없이
원본을 갖고 변경 내용만 저장하는 것

- 유지보수
- 저장 용량
- 언제 어떤 코드가 수정되었는지 확인(누가 했는지 추적관리)
- 코드 공유(코드 저장, 만약 파일이 저장된 노트북을 잃어버린다면?)
- 버전 관리

코드와 나의 인격을 분리하라

코드가 비판 받았다고 해서 나를 비판한 것으로 생각말기

### **URL(도메인)과 깃허브 연결하기**

![image](https://user-images.githubusercontent.com/105140201/221792328-2c621156-909b-4627-b5ec-4310bd11bfbc.png)

### 1. **GUI로 수정하기 (깃허브에서 수정)**

![image](https://user-images.githubusercontent.com/105140201/221792533-dce02a2b-158c-44d5-a802-c831b404a48c.png)

**깃허브 페이지에서 ‘.’을 눌러 이동**

![image](https://user-images.githubusercontent.com/105140201/221792599-169d98ff-2a3e-488d-aecb-a45fd4db61b1.png)

<aside>
💡 디스코드에서 코드 보내기

```html

<h1>hello world</h1>
<p>hello world</p>
```

</aside>

### 2. **CLI**

**git CLI**로 어떻게 작업하는지

## Git

- `git clone (github 해당 레파지토리 주소)` : 해당 폴더에 git clone

- `git pull`
- `git add .` : 변경 내용을 추적
- `git commit -m ‘메시지’`
- `git push` → push 까지 해야 깃허브에 올라간다!

이 4개만 해도 잔디를 심는 데에는 문제가 없다. (오늘 이것만 외웠어도 끝!!)

### **저장소 만들기**

- 작업할 디렉토리를 만들고(`mkdir`) 생성한 디렉토리로 이동하기(`cd`)
    
    ```bash
    $ mkdir git-test
    $ cd git-test
    ```
    
- 현재 디렉토리를 Git 저장소로 만들어 원하는 디렉토리를 기준으로 버전관리
    
    ```bash
    $ git init
    ```
    
    `git init` 을 입력하면 해당 폴더 기준으로 .git(로컬 저장소)가 생성된다. 
    
    로컬 저장소에는 버전 정보, 원격 저장소 주소가 저장됩니다.
   
    <aside>
    💡 이때, 한 폴더에는 하나의 .git(로컬 저장소)을 가져야 합니다. 그렇지 않을 경우 충돌이 발생할 수 있습니다.
    
    </aside>
    
    ### First commit!
    
    **1. 파일을 생성(`touch`), 추가(`add`)하고 커밋(`commit`)하기**
    
    ```bash
    $ touch README.md
    $ git status # Untracked 확인
    $ git add README.md
    $ git commit -m "first commit"
    ```
    
    - ****git이 관리할 대상의 파일 등록하기(add)
        
        ```bash
        $ git add README.md // 지정 파일 올리기
        $ git add . // 파일 전체 올리기
        ```
        
        add 시 뜨는 warning은 개행 때문이니 무시하기
        
    - 버전 만들기 (commit)
        
        ```bash
        $ git commit -m "저장 메세지를 입력해주세요"
        ```
        
    
    **2. 파일 상태 확인하기 (`status`, `diff`, `log`)**
    
    - 파일 상태 확인하기 (`status`)
        
        ```bash
        $ git status
        ```
     
        
    - 변경사항 확인하기 (`diff`)
        
        ```bash
        $ git status
        ```

        
    - 커밋(commit) 히스토리 조회하기 (`log`)
        
        ```bash
        $ git log
        ```
        

        
    
    **3. 저장소에 무시할 파일 설정하는 방법**
    
    1) `.gitignore` 사용
    
    2) `.gitignore` 자동 생성기 활용
    
    [gitignore.io](https://www.toptal.com/developers/gitignore)
    
    - `.gitignore` 사용 방법
        
        1) 위 링크에 접속 후 본인의 프로젝트에서 사용하는 운영체제, 개발 환경, 기술 스택을 작성합니다. 
        
        
        2) `생성` 버튼을 눌러 내용을 생성한 후, 전체 내용을 복사하고 `.gitignore` 파일에 추가합니다.
        
     
        
        gitignore.io에서 node 스택으로 생성한 파일
        
    

## GitHub

### CLI를 이용하여 GitHub에 올리기

```
echo "# sample" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main // branch를 main으로 하겠다
git remote add origin https://github.com/Da-Youn/sample.gitgit push -u origin main
// 내 gitHub 레파지토리와 연결하겠다
```

### 토큰 발급하기

토큰을 발급받으면 로그인을 하지 않고 push를 할 수 있다.

## +) HTML emmit 팁!

[Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

- `! + tab` : html 코드 자동 완성
- `h1 + tab` : h1태그 자동 생성
- `h1{hello world}` 
- `h1 + p` : h1태그와 p태그 자동 생성
- `h$ * 6` : h1~h6 태그 한번에 생성
- `table > (tr > td * 6) * 4` : 4행 6열의 테이블 완성
- `p#hello.hello2` : ID와 클래스 한번에 생성
- `ul>li*5` : 목차 한번에 생성
- `ul>li.item$.5` : class가 각각 item1~5인 목차 생성
- `lorem` : 의미없는 문장 출력
- `lorem*3` : lorem 3개 문장 출력
- `lorem5` : lorem 5개 단어 출력
- `a[href="[https://www.naver.com](https://www.naver.com/)"]` : 미리 속성을 주어 태그를 만들 수 있다

