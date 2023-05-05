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
}

export { TwoHitBeat, ThreeHitBeat };
