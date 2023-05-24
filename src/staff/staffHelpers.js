import { Vex } from 'vexflow';

function annotate(hand) {
  const { Annotation } = Vex.Flow;
  return new Annotation(hand)
    .setVerticalJustification(Annotation.VerticalJustify.BOTTOM)
    .setFont('Arial', 14, 'bold');
}

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

function getLocalStorage() {
  const regex = /^beat-/;
  const beatArray = [];
  // Loop through all items in localStorage and retrieve items that match the regular expression
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (regex.test(key)) {
      const value = JSON.parse(localStorage.getItem(key));
      beatArray.push(value);
    }
  }
  return beatArray;
}

export { annotate, randomAnnotate, drawStaff, getLocalStorage };
