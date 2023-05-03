class ColaGenerator {
  // 변수 설정
  constructor() {
    this.itemList = document.querySelector('.section1 .cola-list');
  }

  async setup() {
    const response = await this.loadData(); // loadData()함수를 불러오고
    this.colaFactory(response); // loadData()에 colaFactory()함수를 적용시킨다.

    // response는 promise상태로 계속 대기중이므로 await을 써준다.
  }

  async loadData() {
    try {
      const response = await fetch('./items.json');
      if (response.ok) {
        // response.ok는 fetch() 메소드로부터 반환된 Response 객체의 속성 중 하나
        // 이 속성은 HTTP서버 응답 코드가 200~299 사이인지 여부를 나타내며, true 또는 false 값을 가집니다.
        return response.json();
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  colaFactory(data) {
    // 빈 DocumentFragment 객체를 생성
    // 실제 DOM에 삽입되지 않고 메모리 상에서만 존재
    // 여러 개의 DOM 노드를 생성하고, 이들을 일괄적으로 DOM에 삽입하여 성능향상
    const docFrag = document.createDocumentFragment();
    data.forEach((el) => {
      const item = document.createElement('li');
      const itemTemplate = `
            <button class="btn-cola" type="button" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img class="cola-img" src="./img/${el.img}" alt="">
                <span class="cola-name">${el.name}</span>
                <strong class="cola-price">${el.cost}원</strong>
            </button>
            `;

      item.innerHTML = itemTemplate;
      docFrag.append(item);
    });
    this.itemList.append(docFrag);
  }
}
export default ColaGenerator;
