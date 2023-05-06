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

export default populateNotes;
