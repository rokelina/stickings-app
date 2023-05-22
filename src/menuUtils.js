// functions that create / update / delete menu

import { eightNotesPermutations, tripletPermutations } from './permutations';

// function createMenuContainer() {
//   // Create the menu container
//   const menuContainer = document.createElement('div');
//   menuContainer.id = 'menu-container';
//   menuContainer.className = 'menu-container';

//   // Create the menu options container
//   const menuOptions = document.createElement('div');
//   menuOptions.id = 'menu-options';
//   menuOptions.className = 'menu-options';

//   // Create the reset button
//   const resetButton = document.createElement('button');
//   resetButton.id = 'reset-button';
//   resetButton.className = 'reset';
//   resetButton.textContent = 'Reset';

//   // Append the reset button to the menu options container
//   menuOptions.appendChild(resetButton);

//   // Create the menu items
//   const menuItems = [
//     { id: 'beat-1', name: 'beat-1', legend: 'Beat 1', className: 'column' },
//     { id: 'beat-2', name: 'beat-2', legend: 'Beat 2', className: 'column' },
//     { id: 'beat-3', name: 'beat-3', legend: 'Beat 3', className: 'column' },
//     { id: 'beat-4', name: 'beat-4', legend: 'Beat 4', className: 'column' },
//     { id: 'rows', legend: 'Row', className: 'column last' },
//   ];

//   // Create the menu items dynamically
//   menuItems.forEach((item) => {
//     const form = document.createElement('form');
//     const fieldset = document.createElement('fieldset');
//     fieldset.id = item.id;
//     fieldset.name = item.name;
//     fieldset.className = item.className;
//     const legend = document.createElement('legend');
//     legend.textContent = item.legend;
//     fieldset.appendChild(legend);
//     form.appendChild(fieldset);
//     menuContainer.appendChild(form);
//   });

//   const parentContainer = document.getElementById('menu-card');

//   // Append the menu container and menu options container to the parent container
//   parentContainer.appendChild(menuContainer);
//   parentContainer.appendChild(menuOptions);
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
}

function removeMenu() {
  // const menuContainer = document.getElementById('menu-container');
  // const menuOptions = document.getElementById('menu-options');

  // menuContainer.remove();
  // menuOptions.remove();
  const menuInputs = document.querySelectorAll('.sticking');
  const rowCheckbox = document.querySelectorAll('.select-row');

  menuInputs.forEach((input) => input.remove());
  rowCheckbox.forEach((checkbox) => checkbox.remove());
}

function getEightNotesMenu() {
  removeMenu();
  // createMenuContainer();
  createMenu(eightNotesPermutations);
}
function getTripletsMenu() {
  removeMenu();
  // createMenuContainer();
  createMenu(tripletPermutations);
}

export { getEightNotesMenu, getTripletsMenu };
