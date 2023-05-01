import './css/style.css';
import { eightNotesPermutations, tripletPermutations } from './permutations';
import { ThreeHitBeat, TwoHitBeat } from './Beat';

// callback to create the stickings menu based on permutation param
function onCreateMenu(permutationsMenu) {
  const columns = document.querySelectorAll('.column');
  columns.forEach((column, key) => {
    for (const prop in permutationsMenu) {
      const child = document.createElement('div');
      if (!column.classList.contains('last')) {
        child.innerHTML = `<input type="radio" id="${prop}${key}" key=${key} name="field${key}" value="${prop}${key}" data-hands="${
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
  const radioInputs = document.querySelectorAll(`[id^="${rowName}"]`);

  for (const checkbox of lastCheckboxes) {
    if (checkbox.name !== rowName && isChecked) {
      checkbox.checked = false;
    }
  }

  for (const input of radioInputs) {
    input.checked = isChecked;
    // let selection;
    // if (input.getAttribute('value').length < 4) {
    //   const array = [input.dataset.hands[0], input.dataset.hands[2]];
    //   const key = +input.getAttribute('key');
    //   const id = input.getAttribute('id');

    //   selection = new TwoHitBeat(array, key, id);
    // } else {
    //   const array = [
    //     input.dataset.hands[0],
    //     input.dataset.hands[2],
    //     input.dataset.hands[4],
    //   ];
    //   const key = +input.getAttribute('key');
    //   const id = input.getAttribute('id');

    //   selection = new ThreeHitBeat(array, key, id);
    // }
    // // console.log(selection);
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
  if (selection.value.length === 3) {
    selection = new TwoHitBeat(
      [selection.dataset.hands[0], selection.dataset.hands[2]],
      +selection.getAttribute('key'),
      selection.id
    );
    console.log(selection);
  } else if (selection.value.length === 4) {
    selection = new ThreeHitBeat(
      [
        selection.dataset.hands[0],
        selection.dataset.hands[2],
        selection.dataset.hands[4],
      ],
      +selection.getAttribute('key'),
      selection.id
    );
    console.log(selection);
  } else {
    throw Error('Something went wrong');
  }
}

function onSelectStickings() {
  // const radioButtons = document.querySelectorAll('input[type="radio"]');
  // for (const radioButton of radioButtons) {
  //   radioButton.addEventListener('change', selectStickings);
  // }
  const stickings = document.querySelectorAll('.sticking');
  for (const sticking of stickings) {
    sticking.addEventListener('change', selectStickings);
  }
}

function onLoad() {
  onCreateMenu(tripletPermutations);
  onSelectRow();
  onSelectStickings();
}

document.addEventListener('DOMContentLoaded', onLoad);
