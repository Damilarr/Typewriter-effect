let curr_sent = 0;
let curr_word = 0;
let to_write;
let sentenceArray = [
  'My name is Emmanuel, ',
  'I Study Software Engineering at SQI,',
  'My instructor is Mr Teslim. ',
];
function start() {
  if (curr_sent >= sentenceArray.length) {
    curr_sent = 0;
  }
  to_write = sentenceArray[curr_sent];
  writeIt(to_write);
}
function writeIt(word) {
  h1.innerHTML += word[curr_word];
  curr_word++;
  setTimeout(() => {
    if (word[curr_word]) {
      writeIt(word);
    } else {
      curr_word = 0;
      curr_sent++;
      setTimeout(() => {
        del();
      }, 2000);
    }
  }, 100);
}
function del() {
  let slices = h1.innerHTML.toString();
  let a = slices.slice(slices, -1);
  h1.innerHTML = a;
  setTimeout(() => {
    if (h1.innerHTML == '') {
      start();
    } else {
      del();
    }
  }, 50);
}
start();
