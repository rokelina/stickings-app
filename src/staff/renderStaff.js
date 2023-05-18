import renderEightNotesStaff from './eightNotesStaff';
import renderTripletNotesStaff from './tripletNotesStaff';

function renderStaff() {
  const label = document.querySelector('label');
  if (label.textContent.length === 2) {
    renderEightNotesStaff();
  } else {
    renderTripletNotesStaff();
  }
}

export default renderStaff;
