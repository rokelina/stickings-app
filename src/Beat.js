import Note from './Note';
class TwoHitBeat {
  constructor(permutationArray, key, id) {
    this.first = permutationArray[0];
    this.second = permutationArray[1];
    this.beat = key + 1;
    this.id = id;
    this.noteValue = 'eight notes';
  }

  get describe() {
    return {
      id: this.id,
      beat: this.beat,
      noteValue: this.noteValue,
      firstNote: this.first,
      secondNote: this.second,
    };
  }

  storeNotes() {
    if (this.beat === 1) {
      const first = new Note(this.first, 1);
      const second = new Note(this.second, 2);
      localStorage.setItem('note-1', JSON.stringify(first));
      localStorage.setItem('note-2', JSON.stringify(second));
    } else if (this.beat === 2) {
      const first = new Note(this.first, 3);
      const second = new Note(this.second, 4);
      localStorage.setItem('note-3', JSON.stringify(first));
      localStorage.setItem('note-4', JSON.stringify(second));
    } else if (this.beat === 3) {
      const first = new Note(this.first, 5);
      const second = new Note(this.second, 6);
      localStorage.setItem('note-5', JSON.stringify(first));
      localStorage.setItem('note-6', JSON.stringify(second));
    } else if (this.beat === 4) {
      const first = new Note(this.first, 7);
      const second = new Note(this.second, 8);
      localStorage.setItem('note-7', JSON.stringify(first));
      localStorage.setItem('note-8', JSON.stringify(second));
    } else {
      throw new Error('Something went wrong');
    }
  }
}

class ThreeHitBeat {
  constructor(permutationArray, key, id) {
    this.first = permutationArray[0];
    this.second = permutationArray[1];
    this.third = permutationArray[2];
    this.beat = key + 1;
    this.id = id;
    this.noteValue = 'triplet';
  }

  get describe() {
    return {
      id: this.id,
      beat: this.beat,
      noteValue: this.noteValue,
      firstNote: this.first,
      secondNote: this.second,
      thirdNote: this.third,
    };
  }

  storeNotes() {
    if (this.beat === 1) {
      const first = new Note(this.first, 1);
      const second = new Note(this.second, 2);
      const third = new Note(this.third, 3);
      localStorage.setItem('note-1', JSON.stringify(first));
      localStorage.setItem('note-2', JSON.stringify(second));
      localStorage.setItem('note-3', JSON.stringify(third));
    } else if (this.beat === 2) {
      const first = new Note(this.first, 4);
      const second = new Note(this.second, 5);
      const third = new Note(this.third, 6);
      localStorage.setItem('note-4', JSON.stringify(first));
      localStorage.setItem('note-5', JSON.stringify(second));
      localStorage.setItem('note-6', JSON.stringify(third));
    } else if (this.beat === 3) {
      const first = new Note(this.first, 7);
      const second = new Note(this.second, 8);
      const third = new Note(this.third, 9);
      localStorage.setItem('note-7', JSON.stringify(first));
      localStorage.setItem('note-8', JSON.stringify(second));
      localStorage.setItem('note-9', JSON.stringify(third));
    } else if (this.beat === 4) {
      const first = new Note(this.first, 10);
      const second = new Note(this.second, 11);
      const third = new Note(this.third, 12);
      localStorage.setItem('note-10', JSON.stringify(first));
      localStorage.setItem('note-11', JSON.stringify(second));
      localStorage.setItem('note-12', JSON.stringify(third));
    } else {
      throw new Error('Something went wrong');
    }
  }
}

export { TwoHitBeat, ThreeHitBeat };
