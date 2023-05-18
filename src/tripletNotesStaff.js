import { Vex } from 'vexflow';

function renderTripletNotesStaff() {
  const parentDiv = document.getElementById('notes-graph');

  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }

  const { Renderer, Stave, StaveNote, Beam, Tuplet, Formatter, Annotation } =
    Vex.Flow;
  // Create an SVG renderer and attach it to the DIV element
  const renderer = new Renderer(parentDiv, Renderer.Backends.SVG);

  // Configure the rendering context.
  renderer.resize(650, 200);
  const context = renderer.getContext();
  context.setFont('Arial', 10);

  const stave = new Stave(25, 40, 600);

  // Add a clef and time signature.
  stave.addClef('percussion').addTimeSignature('4/4');

  let notes1 = [
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
  ];
  let notes2 = [
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
  ];
  let notes3 = [
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
  ];
  let notes4 = [
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
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
            new StaveNote({
              keys: ['A/4'],
              duration: '8',
            }).addModifier(annotate(value.thirdNote)),
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
            new StaveNote({
              keys: ['A/4'],
              duration: '8',
            }).addModifier(annotate(value.thirdNote)),
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
            new StaveNote({
              keys: ['A/4'],
              duration: '8',
            }).addModifier(annotate(value.thirdNote)),
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
            new StaveNote({
              keys: ['A/4'],
              duration: '8',
            }).addModifier(annotate(value.thirdNote)),
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

  const tuplets = [
    new Tuplet(notes1),
    new Tuplet(notes2),
    new Tuplet(notes3),
    new Tuplet(notes4),
  ];

  Formatter.FormatAndDraw(context, stave, allNotes);

  // Draw the beams and stems.
  beams.forEach((b) => {
    b.setContext(context).draw();
  });
  //draw tuplets
  tuplets.forEach((t) => t.setContext(context).draw());
  // Render the stave
  stave.setContext(context).draw();

  //helper function
  function annotate(hand) {
    return new Annotation(hand)
      .setVerticalJustification(Annotation.VerticalJustify.BOTTOM)
      .setFont('Arial', 14, 'bold');
  }
}

function getLocalStorage() {
  const regex = /^beat-/;
  const beatArray = [];
  // Loop through all items in localStorage and retrieve items that match the regular expression
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (regex.test(key)) {
      const value = JSON.parse(localStorage.getItem(key));
      if (value.noteValue === 'triplet') {
        beatArray.push(value);
      }
    }
  }
  return beatArray;
}

export default renderTripletNotesStaff;
