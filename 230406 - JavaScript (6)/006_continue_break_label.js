// label은 특정한 곳으로 '점프'하게 만듭니다. 가독성을 해칩니다.

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      break outer;
    }
    console.log(i, j);
  }
}

hojun: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      break hojun;
    }
    console.log(i, j);
  }
}

for (let 반복 = 0; 반복 < 3; 반복++) {
  hojun: for (let i = 2; i < 3; i++) {
    for (let j = 1; j < 3; j++) {
      if (j === 3) {
        break hojun;
      }
      console.log(`${반복}. ${i} X ${j} = ${i * j}`);
    }
  }
}

for (let 반복 = 0; 반복 < 3; 반복++) {
  hojun: for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (j === 3) {
        break hojun;
      }
      console.log(`${반복}. ${i} X ${j} = ${i * j}`);
    }
  }
}

hojun: for (let 반복 = 0; 반복 < 3; 반복++) {
  for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (j === 3) {
        break hojun;
      }
      console.log(`${반복}. ${i} X ${j} = ${i * j}`);
    }
  }
}
