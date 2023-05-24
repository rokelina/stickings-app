import { Vex } from 'vexflow';
import { randomAnnotate, drawStaff } from './randomHelpers';
function randomEightNotes() {
  const { StaveNote, Beam, Formatter } = Vex.Flow;

  const [context, stave] = drawStaff();

  const beats = [0, 1, 2, 3];

  let allBeats = [];

  beats.forEach((beat) => {
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
  });

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
