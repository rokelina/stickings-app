import './css/style.css';
import { saveSelection, checkRow } from './noteUtils';
import { getEightNotesMenu, getTripletsMenu } from './menuUtils';
import { clearStorage, clearUI } from './helpers';
import renderEightNotesStaff from './eightNotesStaff';
import renderTripletNotesStaff from './tripletNotesStaff';

function renderStaff() {
  const label = document.querySelector('label');
  if (label.textContent.length === 2) {
    renderEightNotesStaff();
  } else {
    renderTripletNotesStaff();
  }
}

// callback to select the entire row when the checkbox is checked
function selectRow(e) {
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

  renderStaff();
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
  let input = e.target;
  const dataHands = input.dataset.hands;
  const toArray = dataHands.split(',');
  const key = +input.getAttribute('key');
  const id = input.id;
  const name = input.name;

  saveSelection(toArray, key, id, name);
  checkRow();
  renderStaff();
}

function onSelectStickings() {
  const stickings = document.querySelectorAll('.sticking');
  for (const sticking of stickings) {
    sticking.addEventListener('change', selectStickings);
  }
}

function onLoad() {
  clearStorage();
  clearUI();
  getEightNotesMenu();
  renderEightNotesStaff();
}

function init() {
  document.addEventListener('DOMContentLoaded', onLoad);
  document
    .getElementById('reset-button')
    .addEventListener('click', clearStorage);
  document.getElementById('reset-button').addEventListener('click', clearUI);
  document
    .getElementById('reset-button')
    .addEventListener('click', renderStaff);
  document
    .getElementById('eight-notes')
    .addEventListener('click', getEightNotesMenu);
  document
    .getElementById('eight-notes')
    .addEventListener('click', renderEightNotesStaff);
  document
    .getElementById('triplets')
    .addEventListener('click', getTripletsMenu);
  document
    .getElementById('triplets')
    .addEventListener('click', renderTripletNotesStaff);
  document
    .getElementById('menu-container')
    .addEventListener('click', onSelectStickings);
  document
    .getElementById('menu-container')
    .addEventListener('click', onSelectRow);
}

init();
