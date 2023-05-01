import './css/style.css';

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
        <label for="${prop}${key}" key="${key}">${eightNotesMenu[prop]}</label>`;
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
  const lastColumn = document.querySelector('.last');
  const lastCheckboxes = lastColumn.querySelectorAll('input[type="checkbox"]');
  let isChecked = e.target.checked;
  const rowName = e.target.name;
  const rowInputs = document.querySelectorAll(`[id^="${rowName}"]`);
  for (const input of rowInputs) {
    input.checked = isChecked;
  }

  for (const checkbox of lastCheckboxes) {
    if (checkbox.name !== rowName && isChecked) {
      checkbox.checked = false;
    }
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
