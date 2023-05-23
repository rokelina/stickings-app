import { Vex } from 'vexflow';

function renderEmptyStaff() {
  const parentDiv = document.getElementById('notes-graph');

  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }

  const { Renderer, Stave } = Vex.Flow;
  const renderer = new Renderer(parentDiv, Renderer.Backends.SVG);

  renderer.resize(650, 200);
  const context = renderer.getContext();
  context.setFont('Arial', 10);

  const stave = new Stave(25, 40, 600);

  stave.addClef('percussion').addTimeSignature('4/4');

  stave.setContext(context).draw();
}

export default renderEmptyStaff;
