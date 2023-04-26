const eightNotesMenu = Object.freeze({
  rl: 'RL',
  lr: 'LR',
  rr: 'RR',
  ll: 'LL',
});

const columns = document.querySelectorAll('ul');
console.log(columns);

function createMenu() {
  columns.forEach((column) => {
    for (const prop in eightNotesMenu) {
      const child = document.createElement('li');
      if (!column.id) {
        child.innerHTML = `<input type="checkbox" id="${prop}" /><label>${eightNotesMenu[prop]}</label>`;
        column.appendChild(child);
      } else {
        child.innerHTML = `<input type="checkbox" id="${prop}" />`;
        column.appendChild(child);
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', createMenu);
