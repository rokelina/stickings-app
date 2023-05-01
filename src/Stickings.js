class TwoHitBeat {
  constructor(permutationArray, key) {
    this.first = permutationArray[0];
    this.second = permutationArray[1];
    this.beat = key + 1;
  }
}

class ThreeHitBeat {
  constructor(permutationArray, key) {
    this.first = permutationArray[0];
    this.second = permutationArray[1];
    this.third = permutationArray[2];
    this.beat = key + 1;
  }
}

const EightNotesPermutations = Object.freeze({
  rl: ['R', 'L'],
  lr: ['L', 'R'],
  rr: ['R', 'R'],
  ll: ['L', 'L'],
});

const TripletPermutations = Object.freeze({
  rlr: ['R', 'L', 'R'],
  lrl: ['L', 'R', 'L'],
  rrl: ['R', 'R', 'L'],
  llr: ['L', 'L', 'R'],
  rll: ['R', 'L', 'L'],
  lrr: ['L', 'R', 'R'],
  rrr: ['R', 'R', 'R'],
  lll: ['L', 'L', 'L'],
});

console.log(Permutations.ll);
