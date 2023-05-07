import './css/style.css';
import { eightNotesPermutations, tripletPermutations } from './permutations';
import { createNoteButtons, saveSelection, populateNotes } from './utils';

// import Storage from './Storage';

// callback to create the stickings menu based on a permutations param
function onCreateMenu(permutationObject) {
  const columns = document.querySelectorAll('.column');
  columns.forEach((column, key) => {
    for (const prop in permutationObject) {
      const child = document.createElement('div');
      if (!column.classList.contains('last')) {
        child.innerHTML = `<input type="radio" id="${prop}${key}" key=${key} 
        name="beat-${key + 1}" value="${prop}${key}" data-hands="${
          permutationObject[prop]
        }"/>
        <label for="${prop}${key}" key="${key}">${prop.toUpperCase()}</label>`;

        child.classList.add('sticking');
        column.appendChild(child);
      } else {
        child.innerHTML = `<input type="checkbox" id="${prop}" name="${prop}" value="${prop}"/>`;
        child.classList.add('select-row');
        column.appendChild(child);
      }
    }
  });
  // create notes buttons
  createNoteButtons(permutationObject);
}

// callback to select the entire row when the checkbox is checked
function selectRow(e) {
  const lastColumn = document.querySelector('.last');
  const lastCheckboxes = lastColumn.querySelectorAll('input[type="checkbox"]');
  let isChecked = e.target.checked;
  const rowName = e.target.name;
  const radioInputs = document.querySelectorAll(
    `input[type="radio"][id^="${rowName}"]`
  );

  for (const checkbox of lastCheckboxes) {
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

    saveSelection(input, toArray, key, id, name);
  }

  if (!isChecked) {
    clearStorage();
    clearUI();
  }
  populateNotes();
}

//adds the event listener to each checkbox in the last column
function onSelectRow() {
  const lastColumn = document.querySelector('.last');
  const lastCheckboxes = lastColumn.querySelectorAll('input[type="checkbox"]');
  for (const checkbox of lastCheckboxes) {
    checkbox.addEventListener('change', selectRow);
  }
}

function selectStickings(e) {
  let selection = e.target;
  const dataHands = selection.dataset.hands;
  const toArray = dataHands.split(',');
  const key = +selection.getAttribute('key');
  const id = selection.id;
  const name = selection.name;

  saveSelection(selection, toArray, key, id, name);
  populateNotes();
}

function onSelectStickings() {
  const stickings = document.querySelectorAll('.sticking');
  for (const sticking of stickings) {
    sticking.addEventListener('change', selectStickings);
  }
}

function clearStorage() {
  localStorage.clear();
}

function clearUI() {
  const allInputs = document.querySelectorAll('input');
  const allStickings = document.querySelectorAll('.note');
  for (const input of allInputs) {
    input.checked = false;
  }
  for (const sticking of allStickings) {
    sticking.textContent = '';
  }
}

function onLoad() {
  onCreateMenu(tripletPermutations);
  onSelectRow();
  onSelectStickings();
  clearStorage();
  clearUI();
}

document.addEventListener('DOMContentLoaded', onLoad);
document.getElementById('reset-button').addEventListener('click', clearStorage);
document.getElementById('reset-button').addEventListener('click', clearUI);
