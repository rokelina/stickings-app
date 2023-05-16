import { Vex } from 'vexflow';

function renderEightNotesStaff() {
  const parentDiv = document.getElementById('notes-graph');

  if (!parentDiv.hasChildNodes()) {
    const { Renderer, Stave, StaveNote, Beam, Formatter } = Vex.Flow;
    // Create an SVG renderer and attach it to the DIV element with id="output".
    const renderer = new Renderer(parentDiv, Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(600, 125);
    const context = renderer.getContext();
    context.setFont('Arial', 10);

    // Create a stave of width 400 at position 10, 40.
    const stave = new Stave(10, 40, 600);

    // Add a clef and time signature.
    stave.addClef('percussion').addTimeSignature('4/4');

    // Create notes for the voice.
    const notes1 = [
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
    ];

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

    // Render the stave
    stave.setContext(context).draw();
  }
}

export default renderEightNotesStaff;
