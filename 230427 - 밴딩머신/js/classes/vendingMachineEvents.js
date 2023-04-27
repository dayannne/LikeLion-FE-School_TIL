class VendingMachineEvents {
  constructor() {
    const vMachine = document.querySelector('.section1');
    this.balance = vMachine.querySelector('.bg-box p');
    this.itemList = vMachine.querySelector('.cola-list');
    this.inputCostEl = vMachine.querySelector('#input-money');
    this.btnPut = vMachine.querySelector('#input-money+.btn');
    this.btnReturn = vMachine.querySelector('.bg-box+.btn');
    this.btnGet = vMachine.querySelector('.btn-get');
    this.stagedList = vMachine.querySelector('.get-list');

    const myinfo = document.querySelector('.section2');
    this.myMoney = myinfo.querySelector('.bg-box strong');

    const getInfo = document.querySelector('.section3');
    this.getList = getInfo.querySelector('.get-list');
    this.txtTotal = getInfo.querySelector('.total-price');
  }

  stagedItemGenerator(target) {
    const stagedItem = document.createElement('li');

    stagedItem.innerHTML = `
        <img src="./img/${target.dataset.img}" alt="">
            ${target.dataset.item}
        <strong>1
            <span class="a11y-hidden">개</span>
        </strong>
        `;
    this.stagedList.append(stagedItem);
  }

  bindEvent() {
    /**
     * 1. 입금 버튼 기능
     * 입금 버튼을 누르면
     * 1) 입금액이 소지금보다 많으면 경고창 출력
     * 2) 소지금 === 소지금 - 입금액
     * 3) 잔액 === 기존잔액 + 입금액
     * 4) 입금액이 정상적으로 입금되면 입금창은 초기화
     */
    this.btnPut.addEventListener('click', () => {
      // 입력값
      const inputCost = parseInt(this.inputCostEl.value);
      // 소지금 : parseInt(25,000원) => 25만 반환해 버린다.
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(/,/g, ''));
      console.log(myMoneyVal);
      // 잔액
      const balanceVal = parseInt(this.balance.textContent);

      if (inputCost) {
        // 입금액이 소지금 보다 적거나 같다면
        if (inputCost <= myMoneyVal && inputCost > 0) {
          //2)
          this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + '원';
          //3)
          this.balance.textContent =
            new Intl.NumberFormat().format((balanceVal ? balanceVal + inputCost : 0) + inputCost) +
            '원';
        } // 입금액이 소지금보다 많다면
        else {
          // 1)
          alert('소지금이 부족합니다.');
        }
        // 4)
        this.inputCostEl.value = '';
      }
    });

    /**
     * 2. 거스름돈 반환 버튼
     * 1) 반환버튼을 누르면 소지금 === 잔액 + 소지금
     * 2) 반환버튼을 누르면 잔액창이 초기화됩니다.
     */
    this.btnReturn.addEventListener('click', () => {
      // 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

      // 소지금
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));

      if (balanceVal) {
        this.myMoney.textContent = new Intl.NumberFormat().format(balanceVal + myMoneyVal) + '원';
        this.balance.textContent = null;
      }
    });

    /**
     * 3. 자판기 장바구니 채우기
     * 1) 아이템을 누르면 잔액 === 잔액 - 아이템 가격
     * 2) 아이템 가격이 잔액보다 크다면 경고메세지를 줍니다.
     * 3) 아이템이 장바구니에 들어갑니다.
     * 4) 아이템의 count가 -1이 됩니다. 아이템의 count가 0이 되면 품절 표시를 합니다.
     */
    this.btnsCola = document.querySelectorAll('.section1 .btn-cola');

    this.btnsCola.forEach((item) => {
      item.addEventListener('click', (event) => {
        const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
        const targetElprice = parseInt(event.currentTarget.dataset.price); // 이벤트가 달려있는 요소
        // target은 이벤트의 진원지

        if (balanceVal >= targetElprice) {
          this.balance.textContent =
            new Intl.NumberFormat().format(balanceVal - targetElprice) + '원';

          //장바구니 콜라 생성
          this.stagedItemGenerator(event.currentTarget);
        } else {
          alert('입금한 금액이 부족합니다.');
        }
      });
    });
  }
}

export default VendingMachineEvents;
