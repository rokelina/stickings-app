// functions that create / update / delete menu

import { eightNotesPermutations, tripletPermutations } from './permutations';
// function createNoteButtons(permutationObject) {
//   const stickingsContainer = document.getElementById('stickings-container');
//   const subdivision = Object.values(permutationObject)[0].length;
//   // total notes will be subdivision * 4
//   for (let i = 0; i < subdivision * 4; i++) {
//     const noteButton = document.createElement('button');
//     noteButton.setAttribute('id', `note-${i + 1}`);
//     noteButton.classList.add('note');
//     stickingsContainer.appendChild(noteButton);
//   }
// }

function createMenu(permutationObject) {
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
  // createNoteButtons(permutationObject);
}

function removeMenu() {
  const noteButtons = document.querySelectorAll('.note');
  const menuInputs = document.querySelectorAll('.sticking');
  const rowCheckbox = document.querySelectorAll('.select-row');

  noteButtons.forEach((button) => button.remove());
  menuInputs.forEach((input) => input.remove());
  rowCheckbox.forEach((checkbox) => checkbox.remove());
}

function eightNotesMenu() {
  removeMenu();
  createMenu(eightNotesPermutations);
}
function tripletsMenu() {
  removeMenu();
  createMenu(tripletPermutations);
}

export { eightNotesMenu, tripletsMenu };
