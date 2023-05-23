import { Vex } from 'vexflow';
function randomAllNotes() {
  const { Renderer, Stave, StaveNote, Beam, Tuplet, Formatter, Annotation } =
    Vex.Flow;

  const parentDiv = document.getElementById('notes-graph');
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }

  const renderer = new Renderer(parentDiv, Renderer.Backends.SVG);
  renderer.resize(650, 200);
  const context = renderer.getContext();
  context.setFont('Arial', 10);

  const stave = new Stave(25, 40, 600);

  stave.addClef('percussion').addTimeSignature('4/4');

  const beats = [0, 1, 2, 3];

  let allBeats = [];

  beats.forEach((beat) => {
    let notes;

    if (Math.random() < 0.5) {
      //pick triplet
      // pick L or R for each staff note
      notes = [
        new StaveNote({
          keys: ['A/4'],
          duration: '8',
        }).addModifier(annotate()),
        new StaveNote({
          keys: ['A/4'],
          duration: '8',
        }).addModifier(annotate()),
        new StaveNote({
          keys: ['A/4'],
          duration: '8',
        }).addModifier(annotate()),
      ];
    } else {
      //pick eight
      notes = [
        new StaveNote({
          keys: ['A/4'],
          duration: '8',
        }).addModifier(annotate()),
        new StaveNote({
          keys: ['A/4'],
          duration: '8',
        }).addModifier(annotate()),
      ];
    }
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

  let tuplets = [];

  allBeats.forEach((beat) => {
    if (beat.length > 2) {
      tuplets.push(new Tuplet(beat));
    }
  });

  Formatter.FormatAndDraw(context, stave, allNotes);

  // Draw the beams and stems.
  beams.forEach((b) => {
    b.setContext(context).draw();
  });

  //draw tuplets
  if (tuplets !== []) {
    tuplets.forEach((t) => t.setContext(context).draw());
  }

  // Render the stave
  stave.setContext(context).draw();
  function annotate() {
    let hand;
    if (Math.random() < 0.5) {
      hand = 'R';
    } else {
      hand = 'L';
    }
    return new Annotation(hand)
      .setVerticalJustification(Annotation.VerticalJustify.BOTTOM)
      .setFont('Arial', 14, 'bold');
  }
}

export default randomAllNotes;
