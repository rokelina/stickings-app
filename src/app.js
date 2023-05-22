import './css/style.css';
import { saveSelection, saveRow, checkRow } from './dataUtils';
import { getEightNotesMenu, getTripletsMenu } from './menuUtils';
import { clearStorage, clearUI } from './helpers';
import renderEightNotesStaff from './staff/eightNotesStaff';
import renderTripletNotesStaff from './staff/tripletNotesStaff';
import renderStaff from './staff/renderStaff';
import {
  removeMenuContainer,
  createRandomMenu,
} from './random/randomMenuUtils';

// callback to select the entire row when the checkbox is checked
function selectRow(e) {
  saveRow(e);
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

function onRandom() {
  removeMenuContainer();
  createRandomMenu();
}

function attachEventListeners() {
  document
    .getElementById('reset-button')
    .addEventListener('click', clearStorage);
  document.getElementById('reset-button').addEventListener('click', clearUI);
  document
    .getElementById('reset-button')
    .addEventListener('click', renderStaff);
  document
    .getElementById('menu-container')
    .addEventListener('click', onSelectStickings);
  document
    .getElementById('menu-container')
    .addEventListener('click', onSelectRow);
}

function onEightNotesClick() {
  getEightNotesMenu();
  renderEightNotesStaff();
  attachEventListeners();
}
function onTripletNotesClick() {
  getTripletsMenu();
  renderTripletNotesStaff();
  attachEventListeners();
}
function onLoad() {
  clearStorage();
  clearUI();
  getEightNotesMenu();
  renderEightNotesStaff();
  attachEventListeners();
}

function init() {
  document.addEventListener('DOMContentLoaded', onLoad);

  document
    .getElementById('eight-notes')
    .addEventListener('click', onEightNotesClick);
  document
    .getElementById('triplets')
    .addEventListener('click', onTripletNotesClick);
  document
    .getElementById('random-stickings')
    .addEventListener('click', onRandom);
}

init();
