class Student {
  constructor(name, classroom) {
    this.name = name;
    this.classroom = classroom;
  }
  printClassRoom() {
    console.log(this.classroom);
  }
}

let student = new Student("Anocha", "Biology");
student.printClassRoom();

let ary1 = [1, 2, 3, 4];
let ary2 = [2, 5];
let ary3 = [6, 7, 8];

const solution = (ary1, ary2) => {
  let strg = new Set();

  ary1.forEach((ele, idx) => {
    strg.add(ele);
  });

  let swtc = false;
  ary2.forEach((ele, idx) => {
    if (strg.has(ele)) {
      console.log(ele);
      swtc = true;
      return true;
    }
  });
  return swtc;
};

console.log(ary1 + " and" + ary2 + " true? " + solution(ary1, ary2));
console.log(ary1 + " and" + ary3 + " true? " + solution(ary1, ary3));
