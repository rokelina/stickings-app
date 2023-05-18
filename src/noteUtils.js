import { TwoHitBeat, ThreeHitBeat } from './Beat';

// Saves selected stickings to storage, creates the Note instances and saves them in storage
function saveSelection(array, key, id, name) {
  if (id.length === 3) {
    const selection = new TwoHitBeat(array, key, id);
    localStorage.setItem(name, JSON.stringify(selection.describe));
    selection.storeNotes();
  } else if (id.length === 4) {
    const selection = new ThreeHitBeat(array, key, id);
    localStorage.setItem(name, JSON.stringify(selection.describe));
    selection.storeNotes();
  } else {
    throw Error('Something went wrong');
  }
}

//checks is all inputs in the same row are checked and updates the UI to show that row's checkbox as checked
function checkRow() {
  const beatsQuery = /^beat/;
  const stickingsArray = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (beatsQuery.test(key)) {
      const value = JSON.parse(localStorage.getItem(key));
      stickingsArray.push(value.sticking);
    }
  }

  const toSet = new Set(stickingsArray);
  if (stickingsArray.length === 4 && toSet.size === 1) {
    const checkbox = document.getElementById(stickingsArray[0]);
    checkbox.checked = true;
  } else {
    const lastColumn = document.querySelector('.last');
    const rowCheckboxes = lastColumn.querySelectorAll('input[type="checkbox"]');
    for (const checkbox of rowCheckboxes) {
      checkbox.checked = false;
    }
  }
}

export { saveSelection, checkRow };
