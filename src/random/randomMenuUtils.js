function createRandomMenu() {
  // removes childs from parent container
  const parentMenu = document.getElementById('menu');
  if (parentMenu.firstChild) {
    while (parentMenu.firstChild) {
      parentMenu.removeChild(parentMenu.firstChild);
    }
  }

  //create 'random menu' container and options
  const container = document.createElement('div');
  container.id = 'random-container';
  container.className = 'random-container';

  const options = document.createElement('div');
  options.id = 'random-options';
  options.className = 'random-options';

  const controls = document.createElement('div');
  controls.id = 'random-controls';
  controls.className = 'random-controls';

  const fragment = document.createDocumentFragment();
  const radioNames = ['combinations', 'eights', 'triplets'];

  radioNames.forEach((name) => {
    const label = document.createElement('label');

    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'options';
    radioInput.value = name;

    label.appendChild(radioInput);
    label.id = name;

    const labelText = document.createTextNode(name);

    label.appendChild(labelText);

    fragment.appendChild(label);
  });

  const button = document.createElement('button');
  button.id = 'refresh-button';
  button.className = 'refresh-button';
  button.textContent = '🔁 Generate';

  options.appendChild(fragment);
  controls.appendChild(button);
  container.appendChild(options);
  container.appendChild(controls);
  parentMenu.appendChild(container);
}

export default createRandomMenu;
