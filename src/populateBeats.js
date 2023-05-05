import Storage from './Storage';

function populateFirstBeat() {
  const input = document.querySelector('input[name="beat-1"]');
  const noteOne = document.getElementById('note-1');
  const noteTwo = document.getElementById('note-2');
  const noteThree = document.getElementById('note-3');
  if (input.id.length === 3) {
    const [first, second] = Storage.getBeatOne();

    noteOne.textContent = first.hand;
    noteTwo.textContent = second.hand;
    localStorage.setItem('note-1', JSON.stringify(first));
    localStorage.setItem('note-2', JSON.stringify(second));
  } else if (input.id.length === 4) {
    const [first, second, third] = Storage.getBeatOne();
    noteOne.textContent = first.hand;
    noteTwo.textContent = second.hand;
    noteThree.textContent = third.hand;
    localStorage.setItem('note-1', JSON.stringify(first));
    localStorage.setItem('note-2', JSON.stringify(second));
    localStorage.setItem('note-3', JSON.stringify(third));
  }
}

function populateSecondBeat() {
  const input = document.querySelector('input[name="beat-2"]');
  const noteOne = document.getElementById('note-3');
  const noteTwo = document.getElementById('note-4');
  const noteThree = document.getElementById('note-5');
  const noteFour = document.getElementById('note-6');
  if (input.id.length === 3) {
    const [first, second] = Storage.getBeatTwo();

    noteOne.textContent = first.hand;
    noteTwo.textContent = second.hand;
    localStorage.setItem('note-3', JSON.stringify(first));
    localStorage.setItem('note-4', JSON.stringify(second));
  } else if (input.id.length === 4) {
    const [first, second, third] = Storage.getBeatTwo();
    noteTwo.textContent = first.hand;
    noteThree.textContent = second.hand;
    noteFour.textContent = third.hand;
    localStorage.setItem('note-4', JSON.stringify(first));
    localStorage.setItem('note-5', JSON.stringify(second));
    localStorage.setItem('note-6', JSON.stringify(third));
  }
}
function populateThirdBeat() {
  const input = document.querySelector('input[name="beat-3"]');
  const noteOne = document.getElementById('note-5');
  const noteTwo = document.getElementById('note-6');
  const noteThree = document.getElementById('note-7');
  const noteFour = document.getElementById('note-8');
  const noteFive = document.getElementById('note-9');
  if (input.id.length === 3) {
    const [first, second] = Storage.getBeatThree();

    noteOne.textContent = first.hand;
    noteTwo.textContent = second.hand;
    localStorage.setItem('note-5', JSON.stringify(first));
    localStorage.setItem('note-6', JSON.stringify(second));
  } else if (input.id.length === 4) {
    const [first, second, third] = Storage.getBeatThree();
    noteThree.textContent = first.hand;
    noteFour.textContent = second.hand;
    noteFive.textContent = third.hand;
    localStorage.setItem('note-7', JSON.stringify(first));
    localStorage.setItem('note-8', JSON.stringify(second));
    localStorage.setItem('note-9', JSON.stringify(third));
  }
}

function populateFourthBeat() {
  const input = document.querySelector('input[name="beat-4"]');
  const noteOne = document.getElementById('note-7');
  const noteTwo = document.getElementById('note-8');
  const noteThree = document.getElementById('note-10');
  const noteFour = document.getElementById('note-11');
  const noteFive = document.getElementById('note-12');
  if (input.id.length === 3) {
    const [first, second] = Storage.getBeatFour();

    noteOne.textContent = first.hand;
    noteTwo.textContent = second.hand;
    localStorage.setItem('note-7', JSON.stringify(first));
    localStorage.setItem('note-8', JSON.stringify(second));
  } else if (input.id.length === 4) {
    const [first, second, third] = Storage.getBeatFour();
    noteThree.textContent = first.hand;
    noteFour.textContent = second.hand;
    noteFive.textContent = third.hand;
    localStorage.setItem('note-10', JSON.stringify(first));
    localStorage.setItem('note-11', JSON.stringify(second));
    localStorage.setItem('note-12', JSON.stringify(third));
  }
}

function populateRow() {}

export {
  populateFirstBeat,
  populateSecondBeat,
  populateThirdBeat,
  populateFourthBeat,
};
