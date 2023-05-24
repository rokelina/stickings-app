import { eightNotesPermutations, tripletPermutations } from './permutations';

//creates parent container, menu-card, beat fieldsets, reset button
function createMenuContainer() {
  const parentContainer = document.getElementById('menu');

  if (parentContainer.firstChild) {
    while (parentContainer.firstChild) {
      parentContainer.removeChild(parentContainer.firstChild);
    }
  }

  const menuCard = document.createElement('div');
  menuCard.id = 'menu-card';
  menuCard.className = 'menu-card';

  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu-container';
  menuContainer.className = 'menu-container';

  const menuOptions = document.createElement('div');
  menuOptions.id = 'menu-options';
  menuOptions.className = 'menu-options';

  // Create the reset button
  const resetButton = document.createElement('button');
  resetButton.id = 'reset-button';
  resetButton.className = 'reset';
  resetButton.textContent = 'Reset';

  // Append the reset button to the menu options container
  menuOptions.appendChild(resetButton);

  // Create the menu items
  const menuItems = [
    { id: 'beat-1', name: 'beat-1', legend: 'Beat 1', className: 'column' },
    { id: 'beat-2', name: 'beat-2', legend: 'Beat 2', className: 'column' },
    { id: 'beat-3', name: 'beat-3', legend: 'Beat 3', className: 'column' },
    { id: 'beat-4', name: 'beat-4', legend: 'Beat 4', className: 'column' },
    { id: 'rows', legend: 'Row', className: 'column last' },
  ];

  // Create the menu items dynamically
  menuItems.forEach((item) => {
    const form = document.createElement('form');
    const fieldset = document.createElement('fieldset');
    fieldset.id = item.id;
    fieldset.name = item.name;
    fieldset.className = item.className;
    const legend = document.createElement('legend');
    legend.textContent = item.legend;
    fieldset.appendChild(legend);
    form.appendChild(fieldset);
    menuContainer.appendChild(form);
  });

  menuCard.appendChild(menuContainer);
  menuCard.appendChild(menuOptions);

  // Append the menu container and menu options container to the parent container
  parentContainer.appendChild(menuCard);
}

//creates the input elements on each fieldset
function createMenu(permutationObject) {
  //call to create parent container first
  createMenuContainer();

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

function getEightNotesMenu() {
  createMenu(eightNotesPermutations);
}
function getTripletsMenu() {
  createMenu(tripletPermutations);
}

export { getEightNotesMenu, getTripletsMenu };
