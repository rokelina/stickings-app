import './css/style.css';
import { saveSelection, checkRow } from './noteUtils';
import { eightNotesMenu, tripletsMenu } from './menuUtils';
import { clearStorage, clearUI } from './helpers';
import renderEightNotesStaff from './eightNotesStaff';
import renderTripletNotesStaff from './tripletNotesStaff';

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

    saveSelection(input, toArray, key, id, name);
  }

  if (!isChecked) {
    clearStorage();
    clearUI();
  }

  if (rowName.length === 2) {
    renderEightNotesStaff();
  } else if (rowName.length === 3) {
    renderTripletNotesStaff();
  } else {
    throw Error('Something went wrong');
  }

  // populateNotes();
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
  // populateNotes();
  checkRow();

  if (id.length === 3) {
    renderEightNotesStaff();
  } else if (id.length === 4) {
    renderTripletNotesStaff();
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

function onLoad() {
  eightNotesMenu();
  renderEightNotesStaff();
  clearStorage();
  clearUI();
}

function init() {
  document.addEventListener('DOMContentLoaded', onLoad);
  document
    .getElementById('reset-button')
    .addEventListener('click', clearStorage);
  document.getElementById('reset-button').addEventListener('click', clearUI);
  document
    .getElementById('eight-notes')
    .addEventListener('click', eightNotesMenu);
  document
    .getElementById('eight-notes')
    .addEventListener('click', renderEightNotesStaff);
  document.getElementById('triplets').addEventListener('click', tripletsMenu);
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
