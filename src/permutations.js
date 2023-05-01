const eightNotesPermutations = Object.freeze({
  rl: ['R', 'L'],
  lr: ['L', 'R'],
  rr: ['R', 'R'],
  ll: ['L', 'L'],
});

const tripletPermutations = Object.freeze({
  rlr: ['R', 'L', 'R'],
  lrl: ['L', 'R', 'L'],
  rrl: ['R', 'R', 'L'],
  llr: ['L', 'L', 'R'],
  rll: ['R', 'L', 'L'],
  lrr: ['L', 'R', 'R'],
  rrr: ['R', 'R', 'R'],
  lll: ['L', 'L', 'L'],
});

export { eightNotesPermutations, tripletPermutations };
