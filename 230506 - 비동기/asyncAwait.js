/*
async function message() {
    let hello = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello');
        }, 100)
    })

    let world = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('world');
        }, 100)
    })

    console.log(`${hello} ${world}`);
}

message();
*/

// function message() {
//   Promise.all([
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('hello');
//       }, 100);
//     }),
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(' world');
//       }, 100);
//     }),
//   ]).then((resultArray) => {
//     console.log(`${resultArray[0]}${resultArray[1]}`);
//   });
// }

async function message() {
  const promiseAll = await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('hello');
      }, 100);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('world');
      }, 100);
    }),
  ]);

  console.log(`${promiseAll[0]}${promiseAll[1]}`);
}

message();
