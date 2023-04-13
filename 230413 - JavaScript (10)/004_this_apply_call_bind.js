// apply, call, bind

// call
// call() 메서드의 인수에 this 로 사용할 값을 전달할 수 있습니다.
// 비교 1
var peter = {
  name: 'Peter Parker',
  sayName: function () {
    console.log(this.name);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
peter.sayName();
peter.sayName.call(bruce);
// --------------- //

var peter = {
  name: 'Peter Parker',
  sayName: function (감탄사) {
    console.log(this.name + 감탄사);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
peter.sayName.call(bruce, '!'); // Bruce Wayne!|
// call(bruce) => peter 말고 bruce로 잡아
peter.sayName('!'); // Peter Parker'!'
peter.sayName(); // Perter Parker'undefined'

// ------------------ //

// apply
var peter = {
  name: 'Peter Parker',
  sayName: function (is, is2) {
    console.log(this.name + ' is ' + is + ' or ' + is2);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};

peter.sayName.apply(bruce, ['batman', 'richman']);
// Bruce Wayne is batman or richman

// ----------------- //

// call과 apply 비교
// 비교1
var peter = {
  name: 'Peter Parker',
  sayName: function (감탄사1, 감탄사2) {
    console.log(this.name + 감탄사1 + 감탄사2);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
peter.sayName.call(bruce, '!', '!!');

// ----------------- //

// 비교2
var peter = {
  name: 'Peter Parker',
  sayName: function (감탄사1, 감탄사2) {
    console.log(this.name + 감탄사1 + 감탄사2);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
peter.sayName.call(bruce, ['!', '!!']);

// ---------------- //

//bind
function sayName() {
  console.log(this.name);
}

var bruce = {
  name: 'bruce',
  sayName: sayName,
};

var peter = {
  name: 'peter',
  sayName: sayName.bind(bruce),
};

peter.sayName();
bruce.sayName();

/* peter.sayName() 과 bruce.sayName() 의 결과 값이 무엇이 될지 생각해봅시다. */
