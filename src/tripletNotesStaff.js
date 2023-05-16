import { Vex } from 'vexflow';

function renderTripletNotesStaff() {
  const parentDiv = document.getElementById('notes-graph');

  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }

  const { Renderer, Stave, StaveNote, Beam, Tuplet, Formatter } = Vex.Flow;
  // Create an SVG renderer and attach it to the DIV element with id="output".
  const renderer = new Renderer(parentDiv, Renderer.Backends.SVG);

  // Configure the rendering context.
  renderer.resize(650, 125);
  const context = renderer.getContext();
  context.setFont('Arial', 10);

  const stave = new Stave(25, 40, 600);

  // Add a clef and time signature.
  stave.addClef('percussion').addTimeSignature('4/4');

  const notes1 = [
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
  const notes2 = [
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
  const notes3 = [
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
  const notes4 = [
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

  tuplets.forEach((t) => t.setContext(context).draw());

  // Render the stave
  stave.setContext(context).draw();
}

export default renderTripletNotesStaff;
