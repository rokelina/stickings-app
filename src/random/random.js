// choose triplet or eight note

//if triplet, pick three notes from three notes array
//add triplet beams
//if eight note, pick from eight note array
// add 8th note beams

//randomAllNotes

function randomAllNotes() {
  const beats = [0, 1, 2, 3];

  let allNotes;

  beats.forEach((beat) => {
    let beat = [];

    if (Math.random() < 0.5) {
      //pick triplet
      // pick L or R for each staff note
    } else {
      //pick eight
    }
    //allnotes.append(beat)
  });

  for (let i = 1; i < allNotes.length; i++) {
    allNotes[0].concat(allNotes[i]);
  }

  allNotes = allNotes.slice(0, 1);

  return allNotes;
}
