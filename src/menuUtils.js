// functions that create / update / delete menu

import { eightNotesPermutations, tripletPermutations } from './permutations';

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
}

function removeMenu() {
  const menuInputs = document.querySelectorAll('.sticking');
  const rowCheckbox = document.querySelectorAll('.select-row');

  menuInputs.forEach((input) => input.remove());
  rowCheckbox.forEach((checkbox) => checkbox.remove());
}

function getEightNotesMenu() {
  removeMenu();
  createMenu(eightNotesPermutations);
}
function getTripletsMenu() {
  removeMenu();
  createMenu(tripletPermutations);
}

export { getEightNotesMenu, getTripletsMenu };
