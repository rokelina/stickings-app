//MIGHT NOT NEED A STORAGE CLASS
import Note from './Note';
class Storage {
  static getBeatOne() {
    const beatObj = JSON.parse(localStorage.getItem('beat-1'));
    if (beatObj.noteValue === 'eight notes') {
      const first = new Note(beatObj.firstNote, 1);
      const second = new Note(beatObj.secondNote, 2);
      console.log(first, second);
      return [first, second];
    } else if (beatObj.noteValue === 'triplet') {
      const first = new Note(beatObj.firstNote, 1);
      const second = new Note(beatObj.secondNote, 2);
      const third = new Note(beatObj.thirdNote, 3);

      return [first, second, third];
    } else {
      throw new Error('Something went wrong');
    }
  }
  static getBeatTwo() {
    const beatObj = JSON.parse(localStorage.getItem('beat-2'));
    if (beatObj.noteValue === 'eight notes') {
      const first = new Note(beatObj.firstNote, 3);
      const second = new Note(beatObj.secondNote, 4);
      return [first, second];
    } else if (beatObj.noteValue === 'triplet') {
      const first = new Note(beatObj.firstNote, 4);
      const second = new Note(beatObj.secondNote, 5);
      const third = new Note(beatObj.thirdNote, 6);
      return [first, second, third];
    } else {
      throw new Error('Something went wrong');
    }
  }
  static getBeatThree() {
    const beatObj = JSON.parse(localStorage.getItem('beat-3'));
    if (beatObj.noteValue === 'eight notes') {
      const first = new Note(beatObj.firstNote, 5);
      const second = new Note(beatObj.secondNote, 6);
      return [first, second];
    } else if (beatObj.noteValue === 'triplet') {
      const first = new Note(beatObj.firstNote, 7);
      const second = new Note(beatObj.secondNote, 8);
      const third = new Note(beatObj.thirdNote, 9);
      return [first, second, third];
    } else {
      throw new Error('Something went wrong');
    }
  }
  static getBeatFour() {
    const beatObj = JSON.parse(localStorage.getItem('beat-4'));
    if (beatObj.noteValue === 'eight notes') {
      const first = new Note(beatObj.firstNote, 7);
      const second = new Note(beatObj.secondNote, 8);
      return [first, second];
    } else if (beatObj.noteValue === 'triplet') {
      const first = new Note(beatObj.firstNote, 10);
      const second = new Note(beatObj.secondNote, 11);
      const third = new Note(beatObj.thirdNote, 12);
      return [first, second, third];
    } else {
      throw new Error('Something went wrong');
    }
  }
}
export default Storage;
