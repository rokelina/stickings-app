const eightNotesMenu = Object.freeze({
  rl: 'RL',
  lr: 'LR',
  rr: 'RR',
  ll: 'LL',
});

const menuContainer = document.getElementById('menu-container');
const columns = document.querySelectorAll('.column');

function onCreateMenu() {
  columns.forEach((column, key) => {
    for (const prop in eightNotesMenu) {
      const child = document.createElement('div');
      if (!column.classList.contains('last')) {
        child.innerHTML = `<input type="radio" id="${prop}${key}" key=${key} name="field${key}" value="${prop}${key}"/>
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

function selectRow(e) {
  let isChecked = e.target.checked;
  const name = e.target.name;
  const rowCheckboxes = document.getElementsByName(name);
  for (const checkbox of rowCheckboxes) {
    checkbox.checked = isChecked;
  }
}

function onSelectRow() {
  const lastColumn = document.querySelector('.last');
  const lastCheckboxes = lastColumn.querySelectorAll('input[type="checkbox"]');
  for (const checkbox of lastCheckboxes) {
    checkbox.addEventListener('change', selectRow);
  }
}

function onLoad() {
  onCreateMenu();
  onSelectRow();
}

document.addEventListener('DOMContentLoaded', onLoad);
