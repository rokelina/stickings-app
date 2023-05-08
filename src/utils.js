// helper functions
import { TwoHitBeat, ThreeHitBeat } from './Beat';

// Create the note buttons dynamically according to the given permutation object
function createNoteButtons(permutationObject) {
  const stickingsContainer = document.getElementById('stickings-container');
  const subdivision = Object.values(permutationObject)[0].length;
  // total notes will be subdivision * 4
  for (let i = 0; i < subdivision * 4; i++) {
    const noteButton = document.createElement('button');
    noteButton.setAttribute('id', `note-${i + 1}`);
    noteButton.classList.add('note');
    stickingsContainer.appendChild(noteButton);
  }
}

// Saves selected stickings to storage, creates the Note instances and saves them in storage
function saveSelection(selection, array, key, id, name) {
  if (id.length === 3) {
    selection = new TwoHitBeat(array, key, id);
    localStorage.setItem(name, JSON.stringify(selection.describe));
    selection.storeNotes();
  } else if (id.length === 4) {
    selection = new ThreeHitBeat(array, key, id);
    localStorage.setItem(name, JSON.stringify(selection.describe));
    selection.storeNotes();
  } else {
    throw Error('Something went wrong');
  }
}

// Read Note items from storage
function populateNotes() {
  const noteButtons = document.querySelectorAll('.note');
  const regex = /^note-/;
  const noteArray = [];
  // Loop through all items in localStorage and retrieve items that match the regular expression
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (regex.test(key)) {
      const value = JSON.parse(localStorage.getItem(key));
      noteArray.push([key, value]);
    }
  }

  noteArray.forEach((note) => {
    for (const button of noteButtons) {
      if (note[0] === button.id) {
        button.textContent = note[1].hand;
      }
    }
  });
}

function checkRow() {
  const beatsQuery = /^beat/;
  const beatIdArray = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (beatsQuery.test(key)) {
      const value = JSON.parse(localStorage.getItem(key));
      beatIdArray.push(value.id);
    }
  }

  const newArray = beatIdArray.map((id) => id.substring(0, 3));
  const toSet = new Set(newArray);
  if (beatIdArray.length === 4 && toSet.size === 1) {
    const checkbox = document.getElementById(newArray[0]);
    checkbox.checked = true;
  } else {
    const lastColumn = document.querySelector('.last');
    const rowCheckboxes = lastColumn.querySelectorAll('input[type="checkbox"]');
    for (const checkbox of rowCheckboxes) {
      checkbox.checked = false;
    }
  }
}

export { createNoteButtons, saveSelection, populateNotes, checkRow };
