// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function 가장작은값에두배(a, b) {
  console.log(a);
  return b(...a);
}

가장작은값에두배([10, 20, 11, 21, 19.17], Math.min);

let arr = [10, 20, 11, 21, 19, 17];
arr.map((v, i) => v * 2);

let arr2 = [10, 20, 11, 21, 19, 17];
function 두배(x) {
  어쩔티비곱하기티비;
}

arr.map(두배);
