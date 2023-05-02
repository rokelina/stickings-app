import './css/style.css';
import { eightNotesPermutations, tripletPermutations } from './permutations';
import { ThreeHitBeat, TwoHitBeat } from './Beat';
// import Storage from './Storage';

// callback to create the stickings menu based on permutation param
function onCreateMenu(permutationsMenu) {
  const columns = document.querySelectorAll('.column');
  columns.forEach((column, key) => {
    for (const prop in permutationsMenu) {
      const child = document.createElement('div');
      if (!column.classList.contains('last')) {
        child.innerHTML = `<input type="radio" id="${prop}${key}" key=${key} 
        name="beat-${key + 1}" value="${prop}${key}" data-hands="${
          permutationsMenu[prop]
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
}

// callback to select the row when the checkbox is checked
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
    if (id.length === 3) {
      const selection = new TwoHitBeat(toArray, key, id);
      localStorage.setItem(name, JSON.stringify(selection.describe));

      console.log(selection);
    } else if (id.length === 4) {
      const selection = new ThreeHitBeat(toArray, key, id);
      localStorage.setItem(name, JSON.stringify(selection.describe));

      console.log(selection);
    } else {
      throw Error('Something went wrong');
    }
  }
  if (!isChecked) {
    clearStorage();
  }
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

  if (id.length === 3) {
    selection = new TwoHitBeat(toArray, key, id);
    localStorage.setItem(name, JSON.stringify(selection.describe));

    console.log(selection);
  } else if (id.length === 4) {
    selection = new ThreeHitBeat(toArray, key, id);
    localStorage.setItem(name, JSON.stringify(selection.describe));

    console.log(selection);
  } else {
    throw Error('Something went wrong');
  }
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
  for (const input of allInputs) {
    input.checked = false;
  }
}

function onLoad() {
  onCreateMenu(eightNotesPermutations);
  onSelectRow();
  onSelectStickings();
  clearStorage();
  clearUI();
}

document.addEventListener('DOMContentLoaded', onLoad);
document.getElementById('reset-button').addEventListener('click', clearStorage);
document.getElementById('reset-button').addEventListener('click', clearUI);
