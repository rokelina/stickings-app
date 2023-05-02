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
      firstHit: { hand: this.first, isAccented: false },
      secondHit: { hand: this.second, isAccented: false },
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
      firstHit: { hand: this.first, isAccented: false },
      secondHit: { hand: this.second, isAccented: false },
      thirdHit: { hand: this.third, isAccented: false },
    };
  }
}

export { TwoHitBeat, ThreeHitBeat };
