import { Vex } from 'vexflow';

function randomAnnotate() {
  const { Annotation } = Vex.Flow;

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

function drawStaff() {
  const { Renderer, Stave } = Vex.Flow;

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
  // Render the stave
  stave.setContext(context).draw();

  return [context, stave];
}

export { randomAnnotate, drawStaff };
