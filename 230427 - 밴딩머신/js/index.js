import ColaGenerator from './classes/colaGenerator.js';
import VendingMachineEvents from './classes/vendingMachineEvents.js';

const colaGenerator = new ColaGenerator();
const vendingMachineEvents = new VendingMachineEvents();

// 탑레벨 await : 최상위 모듈에서 실행되는 await
// 비동기처리되어 vendingMachineEvents가 먼저 실행되는 문제를 막고자 await사용
(async function () {
  await colaGenerator.setup();
  vendingMachineEvents.bindEvent();
})(); // 그냥 async안주고 await만 써도 되긴 함
