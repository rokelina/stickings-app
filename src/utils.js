// helper functions

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

export default createNoteButtons;
