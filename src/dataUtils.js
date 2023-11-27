import { TwoHitBeat, ThreeHitBeat } from './Beat';
import { clearStorage, clearUI } from './helpers';

// Saves selected stickings to storage, creates the Note instances and saves them in storage
function saveSelection(toArray, key, id, name) {
  if (id.length === 3) {
    const selection = new TwoHitBeat(toArray, key, id);
    localStorage.setItem(name, JSON.stringify(selection.describe));
    selection.storeNotes();
  } else if (id.length === 4) {
    const selection = new ThreeHitBeat(toArray, key, id);
    localStorage.setItem(name, JSON.stringify(selection.describe));
    selection.storeNotes();
  } else {
    throw Error('Something went wrong');
  }
}

function saveRow(e) {
  const lastColumn = document.querySelector('.last');
  const rowCheckboxes = lastColumn.querySelectorAll('input[type="checkbox"]');
  let isChecked = e.target.checked;
  const rowName = e.target.name;
  const radioInputs = document.querySelectorAll(
    `input[type="radio"][id^="${rowName}"]`
  );

  for (const checkbox of rowCheckboxes) {
    if (checkbox.name !== rowName && isChecked) {
      checkbox.checked = false;
    }
  }

  for (const input of radioInputs) {
    input.checked = isChecked;
    const data = input.dataset.hands;
    const toArray = data.split(',');
    const key = +input.getAttribute('key');
    const id = input.id;
    const name = input.name;

    saveSelection(toArray, key, id, name);
  }

  //When unchecking checkbox, clears storage and clears radio inputs
  if (!isChecked) {
    clearStorage();
    clearUI();
  }
}

//checks if all inputs in the same row are checked and updates the UI to show that row's checkbox as checked
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

export { saveSelection, saveRow, checkRow };
