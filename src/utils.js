// helper functions
import { TwoHitBeat, ThreeHitBeat } from './Beat';

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

export { createNoteButtons, saveSelection, populateNotes };
