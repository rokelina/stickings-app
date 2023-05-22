// remove 'menu card'
function removeMenuContainer() {
  const parentMenu = document.getElementById('menu');
  if (parentMenu.firstChild) {
    while (parentMenu.firstChild) {
      parentMenu.removeChild(parentMenu.firstChild);
    }
  }
}

// create 'random menu'
function createRandomMenu() {
  const parentMenu = document.getElementById('menu');
  const container = document.createElement('div');
  container.id = 'random-container';
  container.className = 'random-container';

  const fragment = document.createDocumentFragment();
  const radioNames = ['combinations', 'eights', 'triplets'];

  radioNames.forEach((name) => {
    // Create a label element
    const label = document.createElement('label');

    // Create a radio input element
    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'options';
    radioInput.value = name;

    // Append the radio input to the label
    label.appendChild(radioInput);
    label.id = name;

    // Create a text node for the label text
    const labelText = document.createTextNode(name);

    // Append the label text to the label
    label.appendChild(labelText);

    // Append the label to the fragment
    fragment.appendChild(label);
  });

  container.appendChild(fragment);
  parentMenu.appendChild(container);
}

export { removeMenuContainer, createRandomMenu };
