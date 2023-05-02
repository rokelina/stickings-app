class Storage {
  static addBeat(beat) {
    const beats = Storage.getBeats();
    beats.push(beat);
    localStorage.setItem('beats', JSON.stringify(beats));
  }

  static getBeats() {
    let beats;
    if (localStorage.getItem('beats') === null) {
      beats = [];
    } else {
      beats = JSON.parse(localStorage.getItem('beats'));
    }
    return beats;
  }
}

export default Storage;
