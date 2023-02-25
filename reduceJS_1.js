let a = [-3, 4, -5, 7, -6, 2];

let b = a.reduce((accum, item) => {
  if (item > accum) {
    accum = item;
  }
  return accum;
}, 0);
console.log("=========");
console.log(b);
