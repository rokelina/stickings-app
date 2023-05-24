import { Vex } from 'vexflow';
import { randomAnnotate, drawStaff } from '../staff/staffHelpers';
function randomEightNotes() {
  const { StaveNote, Beam, Formatter } = Vex.Flow;
  const [context, stave] = drawStaff();

  let allBeats = [];

  for (let i = 0; i < 4; i++) {
    let notes = [
      new StaveNote({
        keys: ['A/4'],
        duration: '8',
      }).addModifier(randomAnnotate()),
      new StaveNote({
        keys: ['A/4'],
        duration: '8',
      }).addModifier(randomAnnotate()),
    ];

    allBeats.push(notes);
  }

  const allNotes = allBeats[0]
    .concat(allBeats[1])
    .concat(allBeats[2])
    .concat(allBeats[3]);

  const beams = [
    new Beam(allBeats[0]),
    new Beam(allBeats[1]),
    new Beam(allBeats[2]),
    new Beam(allBeats[3]),
  ];

  Formatter.FormatAndDraw(context, stave, allNotes);

  // Draw the beams and stems.
  beams.forEach((b) => {
    b.setContext(context).draw();
  });
}

export default randomEightNotes;
