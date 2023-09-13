// let saveEl = document.getElementById("save-el");
// let count = 0;
// let countEl = document.getElementById("count-el");
// console.log(countEl);

// function increment() {
//   count += 1;
//   countEl.innerHTML = count;
// }

// function save() {
//   let countStr = count + " - ";
//   saveEl.innerText += countStr;
//   countEl.innerText = 0;
//   count = 0;
// }

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function save() {
  let countStr = `${count} -`; // count + " - ";
  saveEl.innerText += countStr;
  //CountEl to return to 0
  //countEl.innerText = 0;
  // count = 0;
}
