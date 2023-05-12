function clearStorage() {
  localStorage.clear();
}

function clearUI() {
  const allInputs = document.querySelectorAll('input');
  const allStickings = document.querySelectorAll('.note');
  for (const input of allInputs) {
    input.checked = false;
  }
  for (const sticking of allStickings) {
    sticking.textContent = '';
  }
}

export { clearStorage, clearUI };
