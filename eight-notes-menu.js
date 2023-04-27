const eightNotesMenu = Object.freeze({
  rl: 'RL',
  lr: 'LR',
  rr: 'RR',
  ll: 'LL',
});

const columns = document.querySelectorAll('#column');
console.log(columns);

function createMenu() {
  columns.forEach((column, key) => {
    for (const prop in eightNotesMenu) {
      const child = document.createElement('div');
      child.classList.add('sticking');
      if (!column.classList.contains('last')) {
        child.innerHTML = `<input type="checkbox" id="${prop}" key="${key}" name="sticking"/><label for="${prop}" key="${key}">${eightNotesMenu[prop]}</label>`;
        column.appendChild(child);
      } else {
        child.innerHTML = `<input type="checkbox" id="${prop}" />`;
        column.appendChild(child);
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', createMenu);
