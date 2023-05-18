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
      sticking: this.first.toLowerCase() + this.second.toLowerCase(),
      firstNote: this.first,
      secondNote: this.second,
    };
  }

  storeNotes() {
    let first;
    let second;

    switch (this.beat) {
      case 1:
        first = new Note(this.first, 1);
        second = new Note(this.second, 2);
        localStorage.setItem('note-1', JSON.stringify(first));
        localStorage.setItem('note-2', JSON.stringify(second));
        break;
      case 2:
        first = new Note(this.first, 3);
        second = new Note(this.second, 4);
        localStorage.setItem('note-3', JSON.stringify(first));
        localStorage.setItem('note-4', JSON.stringify(second));
        break;
      case 3:
        first = new Note(this.first, 5);
        second = new Note(this.second, 6);
        localStorage.setItem('note-5', JSON.stringify(first));
        localStorage.setItem('note-6', JSON.stringify(second));
        break;
      case 4:
        first = new Note(this.first, 7);
        second = new Note(this.second, 8);
        localStorage.setItem('note-7', JSON.stringify(first));
        localStorage.setItem('note-8', JSON.stringify(second));
        break;
      default:
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
      sticking:
        this.first.toLowerCase() +
        this.second.toLowerCase() +
        this.third.toLowerCase(),
      firstNote: this.first,
      secondNote: this.second,
      thirdNote: this.third,
    };
  }

  storeNotes() {
    let first;
    let second;
    let third;

    switch (this.beat) {
      case 1:
        first = new Note(this.first, 1);
        second = new Note(this.second, 2);
        third = new Note(this.third, 3);
        localStorage.setItem('note-1', JSON.stringify(first));
        localStorage.setItem('note-2', JSON.stringify(second));
        localStorage.setItem('note-3', JSON.stringify(third));
        break;
      case 2:
        first = new Note(this.first, 4);
        second = new Note(this.second, 5);
        third = new Note(this.third, 6);
        localStorage.setItem('note-4', JSON.stringify(first));
        localStorage.setItem('note-5', JSON.stringify(second));
        localStorage.setItem('note-6', JSON.stringify(third));
        break;
      case 3:
        first = new Note(this.first, 7);
        second = new Note(this.second, 8);
        third = new Note(this.third, 9);
        localStorage.setItem('note-7', JSON.stringify(first));
        localStorage.setItem('note-8', JSON.stringify(second));
        localStorage.setItem('note-9', JSON.stringify(third));
        break;
      case 4:
        first = new Note(this.first, 10);
        second = new Note(this.second, 11);
        third = new Note(this.third, 12);
        localStorage.setItem('note-10', JSON.stringify(first));
        localStorage.setItem('note-11', JSON.stringify(second));
        localStorage.setItem('note-12', JSON.stringify(third));
        break;
      default:
        throw new Error('Something went wrong');
    }
  }
}

export { TwoHitBeat, ThreeHitBeat };
