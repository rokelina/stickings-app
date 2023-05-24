import { Vex } from 'vexflow';
import { annotate, drawStaff, getLocalStorage } from './staffHelpers';

function renderEightNotesStaff() {
  const { StaveNote, Beam, Formatter } = Vex.Flow;
  const [context, stave] = drawStaff();

  let notes1;
  let notes2;
  let notes3;
  let notes4;

  notes1 = [
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
  ];
  notes2 = [
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
  ];
  notes3 = [
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
  ];
  notes4 = [
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
  ];

  const storage = getLocalStorage();

  if (storage.length) {
    for (const value of storage) {
      switch (value.beat) {
        case 1:
          notes1 = [
            new StaveNote({
              keys: ['A/4'],
              duration: '8',
            }).addModifier(annotate(value.firstNote)),
            new StaveNote({
              keys: ['A/4'],
              duration: '8',
            }).addModifier(annotate(value.secondNote)),
          ];
          break;
        case 2:
          notes2 = [
            new StaveNote({
              keys: ['A/4'],
              duration: '8',
            }).addModifier(annotate(value.firstNote)),
            new StaveNote({
              keys: ['A/4'],
              duration: '8',
            }).addModifier(annotate(value.secondNote)),
          ];
          break;
        case 3:
          notes3 = [
            new StaveNote({
              keys: ['A/4'],
              duration: '8',
            }).addModifier(annotate(value.firstNote)),
            new StaveNote({
              keys: ['A/4'],
              duration: '8',
            }).addModifier(annotate(value.secondNote)),
          ];
          break;
        case 4:
          notes4 = [
            new StaveNote({
              keys: ['A/4'],
              duration: '8',
            }).addModifier(annotate(value.firstNote)),
            new StaveNote({
              keys: ['A/4'],
              duration: '8',
            }).addModifier(annotate(value.secondNote)),
          ];
          break;
        default:
          console.log('Something is wrong');
          break;
      }
    }
  }

  const allNotes = notes1.concat(notes2).concat(notes3).concat(notes4);

  // This hides the normal stems and flags.
  const beams = [
    new Beam(notes1),
    new Beam(notes2),
    new Beam(notes3),
    new Beam(notes4),
  ];

  Formatter.FormatAndDraw(context, stave, allNotes);

  // Draw the beams and stems.
  beams.forEach((b) => {
    b.setContext(context).draw();
  });
}

export default renderEightNotesStaff;
