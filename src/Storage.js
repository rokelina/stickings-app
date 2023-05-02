class Storage {
  static addBeat(beat, positionKey) {
    const beats = JSON.parse(localStorage.getItem(positionKey));
    beats.push(beat);
    localStorage.setItem(positionKey, JSON.stringify(beat));
  }

  static initializeStorage() {
    localStorage.setItem('beat-1', JSON.stringify([]));
    localStorage.setItem('beat-2', JSON.stringify([]));
    localStorage.setItem('beat-3', JSON.stringify([]));
    localStorage.setItem('beat-4', JSON.stringify([]));
  }
  // static getBeats(key) {
  //   let beats;
  //   if (localStorage.getItem(key) === null) {
  //     beats = [];
  //   } else {
  //     beats = JSON.parse(localStorage.getItem(key));
  //   }
  //   return beats;
  // }
}

export default Storage;
