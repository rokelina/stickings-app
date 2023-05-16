import { Vex } from 'vexflow';

function renderEightNotesStaff() {
  const { Renderer, Stave, StaveNote, Beam, Voice } = Vex.Flow;

  // Create an SVG renderer and attach it to the DIV element with id="output".
  const div = document.getElementById('notes-graph');
  const renderer = new Renderer(div, Renderer.Backends.SVG);

  // Configure the rendering context.
  renderer.resize(500, 125);
  const context = renderer.getContext();
  context.setFont('Arial', 10);

  // Create a stave of width 400 at position 10, 40.
  const stave = new Stave(10, 40, 500);

  // Add a clef and time signature.
  stave.addClef('percussion').addTimeSignature('4/4');

  // Create notes for the voice.
  const notes = [
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
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
    new StaveNote({
      keys: ['A/4'],
      duration: '8',
    }),
  ];

  // Create a voice for the stave.
  const voice = new Voice({ num_beats: 4, beat_value: 4 });
  // Add the notes to the voice.
  voice.addTickables(notes);

  const beam = new Beam(notes);

  // Format the tick context to properly position the notes and beams.
  const formatter = new Vex.Flow.Formatter()
    .joinVoices([voice])
    .format([voice], 400);

  // Render the stave and the notes.
  stave.setContext(context).draw();
  voice.draw(context, stave);
  beam.setContext(context).draw();
}

export default renderEightNotesStaff;
