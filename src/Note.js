// define Note class
class Note {
  constructor(hand, position) {
    this.hand = hand;
    this.position = position;
    this.isAccented = false;
  }

  get describe() {
    return {
      hand: this.hand,
      position: this.position,
      isAccented: false,
    };
  }
}

export default Note;
