const container = document.querySelector('#root');

// 환경변수 - 무조건 대문자로 설정하는 것이 규칙
const NEWSLIST_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/$id.json';

// 현재 사용자가 보고 있는 페이지의 정보와 화면에 보여질 아이템의 갯수를 저장하는 객체
const store = { currentPage: 1, datasPerpage: 10 };

// api 데이터 받아오는 함수
async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('네트워크에 문제가 있습니다.');
    }
    return response.json(); // 반드시 자바스크립트 객체 형태로 변환하여 리턴한다.
  } catch (error) {
    // catch는 가까운 곳에서 발생된 throw Error를 인자로 받아 와 콘솔로 찍어 줍니다.
    console.log(error);
  }
}

async function newsFeed() {
  const newsFeed = await getData(NEWSLIST_URL);
  const totalPages = Math.ceil(newsFeed.length / store.datasPerpage);
  const newsList = [];

  newsList.push('<ul>');

  // 목록 30개 중 10개씩만 불러온다.
  for (
    let i = (store.currentPage - 1) * store.datasPerpage;
    i < store.currentPage * store.datasPerpage;
    i++
  ) {
    newsList.push(`
            <li>
                <a href="#/detail/${newsFeed[i].id}">${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
            </li>
        `);
  }

  newsList.push('</ul>');

  // 10개 목록이 들어간 페이지를 3개로 만들어 30개의 목록을 모두 불러온다
  // 목록 페이지 넘기는 버튼 만들기
  let pageList = '';

  for (let i = 0; i < totalPages; i++) {
    pageList += `<li><a href="#/page/${i + 1}">${i + 1}</a></li>`;
  }

  newsList.push(`
    <nav>
        <ul>
        ${pageList}
        </ul>
    </nav>
  `);

  container.innerHTML = newsList.join('');
}

newsFeed();

//fetch() 함수는 비동기적으로 데이터를 가져오기 때문에, 데이터를 가져오는 동안 다른 코드가 실행될 수 있습니다. 이 때문에 fetch() 함수가 완료되기 전에 다른 코드가 실행되어 문제가 발생할 수 있습니다. 또, 네트워크 상태에 따라 데이터를 가져오는 데 실패할 수도 있습니다. 이러한 이유로 fetch() 함수에서는 네트워크에 문제가 발생할 수 있다는 가능성을 염두에 두고 예외 처리를 해주어야 합니다.

async function newsDetail() {
  const id = location.hash.substring(9); // 전체 인덱스 중 9번째 인덱스부터 문자를 끊어 가져옴.
  const newsContent = await getData(CONTENT_URL.replace('$id', id));

  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div>
        <a href="#/page/${store.currentPage}">목록으로 돌아가기</a>      
    </div>
  `;
}

// 라우터 : 화면을 중계하는 함수 ( 클릭하면 newsDetail()을 불러오도록 )
function router() {
  const routePath = location.hash;

  if (routePath === '') {
    // hash 값 뒤가 비어있다면 기본 화면인 newsFeed()를 가져옴
    newsFeed();
  } else if (routePath.indexOf('#/page/') >= 0) {
    // 페이지목차 a링크인지를 확인한다.(1,2,3 버튼 누르면 이동하는 페이지목차)
    // indexOf는 없으면 (-1)을 반환하므로 '>=0'으로 있는지 확인, include()로도 판별 가능
    store.currentPage = parseInt(routePath.substring(7));
    newsFeed();
  } else {
    // hash 값 뒤에 뭔가 있다면 newsDetail()을 불러오도록
    newsDetail();
  }
}

window.addEventListener('hashchange', router);

router();
